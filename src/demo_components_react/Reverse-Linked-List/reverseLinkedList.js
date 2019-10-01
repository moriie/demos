import React, { useState } from 'react'

const ReverseLinkedList = () => {

    const [list, setList] = useState([])

    const showList = () => {
        return list.map((node)=>{
            return <li>{node.num}</li>
        })
    }

    const createNode = () => {
        if (list.length){
            Order.create(list.length)
        }
        else {
            Order.create(0)
        }
    }

    const forwards = () => {
        let save;
        for (let n = 0; n < list.length; n++){
            if (list[n].num === n){
                
            }
        }
    }

    return <ul>
        {showList()}
        <button onClick={createNode}>Add Node</button>
        <button onClick={forwards}>Sort List</button>
        <button onClick={reverse}>Reverse List</button>
    </ul>
}

export default ReverseLinkedList

class Order {
    constructor(num){
        this.num = num;
        this.next = null;
        setList([...list, this])
    }


}