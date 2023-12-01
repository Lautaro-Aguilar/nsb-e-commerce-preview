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
      <div className="flex items-center justify-between py-5">
        <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
        <p className="text-lg font-semibold sm:text-xl">Bienvenid@, Karoline</p>
        <ShoppingBasket className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
    </nav>
  );
}
export default Navbar;
