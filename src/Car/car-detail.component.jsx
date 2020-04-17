import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        const apps = this.props.route.data;
        const id = this.props.params.id;
        const app = apps.filter(app => {
            if(app.id == id) {
                return app;
            }
        });

        return (
            <div>
                <h1>{app[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={app[0].media} alt={app[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Model</strong>: {app[0].model}</li>
                           <li><strong>Make</strong>: {app[0].make}</li>
                           <li><strong>Year</strong>: {app[0].year}</li>
                           <li><strong>Price</strong>: {app[0].price}</li>
                       </ul>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to apps</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail
