import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();//实现父子组件共享数据
function ChildCount() {
    let count = useContext(CountContext)//接收父组件传过来的值
    return (
        <h4>{count}</h4>
    )
}

function ExampleUseContext() {
    const [count, setCount] = useState(0)//数组解构方式
    return (
        <>
            <p>你点击的{count}次数</p>
            <button onClick={() => { setCount(count + 1) }}>增加</button>
            <CountContext.Provider value={count}>
                <ChildCount />
            </CountContext.Provider>
        </>
    )
}

export default ExampleUseContext;