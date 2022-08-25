import styled from '@emotion/styled'
import {useRef, useState} from "react";
import {colors} from "../../globals/theme";
import {split} from 'ramda'
import {useGetPeopleByPageQuery} from "../../store/services/peopleApi";
import {useFilter} from "../../hooks/useFilter";
import {Main} from "../../modules";
import CloseSvg from '../../assets/icons/close.svg'
import COLUMNS from "../../core/tables/planet";
import Theader from "../../components/TableHeader";
import Loader from "../../components/common/Loader";
import {Hearts} from "react-loader-spinner";
import TableBody from "../../components/TableBody";
import TableFooter from "../../components/TableFooter";
import {SecondaryBtn} from "../../components/common/SecondaryBtn";
import {Table} from "../../components/common/Table";

const getPageNumber = (url) => url ? split('=')(url)[1] : null
const getPageFromData = (data) => [getPageNumber(data?.previous), getPageNumber(data?.next)]


const Default = () => {
    const [page, setPage] = useState(1)
    const {data, isLoading, isSuccess} = useGetPeopleByPageQuery(page)
    const {filteredData, filterData} = useFilter({data, isSuccess}, 'name')
    const filterRef = useRef('')

    const [isOpen, setIsOpen] = useState(true)

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
            <ModalWrapper isOpen={isOpen} onClick={()=>setIsOpen(false)}>
                <ModalClose src={CloseSvg}  onClick={()=>setIsOpen(false)}/>
                <Table size={Object.keys(COLUMNS).length}>
                    <Theader columns={COLUMNS}/>
                    {isLoading && <Loader><Hearts
                        height="40"
                        width="40"
                        radius="9"
                        color={colors.background}
                        ariaLabel='loading'
                        wrapperStyle
                        wrapperClass
                    /></Loader>}
                    {isSuccess && <TableBody data={filteredData} columns={COLUMNS}/>}
                </Table>
            </ModalWrapper>
            <Main
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

export const ModalWrapper = styled.div`
  display:flex;
  transform: scale(${(props)=> props.isOpen ? '1' : '0'});
  transition: transform 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  z-index: 1;
  justify-content: center;
  align-items: center;
`
export const ModalClose = styled.img`
    width: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width:2rem;
    height:2rem;
    padding: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
      &:hover {
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
      }
`

export default Default