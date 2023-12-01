"use client";

import { Menu, ShoppingBasket } from "lucide-react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/signup") return null;
  return (
    <nav>
      {/* menu icon */}
      {/* logo */}
      {/* menu */}
      <div className="flex items-center justify-between px-4 py-5">
        <Menu className="h-8 w-8" />
        <p className="text-xl font-semibold">Bienvenid@, Karoline</p>
        <ShoppingBasket className="h-8 w-8" />
      </div>
    </nav>
  );
}
export default Navbar;
