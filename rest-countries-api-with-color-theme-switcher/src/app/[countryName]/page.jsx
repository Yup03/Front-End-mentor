import CountryInfo from "@/components/CountryInfo"
import Image from "next/image"
import Link from "next/link"
import BorderLink from "@/components/BorderLink"

const getCountry = async name => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,subregion,capital,tld,currencies,borders,languages`
  )

  return await res.json()
}
const getBorderCountry = async countryCode => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name`
  )

  return await res.json()
}

const CountryPage = async ({ params }) => {
  const name = params.countryName

  const [country] = await getCountry(name)

  return (
    <div className="container mx-auto">
      <Link
        href="/"
        className="btn btn-neutral shadow-xl my-10 lg:my-20 px-10 inline-flex items-center font-semibold"
      >
        <span className="text-primary-content text-lg">&larr;</span>

        <span className="text-neutral-content">Back</span>
      </Link>

      <div className="card lg:card-side bg-neutral shadow-xl lg:gap-20">
        <figure className="relative lg:basis-[40%] min-h-[250px]">
          <Image
            src={country.flags?.svg}
            alt={country.flags?.alt}
            fill
            className="object-cover"
          />
        </figure>
        <div className="card-body pr-0 md:pr-20 basis-[60%]">
          <h2 className="card-title font-extrabold text-3xl mb-5">
            {country.name.common}
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-20">
            <div className="space-y-3">
              <CountryInfo
                label="Native Name"
                value={
                  country.name.nativeName[Object.keys(country.languages)[0]]
                    .common
                }
              />
              <CountryInfo
                label="Population"
                value={country.population.toLocaleString("fr-FR")}
              />
              <CountryInfo label="Region" value={country.region} />
              <CountryInfo label="Sub Region" value={country.subregion} />
              <CountryInfo label="Capital" value={country.capital} />
            </div>

            <div className="space-y-3">
              <CountryInfo
                label="Population"
                value={country.population.toLocaleString("fr-FR")}
              />
              <CountryInfo label="Region" value={country.region} />
              <CountryInfo label="Sub Region" value={country.subregion} />
            </div>
          </div>

          <div className="space-x-1 flex items-start md:items-center">
            <span className="font-semibold text-primary-content">
              Border Countries:
            </span>
            <div className="text-neutral-content flex gap-2 flex-wrap">
              {country.borders.map(async (border, idx) => {
                const borderCountry = await getBorderCountry(border)

                return <BorderLink key={idx} borderCountry={borderCountry} />
              })}

              <BorderLink borders={country.borders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
