import Search from "@/components/Search"
import CountryList from "@/components/CountryList"
import NotFound from "@/components/NotFound"

async function page({ searchParams }) {
  const countrySearch = searchParams?.country || ""
  const regionSearch = searchParams?.region || ""
  const res = await fetch(
    `${
      regionSearch
        ? `https://restcountries.com/v3.1/region/${regionSearch}?fields=name,flags,region,capital,population`
        : // : country || (region && country)
          // ? `https://restcountries.com/v3.1/name/${country}?fields=name,flags,region,capital,population`
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
    }`
  )

  // if (!res.ok) {
  //   return (
  //     <>
  //       <Search />
  //       <p>Not Found</p>
  //     </>
  //   )

  //   // throw new Error("Error fetching data")
  // }

  const data = await res.json()

  const countriesArr = countrySearch
    ? data.filter(
        country =>
          country.name.common
            .toLowerCase()
            .includes(countrySearch.toLowerCase()) ||
          country.capital
            .at(0)
            ?.toLowerCase()
            .includes(countrySearch.toLowerCase())
      )
    : data

  return (
    <div>
      <Search />
      {countriesArr.length > 0 ? (
        <CountryList countriesArr={countriesArr} />
      ) : (
        <NotFound regionSearch={regionSearch} countrySearch={countrySearch} />
      )}
    </div>
  )
}

export default page
