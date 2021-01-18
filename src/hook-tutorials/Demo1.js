import React, { useState, useEffect } from 'react';

function Demo1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
        </div>
    );
}

export default Demo1;
