import React, { Component } from 'react'

export class Counter2 extends Component {
    state = { Counter2: 1 }
    handleInc = () => {
        this.setState({
            Counter2: this.state.Counter2 * 2
        })
    }
    handleDec = () => {
        this.setState({
            Counter2: this.state.Counter2 / 2
        })
    }
        render() {
            return (
                <>
                    <div className="count" style={{
                        width: "200px", height: "200px", borderRadius: "50%", margin: "auto", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        backgroundColor: this.state.Counter2 == 100 ? "skyblue" : this.state.Counter2 > 100 ? "aqua" : "yellow"
                    }}>
                        <h1>{this.state.Counter2}</h1>

                    </div>
                    <button onClick={this.handleDec}>/</button>
                    <button onClick={this.handleInc}>*</button>
                </>
            )
        }
    
}

export default Counter2