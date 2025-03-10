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

export default function Header() {
  return (
    <header className="flex justify-around items-center h-20 border-b-2">
      <NavLink CustomLink="max-sm:hidden" />
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden bg" variant="outline">
            <Menu />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-36 bg">
          <SheetHeader>
            <SheetTitle className="text_primary">Crypto Track</SheetTitle>
          </SheetHeader>
          <NavLink />
        </SheetContent>
      </Sheet>
      <div className="flex justify-center items-center gap-4">
        <h1 className="text_primary text-xl font-bold">Crypto Track</h1>
        <Button variant="outline" className="cursor-pointer">
          <Moon />
          Dark Mode
        </Button>
      </div>
    </header>
  );
}
