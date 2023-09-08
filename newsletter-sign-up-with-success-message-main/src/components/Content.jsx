import Item from "./Item"

const Content = () => {
  return (
    <div className="text-charcoal-grey mb-10">
      <h2 className="heading">Stay updated!</h2>
      <p className="mb-5">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="space-y-3">
        <Item>Product discovery and building what matters</Item>
        <Item>Measuring to ensure updates are a success</Item>
        <Item>And much more!</Item>
      </ul>
    </div>
  )
}

export default Content
