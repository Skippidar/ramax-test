import React from 'react';

class MenuButton extends React.Component {

    page = {...this.props.page};

    loadPage = e => {
        e.preventDefault();
        if (!(this.props.history.location.pathname === this.props.pageUrl))
            this.props.history.push(this.props.pageUrl);
    }

    render(){

        return (
            <React.Fragment>
                <div className="menu__button" onClick={this.loadPage}>
                    {this.page.title}
                </div>
            </React.Fragment>
        );
    }
}

export default MenuButton;