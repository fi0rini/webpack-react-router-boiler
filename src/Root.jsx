import React, { Component }           from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

// main Application
import Application  		          from 'Application';

/****************************** ROUTE-COMPONENTS ******************************/
import Home                           from 'route-components/Home';

// import global style libraries
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/application.css';

// polyfill
if (!Object.assign) Object.assign = React.__spread;

export default class Root extends Component {
    static propTypes = {
        history: React.PropTypes.object.isRequired
    };

    render() {
        const {history} = this.props;

        return (
            <Router history={history}>
                <Route name='app' path='/' component={Application}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        );
    }
};
