import React from "react";
import { connect } from "react-redux";
import { getNumberAction, getInputNumber } from "../../redux/actions/actions";


class FirstPage extends React.Component {
    constructor(props){
        super(props);
        this.addChangeNumber = this.addChangeNumber.bind(this)
        this.createNumber = this.createNumber.bind(this)
    }


    addChangeNumber (e) {
        this.props.getInputNumber(e.target.value)
    }

    createNumber () {
        
        this.props.getNumberAction(this.props.number)
        console.log(this.props.numbers)
    }

    render() {
        return (
            <>
                FirstPage
                <div>
                    <input onChange={this.addChangeNumber} type="number"/>
                    <button onClick={this.createNumber}>add number</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        number: state.numbers.number,
        numbers: state.numbers.numbers
    }
}

const mapDispatchToProps = {
    getNumberAction,
    getInputNumber
}

export default connect(mapStateToProps, mapDispatchToProps) (FirstPage);