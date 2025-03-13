"use client";

import CryptoCard from "@/components/CryptoCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import cryptosImg from "../../public/cryptos.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface CryptoData {
  id: string;
  name: string;
  current_price: number;
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
      <section className="h-min w-full flex items-center justify-center max-sm:flex-col max-sm:gap-8">
        <div className="sm:w-1/2 flex items-center justify-center">
          <Image
            src={cryptosImg}
            alt="crypto image"
            className="sm:h-1/2 w-4/5"
          />
        </div>
        <div className="sm:w-1/2 max-sm:flex flex-col items-center">
          <h1 className="text-4xl font-black mb-4 dark:text-[#E0E0E0] text-[#212529]">
            Crypto Track
          </h1>
          <p className="w-3/4 max-sm:text-center dark:text-[#B0B0B0] text-[#6C757D]">
            A sua plataforma completa para acompanhar o mercado de criptomoedas
            em tempo real. Aqui, você encontra cotações, gráficos interativos e
            informações detalhadas sobre os principais ativos digitais.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl font-bold my-8 dark:text-[#E0E0E0] text-[#212529]">
          List of cryptocurrencies
        </h2>
        <div className="h-12 mb-8 flex items-center justify-center">
          <label className="flex items-center gap-2">
            <Search className="sm:w-8 sm:h-8 w-6 h-6" />
            <Input
              type="name"
              placeholder="Look for a cryptocurrency..."
              className="sm:w-[400px] w-[300px]"
            />
          </label>
        </div>
        <CryptoCard cryptos={cryptos} />
      </section>
    </>
  );
}
