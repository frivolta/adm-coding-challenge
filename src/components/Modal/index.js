import CloseSvg from "../../assets/icons/close.svg";
import {Table} from "../common/Table";
import Theader from "../TableHeader";
import Loader from "../common/Loader";
import {Hearts} from "react-loader-spinner";
import {colors} from "../../globals/theme";
import TableBody from "../TableBody";
import styled from "@emotion/styled";

const Modal = ({isOpen, handleClose, isLoading, isSuccess, data, columns}) =>{
    return (
        <ModalWrapper isOpen={isOpen} onClick={()=>handleClose(false)}>
            <ModalClose src={CloseSvg}  onClick={()=>handleClose(false)}/>
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
                {isSuccess && <TableBody data={data} columns={columns}/>}
            </Table>
        </ModalWrapper>
    )
 }
export const ModalWrapper = styled.div`
  display:flex;
  transform: scale(${(props)=> props.isOpen ? '1' : '0'});
  transition: transform 0.2s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  z-index: 1;
  justify-content: center;
  align-items: center;
`
export const ModalClose = styled.img`
    width: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width:2rem;
    height:2rem;
    padding: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
      &:hover {
        opacity: 0.8;
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
      }
`
 export default Modal