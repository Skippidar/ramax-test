import React from 'react';
import Employer from '../components/Employer';

class EmployerList extends React.Component {

    loadDefault = e => {
        e.preventDefault();
        this.props.loadDefault()
    }

    render(){
        let content;
        if (Object.keys(this.props.employers).length === 0){
            content = (
                <React.Fragment>
                    <div className="center-message">Список сотрудников пуст</div>
                    <div className="center-container">
                        <button onClick={this.loadDefault}>Загрузить сотрудников</button>
                    </div>
                </React.Fragment>
            );
        } else {
            content = (
                <div className="employers">
                    {Object.keys(this.props.employers).map( employer =>
                        <Employer
                            removeEmployer={this.props.removeEmployer}
                            employer={{...this.props.employers[employer]}}
                            key={employer}/>
                    )}
                </div>
            );
        }
        return (
            <React.Fragment>
                <h1>{this.props.page.title}</h1>
                {content}
            </React.Fragment>
        );
    }
}

export default EmployerList;