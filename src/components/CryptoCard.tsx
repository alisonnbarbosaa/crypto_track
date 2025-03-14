import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function CryptoCard({ cryptos }) {
  if (cryptos.length < 1) {
    return (
      <div className="flex justify-center items-center mt-8">
        <h2 className="dark:text-[#E0E0E0] text-[#212529]">Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {cryptos.map((crypto) => (
        <Link key={crypto.id} href={`crypto/${crypto.id}`}>
          <Card className="flex-row items-center justify-between px-4 w-[420px] sm:w-[600px] md:w-[700px] duration-100 hover:bg-accent">
            <CardHeader className="flex-row items-center gap-2 w-2/5">
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={40}
                height={40}
              />
              <CardTitle className="text-[#212529] dark:text-[#E0E0E0]">{crypto.name}</CardTitle>
            </CardHeader>
            <CardContent className="w-3/5">
              <div className="text-right">
                <p className="text-[#212529] dark:text-[#E0E0E0]">&#36; {(crypto.current_price).toLocaleString('pt-br',{
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
