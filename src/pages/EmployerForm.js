import React from 'react';
import { parseName } from '../helpers';
import { withRouter } from 'react-router';
import EmployerFormDepartment from '../components/EmployerFormDepartment';
import { getObjData, addRefs, prepareName, prepareDepartment, prepareManager } from '../helpers';
import Error404 from './Error404';

class EmployerForm extends React.Component {

    employer = 0;

    prepareForm = e => {
        e.preventDefault();
        const formData = {};
        addRefs(formData, this.refs);
        for (const field in formData){
            switch (field){
                case 'name':
                    formData[field] = prepareName(formData[field]);
                    break;
                case 'department':
                    formData[field] = prepareDepartment(formData[field]);
                    break;
                case 'manager':
                    if (formData[field]){
                        formData[field] = prepareManager(formData[field], this.props.employers);
                    } else {
                        formData[field] = null;
                    }
                    break;
                default:
                    break;
            }
        }
        const goTo = this.employer === 0 ? this.props.addEmployer(formData) : this.props.editEmployer(this.employer, formData);
        this.props.history.push(`/employers/view/${goTo}`);
    }

    render(){

        this.employer = this.props.match.params.employerId || this.employer;

        if (this.employer !== 0 && this.props.employers[getObjData(this.props, 'match/params/employerId')] === undefined){
            return (
                <Error404/>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>{this.props.page.title}</h1>
                    <form className="employer-form" onSubmit={this.prepareForm}>
                        <div className="white-container">
                            <div className="form-item">
                                <div className="form-item__title">Аватар</div>
                                <div className="form-item__value">
                                    <input ref="pictureUrl"
                                           type="text"
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/pictureUrl`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Имя</div>
                                <div className="form-item__value">
                                    <input ref="name"
                                           type="text"
                                           className="employer-input"
                                           defaultValue={parseName(getObjData(this.props, `employers/${this.employer}/name`))}
                                           required
                                    />
                                </div>
                            </div>
                            <EmployerFormDepartment ref={"department"} department={getObjData(this.props, `employers/${this.employer}/department`)}></EmployerFormDepartment>
                            <div className="form-item">
                                <div className="form-item__title">Должность</div>
                                <div className="form-item__value">
                                    <input ref={"jobTitle"}
                                           type="text"
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/jobTitle`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">E-Mail</div>
                                <div className="form-item__value">
                                    <input type="text"
                                           ref={"contacts/email"}
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/contacts/email`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Кабинет</div>
                                <div className="form-item__value">
                                    <input type="text"
                                           ref={"contacts/office"}
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/contacts/office`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Дата рождения</div>
                                <div className="form-item__value">
                                    <input type="date"
                                           ref={"birthDay"}
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/birthDay`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Принят на работу</div>
                                <div className="form-item__value">
                                    <input type="date"
                                           ref={"hireDate"}
                                           className="employer-input"
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/hireDate`)}
                                           required
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Рабочий тел.</div>
                                <div className="form-item__value">
                                    <input type="text"
                                           ref={"contacts/phoneWork"}
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/contacts/phoneWork`)}
                                           className="employer-input"
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Мобильный тел.</div>
                                <div className="form-item__value">
                                    <input type="text"
                                           ref={"contacts/phoneMobile"}
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/contacts/phoneMobile`)}
                                           className="employer-input"
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Факс</div>
                                <div className="form-item__value">
                                    <input type="text"
                                           ref={"contacts/fax"}
                                           defaultValue={getObjData(this.props, `employers/${this.employer}/contacts/fax`)}
                                           className="employer-input"
                                    />
                                </div>
                            </div>
                            <div className="form-item">
                                <div className="form-item__title">Руководитель</div>
                                <div className="form-item__value">
                                    <select className={"employer-input"}
                                            ref={"manager"}
                                            defaultValue={getObjData(this.props, `employers/${this.employer}/manager/id`)}
                                    >
                                        <option value="">Без руководителя</option>
                                        {Object.keys(this.props.employers).map(key => {
                                            return (
                                                <option value={key} key={key}>
                                                    {parseName(this.props.employers[key].name)}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="form-item">
                                <button type={"submit"} className={"form-item__button"}>{this.employer !== 0 ? 'Изменить' : 'Добавить'}</button>
                            </div>
                        </div>
                    </form>
                </React.Fragment>
            );
        }
    }
}

export default withRouter(EmployerForm);