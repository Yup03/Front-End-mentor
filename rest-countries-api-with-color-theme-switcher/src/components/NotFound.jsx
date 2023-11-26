const NotFound = ({ countrySearch, regionSearch }) => {
  return (
    <div className="container mx-auto font-semibold text-center text-3xl">
      <h2>
        {`"${countrySearch}"`} can not be found
        {regionSearch && ` in "${regionSearch}"`}
      </h2>
    </div>
  )
}

export default NotFound
