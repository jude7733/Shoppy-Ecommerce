import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export function ProductCard({ id, title, price, description, category, image }: Product) {
  return (
    <div className="shadow-lg shadow-primary rounded-2xl p-8 flex gap-10 max-w-5xl" key={id}>
      <Image src={image} width={300} height={200} alt={title} className="w-60 h-60" />
      <div>
        <h2 style={{ fontSize: 20, margin: '12px 0 4px 0' }}>{title}</h2>
        <p style={{ color: '#888', margin: '4px 0' }}>{category}</p>
        <p style={{ fontWeight: 'bold', fontSize: 18, margin: '4px 0' }}>${price}</p>
        <p style={{ fontSize: 14, color: '#555', margin: '8px 0' }}>{description}</p>
      </div>
      <div>
        <Link href={`/products/${id}`} className="flex items-center justify-center">
          <Button variant="outline">Know more</Button>
        </Link>
      </div>
    </div>
  );
}
