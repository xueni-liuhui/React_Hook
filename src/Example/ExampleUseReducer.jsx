import React, { useReducer } from 'react';
//Reducer
// function countReducer(state, action) {
//     switch (action.type) {
//         case "add":
//             return state + 1
//         case "sub":
//             return state - 1
//         default:
//             return state
//     }
// }
function ExampleUseReducer() {//使用useReducer实现 Redux中的reducer效果
    const [count,dispatch] = useReducer((state, action) => {
        switch (action) {
            case "add":
                return state + 1
            case "sub":
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <>
            <h5>现在的分数是{count}</h5>
            <button onClick={()=>{dispatch("add")}}>增加</button>
            <button onClick={()=>{dispatch("sub")}}>减少</button>
        </>
    )
}
export default ExampleUseReducer;