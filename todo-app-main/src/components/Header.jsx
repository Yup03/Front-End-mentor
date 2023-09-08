import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className="flex justify-between pt-10 md:pt-16 pb-5 md:pb-10 items-center">
      <h1 className="font-bold text-3xl tracking-[10px] text-very-light-gray">
        TODO
      </h1>
      {mounted && (
        <button
          onClick={() => {
            if (currentTheme === "dark") {
              setTheme("light")
            } else {
              setTheme("dark")
            }
          }}
        >
          <img
            src={`src/assets/images/icon-${
              currentTheme === "dark" ? "sun" : "moon"
            }.svg`}
            alt="icon-sun"
          />
        </button>
      )}
    </div>
  )
}

export default Header
