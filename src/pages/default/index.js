import {useRef, useState} from "react";
import {split} from 'ramda'
import {useGetPeopleByPageQuery} from "../../store/services/peopleApi";
import {useFilter} from "../../hooks/useFilter";
import {Main, ModalContainer} from "../../modules";
import Modal from "../../components/Modal";
import COLUMNS from "../../core/tables/general";

const getPageNumber = (url) => url ? split('=')(url)[1] : null
const getPageFromData = (data) => [getPageNumber(data?.previous), getPageNumber(data?.next)]


const Default = () => {
    const [page, setPage] = useState(1)
    const {data, isLoading, isSuccess} = useGetPeopleByPageQuery(page)
    const {filteredData, filterData} = useFilter({data, isSuccess}, 'name')
    const filterRef = useRef('')
    const [planet, setPlanet] = useState(1)
    const [isOpen, setIsOpen] = useState(false)

    const handleFilterChange = (e) => filterData(e?.target?.value ?? '')
    const clearFilter = () => {
        handleFilterChange()
        if (filterRef.current) filterRef.current.value = ''
    }

    const getNextPeople = () => {
        clearFilter()
        setPage(getPageFromData(data)[1])
    }
    const getPrevPeople = () => {
        clearFilter()
        setPage(getPageFromData(data)[0])
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