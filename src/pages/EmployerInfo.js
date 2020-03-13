import React from 'react';
import { withRouter } from 'react-router';
import Employer from '../components/Employer';
import Error404 from './Error404';
import { getObjData } from '../helpers';

class EmployerInfo extends React.Component {

    render(){

        if (getObjData(this.props, `employers/${this.props.match.params.employerId}/id`) === null){
            return (
                <React.Fragment>
                    <Error404/>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <h1>{this.props.page.title}</h1>
                <div className="employers">
                    <Employer employer={{...this.props.employers[this.props.match.params.employerId]}}
                              removeEmployer={this.props.removeEmployer}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(EmployerInfo);