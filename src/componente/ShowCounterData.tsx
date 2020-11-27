import React from "react";

interface IComponentProps{
    counterValue: number;
}

const ShowCounterData : React.FC<IComponentProps>= ({counterValue}) => {
    const test = 100 - counterValue;

    return (
        <div>
            <p>Il tuo contatore vale: { counterValue}</p>
            { (test > 0) && (
                <p>Mancano {test} incrementi per arrivare a 100</p>
            )}
        </div>
    );
}

export default ShowCounterData;