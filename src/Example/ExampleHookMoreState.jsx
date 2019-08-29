import React, { useState } from 'react';
//let shownSex = true;
function ExampleHookMoreState() {
    const [name, setName] = useState("LiuHui");
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState("男");
    // if(shownSex){ //useState不能存在于条件语句中
    //     const [sex, setSex] = useState("男");
    //     shownSex=false;
    // }

    return (
        <>
            <p>姓名：{name}</p>
            <p>年龄：{age}</p>
            <p>性别：{sex}</p>
        </>
    )

}
export default ExampleHookMoreState;