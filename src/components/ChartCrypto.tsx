"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ChartData {
  time: string;
  price: number;
}

export default function ChartCrypto({ cryptoId }: { cryptoId: string }) {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("7");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${timeframe}&interval=daily`
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const result = await response.json();

        const formattedData = result.prices.map((item: [number, number]) => ({
          time: new Date(item[0]).toLocaleDateString(),
          price: item[1],
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cryptoId, timeframe]);

  return (
    <Card className="w-full max-w-2xl mx-auto p-4">
      <CardHeader>
        <CardTitle>Preço de {cryptoId.toUpperCase()}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Select para escolher o período */}
        <div className="mb-4">
          <Select
            onValueChange={(value) => setTimeframe(value)}
            defaultValue="7"
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Diário</SelectItem>
              <SelectItem value="7">Semanal</SelectItem>
              <SelectItem value="30">Mensal</SelectItem>
              <SelectItem value="365">Anual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis domain={["auto", "auto"]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
