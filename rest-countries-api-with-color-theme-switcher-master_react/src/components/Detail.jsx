import Link from "./Link";

const Detail = ({ country, onGoTo, borders }) => {
  const renderedBorders = borders.map((border, idx) => (
    <span key={border?.area} className="border">
      {border?.name.common}
    </span>
  ));
  return (
    <>
      <main>
        <div className="container">
          <Link href="/" className="back" onGoTo={onGoTo} country={country}>
            <span className="back-icon">&larr;</span>
            <span className="back-text">Back</span>
          </Link>
          <div className="detail-box">
            <div className="detail__img-box">
              <img src={country?.flags.svg} alt="#" className="detail__img" />
            </div>
            <div className="detail__content">
              <h6 className="country-name">{country?.name.common}</h6>
              <div className="left">
                <div className="box">
                  <span className="label">Population: </span>
                  <span className="value">
                    {country?.population.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="box">
                  <span className="label">Region: </span>
                  <span className="value">{country?.region}</span>
                </div>
                <div className="box">
                  <span className="label">Sub Region: </span>
                  <span className="value">{country?.subregion}</span>
                </div>
                <div className="box">
                  <span className="label">Capital: </span>
                  <span className="value">{country?.capital}</span>
                </div>
              </div>
              <div className="right">
                <div className="box">
                  <span className="label">Top Level Domain: </span>
                  <span className="value">{country?.tld}</span>
                </div>
                <div className="box">
                  <span className="label">Currencies: </span>
                  <span className="value">
                    {Object.values(country?.currencies)[0].name}
                  </span>
                </div>
                <div className="box">
                  <span className="label">Languages: </span>
                  <span className="value">
                    {Object.values(country?.languages).slice(0, 3).join()}
                  </span>
                </div>
              </div>
              <div className="detail__border-box">
                <h3 className="border__title">Border Countries:</h3>
                {renderedBorders}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Detail;
