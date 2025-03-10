import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

export default function CryptoCard({ cryptos }) {
  if (cryptos.length < 1) {
    return (
      <section className="flex justify-center items-center mt-8">
        <h2>Carregando...</h2>
      </section>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center gap-4">
      {cryptos.map((crypto) => (
        <Card
          key={crypto.id}
          className="flex-row items-center justify-center w-[800px] px-4"
        >
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
              <thead className="text-left">
                <tr className="text_secondary">
                  <th className="font-medium">Preço atual:</th>
                  <th className="font-medium">Maior Preço 24h:</th>
                  <th className="font-medium">Menor Preço 24h:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <data value={crypto.current_price}>
                      ${crypto.current_price.toFixed(2)}
                    </data>
                  </td>
                  <td>
                    <data value={crypto.high_24h}>
                      ${crypto.high_24h.toFixed(2)}
                    </data>
                  </td>
                  <td>
                    <data value={crypto.low_24h}>
                      ${crypto.low_24h.toFixed(2)}
                    </data>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button variant="outline">
              <Eye />
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
