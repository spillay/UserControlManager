import React from 'react';
import PropTypes from 'prop-types';
import LoginView from '../views/loginView'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    } // end of constructor


    render() {

        return (
            <div>
                <LoginView
                    modelForm={this.props.modelForm}
                    groups={this.props.groups}  // groups will be 1 to 4 only 1=col-md-12,  2= col-md-6 , 3=col-md-4  4= col-md-3
                    columns={this.props.columns}
                    submitFunc={this.props.submitFunc} >
                </LoginView>
            </div>

        )
    }
} // end of LoginPage

LoginPage.propTypes = {
    groups:PropTypes.number.isRequired,
    columns:PropTypes.string.isRequired,
    modelForm: PropTypes.string.isRequired,
    submitFunc: PropTypes.func.isRequired
};