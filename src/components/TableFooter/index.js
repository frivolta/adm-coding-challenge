import {Tfoot} from "../common/Tfoot";
import {memo} from "react";

const TableFooter = memo(({children}) => {
    return (
        <Tfoot>
            {children}
        </Tfoot>
    )
})


export default TableFooter