import React from 'react';
import {getObjData} from "../helpers";

class EmployerFormDepartment extends React.Component {

    state = {
        department: this.props.department || []
    };

    addDepartment = e => {
        e.preventDefault();
        let departments = [...this.state.department];
        departments.push({
            id: 0,
            name: ''
        });
        this.setState({department: departments})
    }

    removeDepartment = (e, id) => {
        e.preventDefault();
        let departments = [...this.state.department]
            .filter((dep, index) =>  !(parseInt(index, 10) === parseInt(id, 10)));
        this.setState({department: departments});
    }

    render(){

        if (this.state.department.length === 0){
            this.state.department.push({
                id: 0,
                name: ''
            });
        }

        return (
            <React.Fragment>
                <div className="form-item">
                    <div className="form-item__title">Департамент</div>
                    <div className="form-item__value input-list">
                        {Object.keys(this.state.department).map( id => {
                            let buttons;
                            if (parseInt(id, 10) !== 0 && parseInt(id, 10) === this.state.department.length - 1){
                                buttons = (
                                    <React.Fragment>
                                        {buttons}
                                        <div className="input-list__button" onClick={(e) => this.removeDepartment(e, id)}>
                                            <div className="input-list__button_title">-</div>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                            if (parseInt(id, 10) === this.state.department.length - 1){
                                buttons = (
                                    <React.Fragment>
                                        {buttons}
                                        <div className="input-list__button" onClick={this.addDepartment}>
                                            <div className="input-list__button_title">+</div>
                                        </div>
                                    </React.Fragment>
                                );
                            }
                            return (
                                <div className="input-list__item" key={id}>
                                    <input type="text" ref={id}
                                           className="input-list__input"
                                           required
                                           defaultValue={getObjData(this.props, `department/${id}/name`)}
                                    />
                                    {buttons}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployerFormDepartment;