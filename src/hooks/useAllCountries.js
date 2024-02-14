import { useState, useEffect } from 'react'
import { Countries } from '../api/external/Countries'

export const useAllCountries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    Countries.getAllCountries().then(countries => {
      setCountries(countries?.data)
    })
    setIsLoading(false)
  }, [])
  return { countries, isLoading }
}
