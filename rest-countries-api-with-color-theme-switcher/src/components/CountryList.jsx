import Country from "./Country"
// import countries from "/data.json"

const CountryList = ({ countriesArr }) => {
  //   console.log(countries)

  return (
    <ul className="container mx-auto grid grid-cols-cards gap-y-10 gap-x-5">
      {countriesArr.map((countryObj, idx) => (
        <Country key={idx} countryObj={countryObj} />
      ))}
    </ul>
  )
}

export default CountryList
