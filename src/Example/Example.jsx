import React, { Component } from 'react'

export default class Example extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    add=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <>
               <p>你点击的{this.state.count}次数</p> 
               <button onClick={this.add}>增加</button>
            </>
        )
    }
}
