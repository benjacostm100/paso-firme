import { useEffect, useState } from "react";

export interface DescubriendoData {
  id: string;
  fecha: string;
  hora: string;
  duracion: string;
  plataforma: string;
  precio: string;
}

const useSheetDataDescubriendo = () => {
  const [data, setData] = useState<DescubriendoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vS74s6R-490DkeaLQ9WslFVZPEL_JBS6wmmO8qvps0RRPXKkI4q_ahJuZUSl79jxfcLuG8q2_fEeEWz/pub?gid=837181469&single=true&output=csv"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvData = await response.text();
        const parsedData = parseCSV(csvData);
        
        setData(parsedData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Parseador CSV
const parseCSV = (csvText: string): DescubriendoData[] => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(',');
    const entry = headers.reduce((obj, header, index) => {
      obj[header] = values[index]?.trim() || '';
      return obj;
    }, {} as Record<string, string>);

    return {
      id: entry.id || Math.random().toString(36).substring(2, 9),
      fecha: entry.fecha || "",
      hora: entry.hora || "",
      duracion: entry.duracion || "",
      plataforma: entry.plataforma || "",
      precio: entry.precio || "" 
    };
  });
};

export default useSheetDataDescubriendo;
