import React, { createContext, useContext, useReducer } from 'react';

function UiComponent() {
    const { color } = useContext(ColorContext);
    return (
        <div style={{ color: color }}>
            字体颜色为{color}
        </div>
    )
}

function UiButtons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => { dispatch({ type: UPDATE_COLOR_ACTION, color: "red" }) }}>红色</button>
            <button onClick={() => { dispatch({ type: UPDATE_COLOR_ACTION, color: "green" }) }}>绿色</button>
            <button onClick={() => { dispatch({ type: UPDATE_COLOR_ACTION, color: "purple" }) }}>紫色</button>
        </div>
    )
}
const ColorContext = createContext({});
const UPDATE_COLOR_ACTION = "UPDATE_COLOR_ACTION";
const ColorReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR_ACTION:
            return action.color
        default:
            return state
    }
}
const Color = (props) => {
    const [color, dispatch] = useReducer(ColorReducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}
function ExampleUseReducerAndUseContext() {//使用useReducer和useContext实现redux
    return (
        <>
            <Color>
                <UiComponent />
                <UiButtons />
            </Color>
        </>
    )

}

export default ExampleUseReducerAndUseContext;