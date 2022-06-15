import React, { Component } from 'react'

export class Counter extends Component {
    state = { Counter: 0 }
    handleInc=()=> {
        this.setState({
            Counter: this.state.Counter + 1
        })
    }
    handleDec=()=>{
        this.setState({
            Counter: this.state.Counter - 1
        })
    }
    render() {
        return (
            <>
                <div className="count" style={{
                    width:"200px",height:"200px", borderRadius:"50%",margin:"auto", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    backgroundColor:this.state.Counter==0?"skyblue":this.state.Counter>0?"aqua":"yellow"
                }}>
                <h1>{this.state.Counter}</h1>
                
                </div>

                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>

            </>
        )
    }
}

export default Counter