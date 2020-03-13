import React from 'react';
import { withRouter } from 'react-router'
import MenuButton from './MenuButton';

class Menu extends React.Component {

    pages = {...this.props.pages};

    render(){
        return (
            <React.Fragment>
                <div className="container menu">
                    {Object.keys(this.pages).map( page => {
                        if (!this.pages[page].hideMenu){
                            return (
                                <React.Fragment key={page}>
                                    <MenuButton page={this.pages[page]} history={this.props.history} pageUrl={page}/>
                                </React.Fragment>
                            );
                        } else {
                            return false;
                        }
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Menu);