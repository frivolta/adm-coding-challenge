import {SecondaryBtn} from "../../components/common/SecondaryBtn";

const toReadableDate = (date) => new Date(date).toDateString()

const COLUMNS =(handleSetPlanet)=> ({
    name: {
        value: 'name',
        header: 'Name',
        formatterOrHandlerFn: null,
        render: null
    },
    height: {
        value: 'height',
        header: 'Height',
        formatterOrHandlerFn: null,
        render: null
    },
    mass: {
        value: 'mass',
        header: 'Mass',
        formatterOrHandlerFn: null,
        render: null
    },
    created: {
        value: 'created',
        header: 'Created',
        formatterOrHandlerFn: toReadableDate,
        render: null
    },
    edited: {
        value: 'edited',
        header: 'Edited',
        formatterOrHandlerFn: toReadableDate,
        render: null
    },
    homeworld: {
        value: 'homeworld',
        header: 'Home world',
        formatterOrHandlerFn: (v)=>handleSetPlanet(v),
        render: ([fn, value])=> {
            const regex = /\/(\d+)\/$/
            const match = regex.exec(value)
            return <SecondaryBtn onClick={()=>fn(match[1])}>See</SecondaryBtn>
        }
    },
})

export default COLUMNS
