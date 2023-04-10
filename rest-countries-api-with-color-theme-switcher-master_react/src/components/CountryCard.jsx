import Link from "./Link";
const CountryCard = ({ country, goTo, onGoTo, setBorders }) => {
  return (
    <Link
      className="country-card"
      href={`/${country.name?.common}`}
      goTo={goTo}
      onGoTo={onGoTo}
      country={country}
      setBorders={setBorders}
    >
      <div className="card__img-box">
        <img
          src={country.flags?.svg}
          alt={country.flags?.alt}
          className="card__img"
        />
      </div>
      <div className="card__content">
        <h6 className="country-name">{country.name?.common}</h6>
        <div className="box">
          <span className="label">Population: </span>
          <span className="value">
            {country?.population.toLocaleString("en-US")}
          </span>
        </div>
        <div className="box">
          <span className="label">Region: </span>
          <span className="value">{country.region}</span>
        </div>
        <div className="box">
          <span className="label">Capital: </span>
          <span className="value">{country.capital}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
