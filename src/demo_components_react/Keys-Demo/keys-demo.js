import React, { useState, useEffect } from "react";

const KeysDemo = () => {

    const [examples, setExamples] = useState([
        "Hi, I'm Item 1",
        "Hi, I'm Item 2",
        "Hi, I'm Item 3",
        "Hi, I'm Item 4",
        "Hi, I'm Item 5"
    ]);
    const [count, setCount] = useState(6)
    const [reverse, setReverse] = useState(false)

    const demolist = () => {
        return examples.map((item, index) => {
        return (
            <li key={index}>
            {item}
            </li>
        );
        });
    };

    const additem = () => {
        let newArr = examples
        newArr.push(`Hi, I'm Item ${count}`)
        setCount(count+1)
        setExamples([...newArr]);
    };

    const moveitem = () => {
        let newArr2 = examples.sort((item1,item2)=> reverse ? parseInt(item1.split(' ')[3])-parseInt(item2.split(' ')[3]) : parseInt(item2.split(' ')[3])-parseInt(item1.split(' ')[3]))
        setReverse(!reverse)
        setExamples([...newArr2])
    }

    return <div>
        <div>{demolist()}</div>
        <button onClick={additem}>Add Item</button><br/>
        <button onClick={moveitem}>Sort</button>
    </div>
}

export default KeysDemo