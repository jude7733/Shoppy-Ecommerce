import { Product, ProductCard } from "@/components/product-card"

export default async function ProductsPage() {
  const data = await fetch(`https://fakestoreapi.com/products`)

  const products: Product[] = await data.json()

  return <div className="pt-40 flex flex-col items-center justify-between gap-16 p-16">
    {
      products.map((product) => (
        <ProductCard key={product.id} price={product.price} title={product.title} category={product.category} description={product.description} image={product.image} id={product.id} rating={product.rating} />
      ))}
  </div>

}
