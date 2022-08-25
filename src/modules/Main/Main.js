import styled from '@emotion/styled'
import {forwardRef, useRef, useState} from "react";
import {colors} from "../../globals/theme";
import columns from "../../core/tables/general";
import Header from "../../components/Header";
import Theader from "../../components/TableHeader";
import {Table} from "../../components/common/Table";
import TableBody from "../../components/TableBody";
import {SecondaryBtn} from "../../components/common/SecondaryBtn";
import TableFooter from "../../components/TableFooter";
import {Hearts} from "react-loader-spinner";
import Loader from "../../components/common/Loader";
import Label from "../../components/common/Label";

const Main = forwardRef(({columns, data, filteredData, getNextPeople, getPrevPeople, isLoading, isSuccess, handleFilterChange}, ref) => {
    return (
        <Layout>
            <TableContainer>
                <Header title="People" subtitle="A list of people, click on the planet link"/>
                <FilterContainer>
                    <Label>Filter by name: </Label>
                    <input disabled={isLoading} ref={ref} type="text" name="filter"
                           onChange={handleFilterChange}/>
                </FilterContainer>
                <Table size={Object.keys(columns).length}>
                    <Theader columns={columns}/>
                    {isLoading && <Loader><Hearts
                        height="40"
                        width="40"
                        radius="9"
                        color={colors.background}
                        ariaLabel='loading'
                        wrapperStyle
                        wrapperClass
                    /></Loader>}
                    {isSuccess && <TableBody data={filteredData} columns={columns}/>}
                    <TableFooter>
                        {isSuccess &&
                        <SecondaryBtn onClick={getPrevPeople} disabled={!data.previous}>Prev</SecondaryBtn>}
                        {isSuccess && <SecondaryBtn onClick={getNextPeople} disabled={!data.next}>Next</SecondaryBtn>}
                    </TableFooter>
                </Table>
            </TableContainer>
        </Layout>
    )
})

const FilterContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${colors.light};
  padding: 1rem 2rem;
  border-radius: 5px;
  gap: 1rem;
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
  justify-content: start;
  margin-top: 4rem;
  flex-direction: column;
`


export default Main