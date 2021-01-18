import React, { useState, useEffect } from "react";
import {Button} from "react-bootstrap";

function MyComponent() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {

        fetch("http://localhost:8080/qr-terminal?pageNo=1&pageSize=10")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.value.Result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );

    }, [])

    function getData(){
        // fetch("http://localhost:8080/qr-terminal?pageNo=1&pageSize=20")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setIsLoaded(true);
        //             setItems(result.value.Result);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Button onClick={getData()}>Get data</Button>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.terminalName}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}
export default MyComponent;
