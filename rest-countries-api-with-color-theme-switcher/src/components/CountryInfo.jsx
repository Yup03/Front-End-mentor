import React from "react"

const CountryInfo = ({ label, value }) => {
  return (
    <div className="space-x-1">
      <span className="font-semibold text-primary-content">{label}:</span>
      <span className="text-neutral-content">{value}</span>
    </div>
  )
}

export default CountryInfo
