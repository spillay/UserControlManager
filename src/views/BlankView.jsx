import React from 'react';
import PropTypes from 'prop-types';
import {DynamicForm} from '@spillay/formmanager'; 

class BlankView extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor

   
    render() {
        return (
            <div>
              Blank View for Testing Purposes
            </div>
        )
    }

}
BlankView.propTypes = {
    modelForm: PropTypes.string.isRequired
};
export default BlankView;