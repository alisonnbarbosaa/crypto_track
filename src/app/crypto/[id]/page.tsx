"use client";

import ChartCrypto from "@/components/ChartCrypto";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

interface CryptoDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

type CryptoData = {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  market_cap_rank: number;
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    high_24h: { usd: number };
    low_24h: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
    circulating_supply: number;
  };
};

export default function CryptoDetails({ params }: CryptoDetailsProps) {
  const { id } = use(params);

  const [crypto, setCrypto] = useState<CryptoData | null>(null);

  useEffect(() => {
    async function fetchCrypto() {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCrypto();
  }, [id]);

  if (!crypto) {
    return (
      <section className="flex justify-center items-center mt-8">
        <h2>Carregando...</h2>
      </section>
    );
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-144px)]">
      <section className="w-1/2 h-full">
        <Link href="/">
          <Button>
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <ChartCrypto />
      </section>
      <section className="w-1/2 h-full flex items-center justify-center">
        <Card className="p-4 w-3/4">
          <CardHeader className="gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={crypto.image.large}
                alt={crypto.name}
                width={40}
                height={40}
              />
              <CardTitle>{crypto.name}</CardTitle>
            </div>
            <CardDescription>
              {crypto.description.en.substring(0, 200)}...
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <ul>
              <li>
                <span>Ticket: </span>
                {crypto.symbol}
              </li>
              <li>
                <span>Preço Atual:</span> $
                {crypto.market_data.current_price.usd}
              </li>
              <li>
                <span>Máx. 24h:</span> ${crypto.market_data.high_24h.usd}
              </li>
              <li>
                <span>Mín. 24h:</span> ${crypto.market_data.low_24h.usd}
              </li>
            </ul>
            <ul>
              <li>
                <span>Variação 24h: </span>
                {crypto.market_data.price_change_percentage_24h}%
              </li>
              <li>
                <span>Market Cap: </span>
                {crypto.market_data.market_cap.usd}
              </li>
              <li>
                <span>Volume 24h: </span>${crypto.market_data.total_volume.usd}
              </li>
              <li>
                <span>Rank: </span>
                {crypto.market_cap_rank}
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
