import { Menu } from "lucide-react";
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
    <header className="flex justify-between items-center h-20 px-4">
      <NavLink CustomLink="max-sm:hidden" />
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden" variant="outline">
            <Menu />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-36">
          <SheetHeader>
            <SheetTitle>Crypto Track</SheetTitle>
          </SheetHeader>
          <NavLink />
        </SheetContent>
      </Sheet>
      <h1>Crypto Track</h1>
    </header>
  );
}
