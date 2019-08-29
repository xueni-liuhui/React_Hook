import React, { Component } from 'react';
import Example from '../Example/Example';
import ExampleHook from '../Example/ExampleHook';//初探Hook 与Example传统class写法对比
import ExampleHookMoreState from '../Example/ExampleHookMoreState';//多个状态
import ExampleLifeCycle from '../Example/ExampleLifeCycle';//生命周期
import ExampleUseEffect from '../Example/ExampleUseEffect';//useEffect代替生命周期
import ExampleAchieve from '../Example/ExampleAchieve';//useEffect实现其他生命周期
import ExampleUseContext from '../Example/ExampleUseContext';//useContext的用法,实现父子组件传值
import ExampleUseReducer from '../Example/ExampleUseReducer';//useReducer用法
import ExampleUseReducerAndUseContext from '../Example/ExampleUseReducerAndUseContext';// useContext和useReducer的用法,实现redux
import ExampleNatureBug from '../Example/ExampleNatureBug';//使用useMeno解决性能问题
import ExampleUseRef from '../Example/ExampleUseRef';//使用useRef获取dom
import ExampleCustomHook from '../Example/ExampleCustomHook';//use自定义函数
export default class Container extends Component {//容器组件
    render() {
        return (
            <>
                <h1>第一节 Class 与Hook 写法对比 (useState使用)</h1>
                <h3>普通Class写法Example</h3>
                <Example />
                <hr />
                <h3>Hook写法</h3>
                <ExampleHook />
                <div style={styles.line}></div>
                <h1>第二节 Hook多状态 (useState使用)</h1>
                <h3>Hook多状态，useState不能存在于条件语句中</h3>
                <ExampleHookMoreState />
                <div style={styles.line}></div>
                <h1>第三节 useEffect 使用</h1>
                <h3>使用生命周期componentDidMount</h3>
                <ExampleLifeCycle />
                <hr />
                <h3>使用useEffect</h3>
                <ExampleUseEffect />
                <div style={styles.line}></div>
                <h1>第四节 useEffect 实现其他生命周期</h1>
                <h3>useEffect 实现其他生命周期</h3>
                <ExampleAchieve />
                <div style={styles.line}></div>
                <h1>第五节 useContext实现父子组件传值</h1>
                <h3>useContext的用法</h3>
                <ExampleUseContext />
                <div style={styles.line}></div>
                <h1>第六节 useReducer</h1>
                <h3>useReducer的用法</h3>
                <ExampleUseReducer />
                <div style={styles.line}></div>
                <h1>第七节 useReducer和useContext 实现redux</h1>
                <h3>useReducer和useContext 实现redux</h3>
                <ExampleUseReducerAndUseContext />
                <div style={styles.line}></div>
                <h1>第八节 useMemo解决组件重复执行的问题</h1>
                <h3>性能问题</h3>
                <ExampleNatureBug />
                <div style={styles.line}></div>
                <h1>第九节 useRef获取Dom和保存变量</h1>
                <h3>useRef获取Dom和保存变量</h3>
                <ExampleUseRef />
                <div style={styles.line}></div>
                <h1>第十节 自定义Hook</h1>
                <h3>自定义Hook</h3>
                <ExampleCustomHook />
            </>
        )
    }
}
const styles = {
    line: {
        width: "100%",
        border: "2px solid red",
        marginTop: "30px"
    }
}