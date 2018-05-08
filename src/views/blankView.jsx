import React from 'react';
import PropTypes from 'prop-types';

class blankView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Balnk View for Testing Purposes
            </div>
        )
    }

}
blankView.propTypes = {
    blankForm: PropTypes.string
};