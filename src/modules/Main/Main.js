import styled from '@emotion/styled'
import {useRef, useState} from "react";
import {colors} from "../../globals/theme";
import COLUMNS from "../../core/tables/general";
import Header from "../../components/Header";
import Theader from "../../components/TableHeader";
import {Table} from "../../components/common/Table";
import TableBody from "../../components/TableBody";
import {SecondaryBtn} from "../../components/common/SecondaryBtn";
import TableFooter from "../../components/TableFooter";
import { split} from 'ramda'
import {useGetPeopleByPageQuery} from "../../store/services/peopleApi";
import {useFilter} from "../../hooks/useFilter";
import {Hearts} from "react-loader-spinner";

const getPageNumber = (url) => url ? split('=')(url)[1] : null
const getPageFromData = (data) => [getPageNumber(data?.previous), getPageNumber(data?.next)]


const Main = () => {
    const [page, setPage] = useState(1)
    const {data, isLoading, isSuccess} = useGetPeopleByPageQuery(page)
    const {filteredData, filterData} = useFilter({data, isSuccess}, 'name')
    const filterRef = useRef('')

    const handleFilterChange = (e) => filterData(e?.target?.value ?? '')
    const clearFilter = () => {
        handleFilterChange()
        filterRef.current.value = ''
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
        <Layout>
            <TableContainer>
                <Header title="People" subtitle="A list of people, click on the planet link"/>
                <FilterContainer>
                    <input disabled={isLoading} ref={filterRef} type="text" name="filter" onChange={handleFilterChange}/>
                </FilterContainer>
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
                    <TableFooter>
                        {isSuccess &&
                        <SecondaryBtn onClick={getPrevPeople} disabled={!data.previous}>Prev</SecondaryBtn>}
                        {isSuccess && <SecondaryBtn onClick={getNextPeople} disabled={!data.next}>Next</SecondaryBtn>}
                    </TableFooter>
                </Table>
            </TableContainer>
        </Layout>
    )
}

const Loader = styled.div`
  grid-column: 1/-1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`
const Layout = styled.div`
  background-color: ${colors.background};
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows:1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`

const TableContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FilterContainer = styled.div``


export default Main