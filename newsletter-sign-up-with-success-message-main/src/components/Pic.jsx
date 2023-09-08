const Pic = () => {
  return (
    <picture className="md:order-2">
      <source
        srcSet="illustration-sign-up-desktop.svg"
        media="(min-width: 768px)"
        sizes="(min-width: 768px) 768px"
      />
      <img
        src="illustration-sign-up-mobile.svg"
        alt="illustration-sign-up"
        className="w-full"
      />
    </picture>
  )
}

export default Pic
