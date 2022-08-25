import {memo} from "react";
import COLUMNS from "../../core/tables/general";
import {Tr} from "../common/Tr";
import {Thead} from "../common/Thead";
import {Th} from "../common/Th";

const TableHeader = memo(({columns}) =>{
    return (
        <Thead>
            <Tr>
                {Object.entries(columns).map(([k, v]) => {
                    return <Th key={k}>{v.header}</Th>
                })}
            </Tr>
        </Thead>
    )
})

export default TableHeader