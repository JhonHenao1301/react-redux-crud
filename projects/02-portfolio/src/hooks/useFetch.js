import { useEffect, useState } from "react";

const API_ENDPOINT = `https://api.github.com/users/JhonHenao1301/repos`;

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchData = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(resJson => {
                if (resJson) {
                    setData(resJson)
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }

    useEffect(() => {
        fetchData(`${API_ENDPOINT}`);
    }, [])

    return {isLoading, error, data}
}