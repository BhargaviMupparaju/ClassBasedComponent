import User from "./User";
import { Component } from "react";
import classes from "./Users.module.css";

class Users extends Component {
	constructor() {
		super();
		this.state = {
			showUsers: true,
		}; // Here in class based components we will intialize the state in constructor. and the state should always be an object.
	}

  componentDidUpdate(){

    if(this.props.users.length===0){
      throw new Error('No users provided!');
    }
  }

	toggleUsersHandler() {
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		}); // Here we use setState method to update the state. and setState will consider the object as parameter. it will not
		// override the object but just update the previous state)
	}




	render() {
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>{this.state.showUsers ? "Hide" : "Show"} Users</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

export default Users;

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };
