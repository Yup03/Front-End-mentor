import CountryCard from "./CountryCard";

const CountryList = ({ countries, goTo, onGoTo, setBorders }) => {
  const renderedList = countries.map((country, i) => {
    return (
      <CountryCard key={i} country={country} goTo={goTo} onGoTo={onGoTo} setBorders={setBorders}/>
    );
  });
  return <div className="countries container">{renderedList}</div>;
};

export default CountryList;
