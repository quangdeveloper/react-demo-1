import React, {useState} from "react";
import {Button} from "react-bootstrap";

export default function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={() => setCount(initialCount)}>Reset</Button><br/>
            <Button onClick={() => setCount(prevCounts => prevCounts - 1)}>Binus</Button><br/>
            <Button onClick={() => setCount(prevCount => prevCount + 1)}>Plus</Button><br/>
        </div>
    );
}
