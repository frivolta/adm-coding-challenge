import {useRef, useState} from "react";
import {split} from 'ramda'
import {useGetPeopleByPageQuery} from "../../store/services/peopleApi";
import {useFilter} from "../../hooks/useFilter";
import {Main, ModalContainer} from "../../modules";
import COLUMNS from "../../core/tables/general";
import {useModal} from "../../hooks/useModal";
import {useSearchParams} from "react-router-dom";

const getPageNumber = (url) => url ? split('=')(url)[1] : null
const getPageFromData = (data) => [getPageNumber(data?.previous), getPageNumber(data?.next)]


const Default = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {data, isLoading, isSuccess} = useGetPeopleByPageQuery(searchParams.get('page')||1)
    const {filteredData, filterData} = useFilter({data, isSuccess}, 'name')
    const { planet, setPlanet, isOpen, setIsOpen }=useModal()

    const filterRef = useRef('')

    const handleFilterChange = (e) => filterData(e?.target?.value ?? '')
    const clearFilter = () => {
        handleFilterChange()
        if (filterRef.current) filterRef.current.value = ''
    }

    const getNextPeople = () => {
        clearFilter()
        setSearchParams({page: getPageFromData(data)[1]}, {replace: true})
    }
    const getPrevPeople = () => {
        clearFilter()
        setSearchParams({page: getPageFromData(data)[0]}, {replace: true})
    }

    return (
        <>
            <ModalContainer isOpen={isOpen} handleClose={()=>setIsOpen(false)} planet={planet}/>
            <Main
                columns={COLUMNS((planet)=>{
                    setIsOpen(true)
                    setPlanet(planet)
                })}
                data={data}
                isLoading={isLoading}
                isSuccess={isSuccess}
                filteredData={filteredData}
                getNextPeople={getNextPeople}
                getPrevPeople={getPrevPeople}
                ref={filterRef}
                handleFilterChange={handleFilterChange}
            />
        </>
    )
}


export default Default