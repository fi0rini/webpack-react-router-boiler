import React, { Component, PropTypes } from "react";
import Navigator from 'components/Navigator';

export default class Application extends Component {
    static propTypes = {
        children: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div>
                { this.props.children }
		    </div>
        );
	}
}
