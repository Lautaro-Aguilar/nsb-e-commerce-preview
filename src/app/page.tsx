"use client";
import Filters from "./filters";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  return (
    <main className="relative h-[calc(100vh-68px)]">
      {/* FILTROS */}
      <Button onClick={() => setOpen(!open)}>
        <Filter className="mr-2 h-4 w-4" />
        Filtros
      </Button>
      <Filters isOpen={open} onClose={onClose} />
    </main>
  );
}
