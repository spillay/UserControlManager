import React from 'react';
import PropTypes from 'prop-types';

class resetView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Reset View using {this.props.modelForm}
            </div>
        )
    }

}
resetView.propTypes = {
    modelForm: PropTypes.string
};