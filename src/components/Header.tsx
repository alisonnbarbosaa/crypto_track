import { Menu, Moon, Sun } from "lucide-react";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="flex justify-around items-center h-20 border-b-2">
      <div className="flex items-center gap-2 max-sm:hidden">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <NavLink CustomLink="max-sm:hidden" />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden bg cursor-pointer" variant="outline">
            <Menu />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-36 bg">
          <SheetHeader className="flex-row items-center gap-2">
            <Image src={Logo} alt="logo" className="w-8 h-8" />
            <SheetTitle className="text_primary">Crypto Track</SheetTitle>
          </SheetHeader>
          <NavLink />
        </SheetContent>
      </Sheet>
      <Button variant="outline" className="cursor-pointer bg">
        <Moon />
        Dark Mode
      </Button>
    </header>
  );
}
