import Modal from "../../components/Modal";
import COLUMNS from "../../core/tables/planet";
import {useGetPlanetQuery} from "../../store/services/planetApi";

const ModalContainer = ({planet, isOpen, handleClose}) => {
    const {isLoading, isSuccess, data} = useGetPlanetQuery(planet)

    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleClose}
            isLoading={isLoading}
            isSuccess={isSuccess}
            data={[data]}
            columns={COLUMNS}
        />
    )
}

export default ModalContainer;