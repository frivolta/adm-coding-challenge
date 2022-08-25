import {SecondaryBtn} from "../../components/common/SecondaryBtn";

const toReadableDate = (date) => new Date(date).toDateString()

const COLUMNS = {
    name: {
        value: 'name',
        header: 'Name',
        formatterFn: null,
        render: null
    },
    height: {
        value: 'height',
        header: 'Height',
        formatterFn: null,
        render: null
    },
    mass: {
        value: 'mass',
        header: 'Mass',
        formatterFn: null,
        render: null
    },
    created: {
        value: 'name',
        header: 'Name',
        formatterFn: toReadableDate,
        render: null
    },
    edited: {
        value: 'edited',
        header: 'Edited',
        formatterFn: toReadableDate,
        render: null
    },
    homeworld: {
        value: 'homeworld',
        header: 'Home world',
        formatterFn: null,
        render: (planet) => <SecondaryBtn as="a" href={planet.homeworld}>See</SecondaryBtn>
    },
}

export default COLUMNS
