import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    render(){
        // Get data from route props
        const apps = this.props.route.data;
        // Map through apps and return linked apps
        const appNode = apps.map((app) => {
            return (
                <Link
                    to={"/apps/"+app.id}
                    className="list-group-item"
                    key={app.id}>
                    {app.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Free applications with over one billion and fewer than five billion downloads</h1>
                <div className="list-group">
                    {appNode}
                </div>
            </div>
        );
    }
}

export default Car
