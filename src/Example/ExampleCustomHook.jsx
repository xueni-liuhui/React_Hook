import React, { useState, useEffect, useCallback } from 'react';
function useWinSize() {//自定义的hook
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const onReSize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onReSize);
        return () => {
            window.removeEventListener('resize', onReSize);
        }
    })
    return size
}

function ExampleCustomHook() {
    const size = useWinSize();
    return (
        <span>宽度{size.width}高度{size.height}</span>
    )
}

export default ExampleCustomHook