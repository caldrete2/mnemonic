import React, {Component} from 'react'
import axios from 'axios'

class UserInfo extends Component {
	constructor(props) {
		super()
		this.state = {}
	}

	componentDidMount() {
		console.log(this.props.user)
		//axios.get('api/get/userinfo', {params: {user: this.props.name}})
		//	.then(res => console.log(res.data))
	}

	render() {
		console.log(this.props.user)
		return (
			<div>
				<h1>User Info </h1>
			</div>
		)
	}
}

export default UserInfo
