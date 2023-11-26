"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const BorderLink = ({ borderCountry }) => {
  if (!borderCountry) return

  return (
    <Link
      href={`/${borderCountry?.name.common}`}
      className="btn btn-primary shadow-md px-3 py-1 leading-[0px]"
    >
      {borderCountry?.name.common}
    </Link>
  )
}

export default BorderLink
