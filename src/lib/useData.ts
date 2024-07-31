import { AxiosError, CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import { getInnerError } from 'lib/utils/errorUtils';

function useData(getData: Function, params?) {
    const [query, setQuery] = useState<{ [key: string]: string }>({
        query: "react hooks"
    });
    const [data, setData] = useState<any[]>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<string>("");
    const [token, setToken] = useState<CancelTokenSource>(undefined);

    useEffect(() => {
        if (token) {
            token.cancel("REQUEST_CANCELLED");
        }

        async function fetchData() {
            setError("");
            setLoading(true);
            //setData([]);

            try {
                const users = await getData(params);
                setData(users);
            } catch (e) {
                console.log(`Request exception:`, e);
                setError(getInnerError(e));
            }

            // const response = await axios.get(url, {
            //     cancelToken: token.token,
            //     params: query
            // });
            setToken(undefined);
            setLoading(false);
        }

        fetchData().catch((error: AxiosError) => {
            if (error.message !== "REQUEST_CANCELLED") {
                const msg: string = error.message;
                setError(msg);
            }
            setToken(undefined);
        });
    }, []);

    return [data, loading, error] as const;
}
export default useData;