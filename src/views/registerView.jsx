import React from 'react';
import PropTypes from 'prop-types';

class registerView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Register View using {this.props.modelForm}
            </div>
        )
    }

}
registerView.propTypes = {
    modelForm: PropTypes.string
};