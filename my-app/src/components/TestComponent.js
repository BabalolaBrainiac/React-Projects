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

    handleEnter = () => {
        this.setState({
            message: "",
            imageWidth: ""
        })
    }

    componentDidMount() {
        this.setState({
            message: "Testing Modal"
        })
        let elems = document.querySelectorAll('.modal');
        var instances = window.M.Modal.init(elems);
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>{this.state.message}</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestComponent