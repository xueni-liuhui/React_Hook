import React, { useRef, useState, useEffect } from 'react';

function ExampleUseRef() {
    const inputEl = useRef(null);
    const handleClick = () => {
        inputEl.current.value = "Hello 你辉哥";
        console.log(inputEl)
    }
    const [text, setText] = useState("辉哥");
    const textRef = useRef();
    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current' + textRef.current + "保存成功")
    })
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>在input上展示文字</button>
            <br />
            <br />
            <input value={text} onChange={(e) => { setText(e.target.value) }} />

        </>
    )
}
export default ExampleUseRef;