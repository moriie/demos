import React, {useState} from 'react'

const ReverseStringInPlace = () => {
    
    const defaultStr = "Hello, this string is our example string. What we are trying to do is this: reverse the string in place while keeping the location of punctuation in the same location. This challenge can sometimes be found as a technical interview question."

    const [str, setStr] = useState(defaultStr)

    const reverseStr = () => {
        let strArr = str.match(/([\w]+|[?.,!:;]+)/g)
        let save;
        for (let n = 0; n <= Math.floor(strArr.length/2); n++){
            save = strArr[n]
            if (strArr[strArr.length-(n+1)].match(/[?.,!:;]/)){
                save=save.concat(strArr.splice(strArr.length-(n+1), 1)[0])
            }
            strArr[n] = strArr[strArr.length-(n+1)]
            if (strArr[n+1].match(/[?.,!:;]/)){
                strArr.splice(n, 2, strArr[n]+strArr[n+1])
            }
            strArr[strArr.length-(n+1)] = save
            console.log(strArr)
        }
        setStr(strArr.join(' '))
    }

    return <div className="demo-body">
        <h2>{str}</h2>
        <button onClick={reverseStr}>Reverse The String!</button><br/>
        <button onClick={()=>{setStr(defaultStr)}}>Reset The String!</button>
    </div>
}

export default ReverseStringInPlace