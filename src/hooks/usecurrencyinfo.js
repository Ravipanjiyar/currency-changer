import {useEffect, useState} from "react"

// async function fetchCurrencyData(currency) {
//     const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
//     const data = await response.json();
//     return data[currency];
// }

function useCurrencyInfo(currency){
    console.log(currency)
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        // async function fetchData(){
        //     const result = await fetchCurrencyData(currency);
        //     setData(result);
        // }

        // fetchData();


        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;


