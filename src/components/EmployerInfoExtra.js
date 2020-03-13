import React from 'react';
import { printDate, parseName } from '../helpers';

class EmployerInfoExtra extends React.Component {

    viewEmployer = () => {
        this.props.history.push(`/employers/view/${this.props.employer.manager.id}`);
    };

    render(){

        let output = <React.Fragment/>,
            empty = true;

        if (this.props.employer.contacts.phoneWork){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item">
                        <div className="info-item__title">Рабочий телефон</div>
                        <div className="info-item__value">{this.props.employer.contacts.phoneWork}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.employer.contacts.phoneMobile){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item">
                        <div className="info-item__title">Мобильный телефон</div>
                        <div className="info-item__value">{this.props.employer.contacts.phoneMobile}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.employer.contacts.fax){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item">
                        <div className="info-item__title">Факс</div>
                        <div className="info-item__value">{this.props.employer.contacts.fax}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.employer.birthDay){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item">
                        <div className="info-item__title">Дата рождения</div>
                        <div className="info-item__value">{printDate(this.props.employer.birthDay)}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.employer.hireDate){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item">
                        <div className="info-item__title">Принят на работу</div>
                        <div className="info-item__value">{printDate(this.props.employer.hireDate)}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (this.props.employer.manager){
            empty = false;
            output = (
                <React.Fragment>
                    {output}
                    <div className="info-item manager" onClick={this.viewEmployer}>
                        <div className="info-item__title">Руководитель</div>
                        <div className="info-item__value">{parseName(this.props.employer.manager.name)}</div>
                    </div>
                </React.Fragment>
            );
        }
        if (empty){
            output = <div className="center-message">Информация отсутствует</div>
        }
        return (
            <React.Fragment>
                <div className="info-hidden">
                    {output}
                </div>
            </React.Fragment>
        );
    }
}

export default EmployerInfoExtra;