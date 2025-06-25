import { BentoCard, BentoGrid } from "./magicui/bento-grid"
import { BackgroundGradient } from "./ui/background-gradient"

export default async function Category() {
  const data = await fetch('https://fakestoreapi.com/products/categories')
  const category = await data.json()

  return (
    <div className="flex flex-col w-full px-6 mx-auto">
      <h2 className="text-4xl">Categories</h2>
      <div key={category} className="mb-8 w-full grid grid-cols-2 grid-rows-2">
        {
          category.map((category: string) => (
            <BackgroundGradient key={category} className="mb-8">
              <BentoGrid>
                <BentoCard
                  name={category.charAt(0).toUpperCase() + category.slice(1)}
                  background={
                    <img
                      src={`https://ik.imagekit.io/lrigu76hy/tailark/${category}.jpg?updatedAt=1745733473768`}
                      alt={category}
                      className="h-full w-full object-cover"
                    />
                  }
                  description={`Discover our ${category} collection.`}
                  href={`/${category}`}
                  cta={`Shop ${category}`}
                />
              </BentoGrid>
            </BackgroundGradient>
          ))
        }
      </div>
    </div>
  )
}
