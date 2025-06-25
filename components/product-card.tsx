import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { ShoppingCartIcon, StarIcon, UserRoundIcon } from "lucide-react";

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: { rate: number; count: number }
}

export function ProductCard({ id, title, price, rating, category, image }: Product) {
  return (
    <div className="shadow-sm w-full hover:shadow-2xl shadow-primary rounded-2xl p-8 flex gap-10 max-w-5xl" key={id}>
      <Image src={image} width={300} height={200} alt={title} className="w-60 h-60" />
      <div>
        <h2 className="max-w-xl" style={{ fontSize: 20, margin: '12px 0 4px 0' }}>{title}</h2>
        <p style={{ color: '#888', margin: '16px 0' }}>{category}</p>
      </div>
      <div className="flex flex-col items-center justify-end w-full">
        <div className="flex items-center justify-end gap-4 w-full mb-4">
          <p className="inline"><StarIcon />{rating.rate}</p>
          <p className="inline"><UserRoundIcon />{rating.count}</p>
        </div>
        <p style={{ fontWeight: 'bold', fontSize: 18, margin: '4px 0' }}>${price}</p>
        <Link href={`/products/${id}`} className="flex items-center justify-center">
          <Button variant="destructive" className="p-4" >Know more<ShoppingCartIcon width={20} height={20} /></Button>
        </Link>
      </div>
    </div>
  );
}
