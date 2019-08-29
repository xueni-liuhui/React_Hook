import React, { useState, useMemo } from 'react';

function ExampleNatureBug() {
    const [zhangSan, setZhangSan] = useState('张三在准备');
    const [liSi, setLiSi] = useState('李四在准备');
    return (
        <>
            <button onClick={() => { setZhangSan(new Date().getTime()) }}>张三</button>
            <button onClick={() => { setLiSi(new Date().getTime() + "李四") }}>李四</button>
            <ChildComponent name={zhangSan}>{liSi}</ChildComponent>
        </>
    )
}
function ChildComponent({ name, children }) {
    function changeZhangsan(name) {
        console.log("张三改变了")
        return name + '张三改变了'
    }
    //使用useMemo 优化性能 
    // const result =  changeZhangsan(name);//未优化时
    const result = useMemo(() => { return changeZhangsan(name) }, [name]);
    return (
        <>
            <div>{result}</div>
            <div>{children}</div>
        </>
    )

}
export default ExampleNatureBug;