/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";

interface Props {
    text: string
}

export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}