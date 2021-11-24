import  React, { useState } from 'react';

export default function Button(props) {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h2>contador: { counter }</h2>
            <button onClick={ () => setCounter(counter + 1)}>click me!</button>
        </div>
    )
}
