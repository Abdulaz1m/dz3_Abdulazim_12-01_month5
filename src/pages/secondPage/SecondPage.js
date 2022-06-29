import React from "react";
import { connect } from "react-redux";

class SecondPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                SecondPage
                {this.props.numbers.map((number, key) => <div key={key}>{number}</div>)}
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


export default connect(mapStateToProps, null) (SecondPage);