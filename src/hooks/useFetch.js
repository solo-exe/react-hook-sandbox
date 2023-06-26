import { useState, useEffect } from 'react'

function useFetch(url, options) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options)
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        fetchData()
        //eslint-disablt-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading, data, error }
}
export default useFetch