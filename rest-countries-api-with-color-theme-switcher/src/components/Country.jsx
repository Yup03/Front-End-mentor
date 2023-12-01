import Image from "next/image"
import Link from "next/link"
import CountryInfo from "./CountryInfo"

const Country = ({ countryObj }) => {
  return (
    <li className="group">
      <Link href={`/${countryObj.name.common}`}>
        <div className="card bg-neutral shadow-xl group-hover:-translate-y-[10px] max-w-[400px] duration-500 transition-transform h-full">
          <figure className="w-full basis-[210px] overflow-hidden relative">
            <Image
              src={countryObj.flags.svg}
              alt={countryObj.flags.alt}
              className="object-cover"
              fill={true}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-semibold">
              {countryObj.name.common}
            </h2>
            <CountryInfo
              label="Population"
              value={countryObj.population.toLocaleString("fr-FR")}
            />
            <CountryInfo label="Region" value={countryObj.region} />
            <CountryInfo label="Capital" value={countryObj.capital?.at(0)} />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Country
