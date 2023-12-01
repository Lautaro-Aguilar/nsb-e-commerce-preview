import IconButton from "@/components/ui/icon-button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Combobox } from "@/components/ui/combo-box";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { OrderBy } from "@/components/order-by";
import { Button } from "@/components/ui/button";

function Filters({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [price, setPrice] = useState<number[]>([0, 100]);

  return (
    <div
      className={`absolute -left-8 bottom-0 h-full w-screen rounded-3xl bg-white px-4 py-5 drop-shadow-lg ${
        isOpen ? "slide-up" : "slide-down"
      }`}
    >
      <header className="flex items-center gap-2.5">
        <IconButton icon={<X />} className="h-9 w-9" onClick={onClose} />
        <h3 className="text-xl font-semibold">Filtros</h3>
      </header>
      <Separator className="my-3" />
      <section>
        <div className="grid space-y-2">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Categoria producto:</Label>
            <Combobox width="w-[284px]" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Ciudad:</Label>
            <Combobox width="w-[284px]" />
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-2">
            <div className="col-span-2">
              <Label htmlFor="price" className=" h-min self-end">
                Rango de Precio:
              </Label>
            </div>
            <div className="col-span-2 row-span-2 flex gap-2">
              <div className="w-full">
                <Input
                  id="price"
                  type="number"
                  placeholder="Desde"
                  value={price[0]}
                />
              </div>
              <div className="w-full">
                <Input
                  id="price"
                  type="number"
                  placeholder="Hasta"
                  value={price[1]}
                />
              </div>
            </div>
          </div>

          <div className="!my-3 !mb-5">
            <Slider
              max={100}
              min={0}
              minStepsBetweenThumbs={1}
              step={1}
              value={price}
              onValueChange={(newPrice) => setPrice(newPrice)}
              // formatLabel={(value) => `$${value}`}
            />
          </div>
          <OrderBy />
          <Button className="uppercase">Filtrar</Button>
        </div>
      </section>
    </div>
  );
}
export default Filters;
