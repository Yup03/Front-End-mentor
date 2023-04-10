const Link = ({ className, href, children, onGoTo, country, setBorders }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, "", href);
    onGoTo(country);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);

    setBorders(country.borders?.slice(0, 3));
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
