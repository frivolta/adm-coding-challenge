import styled from '@emotion/styled'
import {useEffect, useState} from "react";
import {colors} from "../../globals/theme";
import COLUMNS from "../../core/tables/general";
import Header from "../../components/Header";
import Theader from "../../components/TableHeader";
import {Table} from "../../components/common/Table";
import TableBody from "../../components/TableBody";
import {SecondaryBtn} from "../../components/common/SecondaryBtn";
import TableFooter from "../../components/TableFooter";

const Main = () => {
    const [people, setPeople] = useState([])
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)

    const getPeople = (page) => fetch(page || 'https://swapi.dev/api/people?page=1')
        .then(res => res.json()).then(people => {
            setNextPage(people.next)
            setPrevPage(people.previous)
            setPeople([...people.results])
        })

    useEffect(() => {
        void getPeople()
    }, [])

    const getNextPeople = ()=>getPeople(nextPage)
    const getPrevPeople = ()=>getPeople(prevPage)

    return (
        <Layout>
            <TableContainer>
                <Header title="People" subtitle="A list of people, click on the planet link"/>
                <Table size={Object.keys(COLUMNS).length}>
                    <Theader data={people} column={COLUMNS}/>
                    <TableBody data={people} columns={COLUMNS}/>
                </Table>
                <TableFooter>
                    <SecondaryBtn onClick={getPrevPeople} disabled={!prevPage}>Prev</SecondaryBtn>
                    <SecondaryBtn onClick={getNextPeople} disabled={!nextPage}>Next</SecondaryBtn>
                </TableFooter>
            </TableContainer>
        </Layout>
    )
}


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


export default Main