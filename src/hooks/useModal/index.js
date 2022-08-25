import {useState} from "react";

export const useModal = () =>{
    const [planet, setPlanet] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    return {planet, setPlanet, isOpen, setIsOpen}
}