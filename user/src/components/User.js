import classes from "./User.module.css";
import { Component } from "react";

class User extends Component {
	render() {
		// render method is equivalent to the return statement. whenver the component is need to be used in the jsx code it will check for the render method.
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

// const User = (props) => {
// 	return <li className={classes.user}>{props.name}</li>;
// };

export default User;
