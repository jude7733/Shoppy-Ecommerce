import { Product, ProductCard } from "@/components/product-card"

export default async function CategoryProducts({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)

  const products: Product[] = await data.json()

  return <div className="pt-40 flex flex-col items-center justify-between gap-16 p-16">
    {
      products.map((product: any) => (
        <ProductCard key={product.id} price={product.price} title={product.title} category={category} description={product.description} image={product.image} id={product.id} />
      ))}
  </div>

}
