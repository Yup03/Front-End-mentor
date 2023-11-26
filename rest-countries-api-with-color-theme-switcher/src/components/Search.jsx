"use client"

import React, { useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

const Search = () => {
  const [region, setRegion] = useState("default")

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearch = term => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("country", term)
    } else {
      params.delete("country")
    }

    replace(`${pathName}?${params.toString()}`)
  }

  const handleSelect = region => {
    const params = new URLSearchParams(searchParams)

    if (region) {
      params.set("region", region)
    } else {
      params.delete("region")
    }

    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="container mx-auto py-10 flex flex-col sm:flex-row gap-10 justify-between">
        <input
          type="text"
          placeholder="Search for a country"
          className="input bg-neutral placeholder:text-neutral-content w-full max-w-xs shadow-md"
          onChange={e => handleSearch(e.target.value)}
          defaultValue={searchParams.get("country")?.toString()}
        />
        <select
          className="select w-full max-w-[10rem] text-primary-content bg-neutral shadow-md"
          defaultValue=""
          onChange={e => handleSelect(e.target.value)}
        >
          <option value="">All countries</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  )
}

export default Search
