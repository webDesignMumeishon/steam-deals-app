import {useEffect, useState} from 'react'

export const FetchData = () => {

    const [deals, setDeals] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
        .then(data => data.json())
        .then(memesAPI => setDeals(() => ({
            loading: false,
            data: memesAPI
        })))
        .catch(error => setDeals({status: "error", error: error}))
    },[])

    return deals
}