import React, { useState, useEffect } from 'react';

function ExampleUseEffect() {
    const [count, setCount] = useState(0)//数组解构方式
    useEffect(()=>{//异步渲染
        console.log(`useEffect=> 你点击的次数 ${count}`)
    })
    return (
        <>
            <p>你点击的{count}次数</p>
            <button onClick={() => { setCount(count + 1) }}>增加点击</button>
        </>
    )

}

export default  ExampleUseEffect