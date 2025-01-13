import ProductCard from "./ProductCard"
import AddToCartBtn from "./AddToCartBtn"
import { useProduct } from "../contexts/ProductContext"

const ProductsList = () => {
  const { productsData, chosenProducts } = useProduct()

  return (
    <main className="space-y-5 lg:basis-[80%] w-full">
      <h1 className="text-3xl font-bold text-rose-900">Desserts</h1>
      <ul className="gap-2 md:gap-8 grid grid-cols-auto">
        {productsData.map((product, idx) => {
          const quantity = chosenProducts.find(
            prod => prod.name === product.name
          )?.quantity

          // const isAlreadyAdded = quantity > 0
          return (
            <ProductCard product={product} key={idx} quantity={quantity}>
              <AddToCartBtn idx={idx} product={product} quantity={quantity} />
            </ProductCard>
          )
        })}
      </ul>
    </main>
  )
}
export default ProductsList
