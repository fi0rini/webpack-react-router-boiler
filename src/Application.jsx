import React, { Component, PropTypes } from "react";

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
