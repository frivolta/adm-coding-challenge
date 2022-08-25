import {memo} from "react";
import {Tr} from "../common/Tr";
import {Td} from "../common/Td";
import {Tbody} from "../common/Tbody";

const TableBody = memo(({data, columns}) => {
    return (
        <Tbody>
            {data && data.map((column) => {
                return (
                    <Tr key={Date.now() + Math.random()}>
                        {/* No id provided in data */}
                        {Object.entries(columns).map(([k, v]) => {
                            return (<Td key={k}>
                                {/*@ToDo: clean nested ternary*/}
                                {v.render ?
                                    v.render(v.formatterOrHandlerFn ? [v.formatterOrHandlerFn, column[v.value]] : column)
                                    : v.formatterOrHandlerFn ? v.formatterOrHandlerFn(column[v.value]) : column[v.value]}
                            </Td>)
                        })}
                    </Tr>
                )
            })}
        </Tbody>
    )
})
TableBody.defaultProps = {
    data: []
}

export default TableBody