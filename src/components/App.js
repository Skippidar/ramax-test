import React from 'react';
import Menu from './Menu';
import { Switch, Route, withRouter } from 'react-router-dom';
import base from "../base";
import sampleEmployers from "../sample-employers";
import Main from "../pages/Main";
import EmployerList from "../pages/EmployerList";
import EmployerForm from "../pages/EmployerForm";
import EmployerInfo from "../pages/EmployerInfo";
import Error404 from "../pages/Error404";

class App extends React.Component {

    componentDidMount = () => {
        this.ref = base.syncState(`/employers/`, {
            context: this,
            state: 'employers'
        });
    }

    componentWillUnmount = () => {
        base.removeBinding(this.ref);
    }

    componentDidUpdate = () => {
        const params = this.props.match.params;
        localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
    }

    state = {
        pages: {
            '/': {
                title: 'Главная',
                component: Main,
                exact: true
            },
            '/employers/': {
                title: 'Сотрудники',
                component: EmployerList,
                firmOnly: true,
                exact: true
            },
            '/employers/add/': {
                title: 'Добавить сотрудника',
                component: EmployerForm,
                firmOnly: true,
                exact: true
            },
            '/employers/view/:employerId': {
                title: 'Информация о сотруднике',
                component: EmployerInfo,
                firmOnly: true,
                exact: true,
                hideMenu: true
            },
            '/employers/edit/:employerId': {
                title: 'Редактирование сотрудника',
                component: EmployerForm,
                firmOnly: true,
                exact: true,
                hideMenu: true
            }
        },
        employers: {}
    };

    addEmployer = employer => {
        const employers = {...this.state.employers};
        const id = employer.id = Date.now();
        employers[id] = employer;
        this.setState({ employers });
        return id;
    }

    editEmployer = (id, employer) => {
        const employers = {...this.state.employers};
        employer.id = id;
        employers[id] = employer;
        this.setState({ employers });
        return id;
    }

    removeEmployer = (id) => {
        const employers = {...this.state.employers};
        employers[id] = null;
        this.setState({ employers });
    }

    loadDefault = () => {
        this.setState({ employers: sampleEmployers});
    }

    render(){

        return (
            <React.Fragment>
                <Route path={"/"} component={() => <Menu pages={{...this.state.pages}}/>}/>
                <div className="page">
                    <Switch>
                        {Object.keys(this.state.pages).map( page => {
                            const routeProps = {
                                key: page,
                                path: page
                            };
                            if (this.state.pages[page].exact !== undefined){
                                routeProps.exact = this.state.pages[page].exact
                            }

                            const componentOptions = {
                                page: this.state.pages[page]
                            };

                            switch (this.state.pages[page].component.name){
                                case 'Main':
                                    break;
                                default:
                                    componentOptions.loadDefault = this.loadDefault;
                                    componentOptions.addEmployer = this.addEmployer;
                                    componentOptions.editEmployer = this.editEmployer;
                                    componentOptions.removeEmployer = this.removeEmployer;
                                    componentOptions.employers = {...this.state.employers}
                                    break;
                            }

                            const component = React.createElement(this.state.pages[page].component, componentOptions);

                            return (
                                <Route
                                    {...routeProps}
                                    render={ () => component}
                                />
                            );
                        })}
                        <Route>
                            <Error404/>
                        </Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(App);