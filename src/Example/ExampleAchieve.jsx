import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function ParentIndex() {
    useEffect(()=>{
        console.log('useEffect=>在ExampleAchieve中ParentIndex的实现，父级页面')
        return ()=>{//此种写法在触发add事件时也会触发
            console.log("卸载ExampleAchieve中ParentIndex父级页面，前往子级页面")
        }
    })//空数组表示，页面组件ParentIndex被销毁时才会执行，加入变量，只有该变量发生变化时，return中的内容才会执行
    return (
        <h1>父级页面</h1>
    )
}
function ChildIndex(){
    useEffect(()=>{
        console.log('useEffect=>在ExampleAchieve=>ChildIndex  中的实现，子级页面')
    })
    return (
        <h1>子级页面</h1>
    )
}
function ExampleAchieve() {//使用useEffect实现生命周期
    const [count, setCount] = useState(0)//数组解构方式
    useEffect(()=>{
         console.log(`你点击的${count}次数`)
        return ()=>{
             console.log("=======")
        }
    },[count])
    return(
        <Router>
             <p>你点击的{count}次数</p>
            <button onClick={() => { setCount(count + 1) }}>增加</button>
            <ul>
                <li><Link to="/">首页-父级页面</Link></li>
                <li><Link to="/list">子页-子级页面</Link></li>
            </ul>
            <Route path="/"exact component={ParentIndex}/>
            <Route path="/list/" component={ChildIndex}/>
        </Router>
    )
}
export default ExampleAchieve;