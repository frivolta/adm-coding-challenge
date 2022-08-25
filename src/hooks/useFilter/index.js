import {useCallback, useEffect, useState} from "react";

export const useFilter = ({data, isSuccess}, filterColumn) => {
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        if (isSuccess) {
            setFilteredData(data.results)
        }
    }, [data?.results])

    const filterData = useCallback((filterString) => {
        if (!data?.results) return
        setFilteredData(data.results.filter(
            (result) => result[filterColumn].toLowerCase()
                .includes(filterString.toLowerCase()))
        )
    }, [data?.results])


    return {filteredData, filterData}
}