"use client";

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
import useDarkMode from "@/hooks/useDarkMode";

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <header className="flex justify-around items-center h-20 border-b-2">
      <div className="flex items-center gap-2 max-sm:hidden">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <NavLink CustomLink="max-sm:hidden" />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden cursor-pointer" variant="outline">
            <Menu />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-36">
          <SheetHeader className="flex-row items-center gap-2">
            <Image src={Logo} alt="logo" className="w-8 h-8" />
            <SheetTitle className="dark:text-[#E0E0E0] text-[#212529]">
              Crypto Track
            </SheetTitle>
          </SheetHeader>
          <NavLink />
        </SheetContent>
      </Sheet>
      <Button
        variant="outline"
        className="cursor-pointer"
        onClick={toggleTheme}
      >
        {theme == "dark" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
}
