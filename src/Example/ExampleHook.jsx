import React, { useState } from 'react'

function ExampleHook() {
    const [count, setCount] = useState(0)//数组解构方式
    return (
        <>
            <p>你点击的{count}次数</p>
            <button onClick={() => { setCount(count + 1) }}>增加</button>
        </>
    )
}
export default ExampleHook;