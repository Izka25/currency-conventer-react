import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() =>{
        const fetchRates = async () => {
            try {
                const response = await fetch ("https://api.currencyapi.com/v3/latest?base_currency=PLN&apikey=cur_live_ttkFF2ZNiqXGyBVlaoSkivWFXcoumupHo6VN9HHY");

                if(!response.ok) {
                    throw new Error (response.statusText);
                }
                const { data, meta } = await response.json();

                setRatesData ({
                    state: "success",
                    rates: data,
                    date: meta,
                });
            } catch {
                setRatesData ({
                    state: "error",
                });
            }
        };
        setTimeout (fetchRates, 1000);
    }, []);
    return ratesData;
};