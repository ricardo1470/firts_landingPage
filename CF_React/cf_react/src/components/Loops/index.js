import React from "react";

export default function Loops() {
    const Data = [
        'Milena',
        'julian',
        'Pedro',
        'Maria',
        'Jose',
        'Luis',
        'karina',
        'Juana',
        'Jorge',
        'Sofia'
    ]
    return (
        <div>
            <ul>
                {Data.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}