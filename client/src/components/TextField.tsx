/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";

// Other prop types i can pass in are things like boolean, number (int or double),
// Functions which look like : () => what function returns;
// objects and arrays
// a property with a ? means that it is optional 
interface Props {
    text: string,
    isOkay?: boolean
    fn?: () => void; 
}

export const TextField: React.FC<Props> = ({text}) => {
    return (
        <div>
            <input type="text" placeholder={text}/>
        </div>
    )
}

