"use client";

import CryptoCard from "@/components/CryptoCard";
import { useEffect, useState } from "react";

interface CryptoData {
  id: string;
  name: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  image: string;
}

export default function Home() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);

  useEffect(() => {
    async function fetchCryptos() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const data: CryptoData[] = await response.json();
        setCryptos(data);
      } catch (error) {
        console.error("Erro ao buscar criptomoedas:", error);
      }
    }
    fetchCryptos();
  }, []);

  return (
    <>
      <CryptoCard cryptos={cryptos} />
    </>
  );
}
