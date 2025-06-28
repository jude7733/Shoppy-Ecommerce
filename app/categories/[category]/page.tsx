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
    <h1 className="text-3xl font-bold mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
    {
      products.map((product) => (
        <ProductCard key={product.id} rating={product.rating} price={product.price} title={product.title} category={category} description={product.description} image={product.image} id={product.id} />
      ))}
  </div>

}
