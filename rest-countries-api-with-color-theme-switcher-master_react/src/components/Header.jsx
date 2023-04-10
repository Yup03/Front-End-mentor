const Header = ({ darkMode, onDarkSwitch }) => {
  return (
    <header className="header">
      <nav className="nav container">
        <h1 className="heading-primary">Where in the world?</h1>
        <button
          className="btn btn-theme"
          onClick={() => {
            onDarkSwitch(!darkMode);
          }}
        >
          <i
            className={`fa-regular fa-${
              darkMode ? "moon" : "sun"
            } btn-theme__icon`}
          ></i>
          <span className="btn-theme__text">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
