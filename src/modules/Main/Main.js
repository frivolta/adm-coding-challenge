import styled from '@emotion/styled'
import {useEffect, useState} from "react";
import {colors} from "../../globals/theme";
import {css} from "@emotion/react";

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


    return (
        <Layout>
            <TableContainer>
                <Title>People</Title>
                <Subtitle>A list of people, click on the link to open planet</Subtitle>
                <Table size={6}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Height</Th>
                            <Th>Mass</Th>
                            <Th>Created</Th>
                            <Th>Edited</Th>
                            <Th>Planet</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {people && people.map((planet, idx) => {
                            return (
                                <Tr key={planet.homeworld + idx}>
                                    <Td>{planet.name}</Td>
                                    <Td>{planet.height}</Td>
                                    <Td>{planet.mass}</Td>
                                    <Td>{new Date(planet.created).toDateString()}</Td>
                                    <Td>{new Date(planet.edited).toDateString()}</Td>
                                    <Td><SecondaryBtn as="a" href={planet.homeworld}>See</SecondaryBtn></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                    <Tfoot>
                        <SecondaryBtn onClick={() => getPeople(prevPage)} disabled={!prevPage}>Prev</SecondaryBtn>
                        <SecondaryBtn onClick={() => getPeople(nextPage)} disabled={!nextPage}>Next</SecondaryBtn>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Layout>
    )
}


const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${colors.primary};
  margin: 0.6rem 0
`
const Subtitle = styled.p`
  font-size: 1rem;
  color: ${colors.secondary};
  margin: 0.2rem 0;
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
// Table Styles
const noWrap = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(${props => props.size ?? 'auto-fill'}, minmax(150px, 1fr));
  margin: 2rem 0;
  width: auto;
  border-radius: 5px;
  border-collapse: collapse;
  padding: 1rem 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${colors.light};
`
const Thead = styled.thead`
  display: contents;
  background-color: ${colors.secondary}
`
const Tbody = styled.tbody`display: contents`
const Tr = styled.tr`
  display: contents;
  ${noWrap};
`
const Th = styled.th`
  position: sticky;
  top: 0;
  text-align: left;
  background: ${colors.headers};
  color: ${colors.secondary};
  padding: 1rem 1.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  ${noWrap};
`
const Td = styled.td`
  text-align: left;
  color: ${colors.secondary};
  padding: 1rem 1.75rem;
  font-size: 0.75rem;
  font-weight: normal;
  border-bottom: 1px solid ${colors.background};
  ${noWrap};
`
const Tfoot = styled.tfoot`
  grid-column: 1/-1;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
const SecondaryBtn = styled.button`
  text-align: left;
  color: ${(props)=>props.disabled ? colors.background : colors.secondary};
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: underline;
  transition: all .5s;
  background-color:transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
    transition: all .5s;
  }
`

export default Main