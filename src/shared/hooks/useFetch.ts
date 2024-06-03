import { useCallback, useEffect, useState } from 'react'
import { ErrorResponse } from 'react-router-dom'

const useFetch = <T>(fetcher: () => Promise<T>, defaultFetch = true) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ErrorResponse | null>(null)

  const fetchData = useCallback(async () => {
    setError(null)
    setIsLoading(true)

    try {
      const data = await fetcher()
      setData(data)
    } catch (error) {
      console.log(error)
      setError(error as ErrorResponse)
    } finally {
      setIsLoading(false)
    }
  }, [fetcher])

  useEffect(() => {
    if (!defaultFetch) return

    fetchData().then(r => r)
  }, [defaultFetch])

  return { data, isLoading, error, fetchData }
}

export default useFetch
