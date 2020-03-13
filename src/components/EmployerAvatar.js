import React from 'react';

class EmployerAvatar extends React.Component {

    render(){
        return (
            <React.Fragment>
                <div className="employer__avatar">
                    <img src={this.props.employer.pictureUrl} alt={this.props.employer.name.first}/>
                </div>
            </React.Fragment>
        );
    }
}

export default EmployerAvatar;