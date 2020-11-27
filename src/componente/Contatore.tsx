import React from "react";
import {useState} from "react";
import ShowCounterData from "./ShowCounterData";

interface IComponentProps{
    valueStart: number;
}

const Contatore : React.FC<IComponentProps> = ({valueStart}) => {   // Sintassi per inizializzare value start a number
    const [ counter, setCounter] = useState<number>(valueStart);
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    return (
        <div className={'contenitore'}>
            <ShowCounterData counterValue={counter} />
            <button className={'più'} onClick={ increment }>+</button>
            <button className={'meno'} disabled={ counter <= 0 }  onClick={ decrease }>-</button>
        </div>
    );

    // counter <= 0 è un controllo se è > o <= 0 per restituire il valore corretto a disabled sennò typescript non lo convalida.
}

export default Contatore;