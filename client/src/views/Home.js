import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
	constructor() {
		super()
		this.state = {
			data: ""
		}
	}

	componentDidMount() {
		axios.get('api/hello')
			.then(res => this.setState({data: res.data}))
	}

	render() {
		return (
			<div>
				<h2>{this.state.data}</h2>
			</div>
		)
	}
}

export default Home
