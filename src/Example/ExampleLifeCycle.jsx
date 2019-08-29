import React, { Component } from 'react'

export default class ExampleLifeCycle extends Component {//生命周期案例
    constructor(props){
        super(props)
        this.state={
            count :0
        }
    }
    componentDidMount(){
        console.log(`componentDidMount=> 你点击的次数 ${this.state.count}`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=> 你点击的次数 ${this.state.count}`)
    }
    add=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <>
                <p>你点击的次数{this.state.count}</p>
                <button onClick={this.add}>增加点击</button>
            </>
        )
    }
}
