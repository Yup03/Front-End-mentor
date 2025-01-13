function ProductCard({ product, children, quantity }) {
  const { image, name, category, price } = product
  return (
    <li className="text-left font-semibold space-y-5">
      <div className="relative">
        <picture
          className={`rounded-2xl block overflow-hidden h-full border-2 ${
            quantity > 0 ? "border-red" : "border-transparent"
          }`}
        >
          <source srcSet={image?.desktop} media="(min-width: 768px)" />
          <img src={image?.mobile} alt="Dessert image" />
        </picture>
        {children}
      </div>
      <div className="p-4">
        <span className="text-rose-400 text-sm">{category}</span>
        <h3 className="">{name}</h3>
        <h6 className="text-red">${price}</h6>
      </div>
    </li>
  )
}
export default ProductCard
