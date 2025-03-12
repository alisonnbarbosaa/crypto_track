import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

export default function CryptoCard({ cryptos }) {
  if (cryptos.length < 1) {
    return (
      <div className="flex justify-center items-center mt-8">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {cryptos.map((crypto) => (
        <Link key={crypto.id} href={`crypto/${crypto.id}`}>
          <Card className="flex-row items-center justify-center px-4 w-[420px] sm:w-[600px] md:w-[700px] bg_hover duration-100">
            <CardHeader className="flex flex-row items-center gap-2">
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={40}
                height={40}
              />
              <CardTitle>{crypto.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between w-full pl-4">
              <table className="w-full">
                <thead className="text-left max-sm:text-right">
                  <tr className="text_secondary">
                    <th className="font-medium">Preço atual:</th>
                    <th className="font-medium max-sm:hidden">
                      Maior Preço 24h:
                    </th>
                    <th className="font-medium max-sm:hidden">
                      Menor Preço 24h:
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="max-sm:text-right">
                      <data value={crypto.current_price}>
                        ${crypto.current_price.toFixed(2)}
                      </data>
                    </td>
                    <td className="max-sm:hidden">
                      <data value={crypto.high_24h}>
                        ${crypto.high_24h.toFixed(2)}
                      </data>
                    </td>
                    <td className="max-sm:hidden">
                      <data value={crypto.low_24h}>
                        ${crypto.low_24h.toFixed(2)}
                      </data>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
