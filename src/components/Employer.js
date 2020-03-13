import React from 'react';
import { withRouter } from 'react-router'
import { parseName, parseDepartment } from '../helpers';
import EmployerInfoExtra from './EmployerInfoExtra';
import EmployerAvatar from './EmployerAvatar';

class Employer extends React.Component {

    state = {
        collapsed: true
    };

    viewEmployer = e => {
        e.preventDefault();
        this.props.history.push(`/employers/view/${this.props.employer.id}`);
    };

    toggleInfo = () => {
        this.setState({ collapsed: !this.state.collapsed});
    };

    goToEdit = e => {
        e.preventDefault();
        this.props.history.push(`/employers/edit/${this.props.employer.id}`)
    }

    removeEmployer = e => {
        e.preventDefault();
        this.props.removeEmployer(this.props.employer.id);
        this.props.history.push(`/employers/`)
    }

    render(){

        let employerInfoExtra = '';
        if (!this.state.collapsed){
            employerInfoExtra = (
                <EmployerInfoExtra employer={this.props.employer} history={this.props.history}/>
            );
        }

        let collapseText = this.state.collapsed ? '+' : '-';

        let employerAvatar = '';
        if (this.props.employer.pictureUrl){
            employerAvatar = (
                <EmployerAvatar employer={this.props.employer}/>
            );
        }

        return (
            <React.Fragment>
                <div className="employer">
                    {employerAvatar}
                    <div className="employer__info">
                        <div className="employer__info_name" onClick={this.viewEmployer}>{parseName(this.props.employer.name)}</div>
                        <div className="department">{parseDepartment(this.props.employer.department)}</div>
                        <div className="employer__info_job">{this.props.employer.jobTitle}</div>
                        <div className="separator"></div>
                        <div className="info-item">
                            <div className="info-item__title">E-mail</div>
                            <div className="info-item__value">{this.props.employer.contacts.email}</div>
                        </div>
                        <div className="info-item">
                            <div className="info-item__title">Кабинет</div>
                            <div className="info-item__value">{this.props.employer.contacts.office}</div>
                        </div>
                        <div className="info-collapse">
                            <div className="info-collapse__button" onClick={this.removeEmployer}>
                                <div className="info-collapse__text">🞪</div>
                            </div>
                            <div className="info-collapse__button" onClick={this.goToEdit}>
                                <div className="info-collapse__text">🖊</div>
                            </div>
                            <div className="info-collapse__button" onClick={this.toggleInfo}>
                                <div className="info-collapse__text">{collapseText}</div>
                            </div>
                        </div>
                        {employerInfoExtra}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Employer);