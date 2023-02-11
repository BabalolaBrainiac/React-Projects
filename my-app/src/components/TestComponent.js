import React, {Component} from 'react'

class TestComponent extends Component {

    constructor() {
        super()
        this.state = {
            message: ""
        }
    }

    handleFocus = () => {
        this.setState({
            message: "Component state change working perfectly"
        })
    }

    render() {
        return(
            <div>
                {/*<h1>{this.state.message}</h1>*/}
                <input onFocus={this.handleFocus} type="text" />
                <h2 onM></h2>
            </div>
        );
    }
}

export default TestComponent