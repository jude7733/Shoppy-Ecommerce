import Image from "next/image";
import { Product } from "./product-card";
import { Button } from "./ui/button";
import { ShoppingCartIcon, StarIcon, UserRoundIcon } from "lucide-react";

export function ProductDetails({ id, title, price, description, category, image, rating }: Product) {
  return (
    <div className="p-22 flex flex-col items-center mx-auto" key={id}>
      <div className="flex items-center justify-end gap-4 w-full mb-4">
        <p className="inline"><StarIcon />{rating.rate}</p>
        <p className="inline"><UserRoundIcon />{rating.count}</p>
      </div>
      <Image src={image} width={400} height={300} alt={title} className="w-80 h-80 object-contain mb-8" />
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-base text-gray-700 mb-8 max-w-3xl">{description}</p>

      <div className="flex justify-around gap-10">
        <p className="font-bold text-2xl mb-4">${price}</p>
        <Button variant="default">Add to Cart <ShoppingCartIcon /></Button>
      </div>
    </div>
  );
}
