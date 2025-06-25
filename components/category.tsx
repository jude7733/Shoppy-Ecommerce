import { BentoCard, BentoGrid } from "./magicui/bento-grid"
import { BackgroundGradient } from "./ui/background-gradient"

export default async function Category() {
  const data = await fetch('https://fakestoreapi.com/products/categories')
  const category = await data.json()

  return (
    <div id="categories" className="flex flex-col w-full px-6 md:px-60 my-20 bg-secondary py-20 mx-auto">
      <h2 className="text-4xl mb-10">Categories</h2>
      <div key={category} className="mb-8 w-full grid grid-cols-2 grid-rows-2 gap-18">
        {
          category.map((category: string) => (
            <BackgroundGradient key={category} className="">
              <BentoGrid>
                <BentoCard
                  name={category.charAt(0).toUpperCase() + category.slice(1)}
                  background={
                    <img
                      src={`/${category}.jpg`}
                      alt={category}
                      className="h-full w-full object-contain"
                    />
                  }
                  description={`Discover our ${category} collection.`}
                  href={`categories/${category}`}
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
