import { Product, ProductCard } from "@/components/product-card"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const details = await fetch(`https://fakestoreapi.com/products/${id}`)

  const data: Product = await details.json()

  return <div className="pt-40 flex flex-col items-center justify-between gap-16 p-16">
    <ProductCard key={data.id} price={data.price} title={data.title} category={data.category} description={data.description} image={data.image} id={data.id} />
  </div>

}
