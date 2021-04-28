import React, {Component} from 'react'
import axios from 'axios'

class Contacts extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			isLoading: false
		}
	}

	componentDidMount() {
		this.setState({isLoading: true})
		axios.get('api/get/allusers')
			.then(res => this.setState({data: res.data}))
		this.setState({isLoading: false})
	}

	render() {
		const users = this.state.data.map((elem)=> {
			return(
				<h2 key={elem.user_id}>
					{elem.name} {elem.email}
				</h2>
			)	
		})
		return (
			<div className='contacts'>
				{users}			
			</div>
		)
	}
}

export default Contacts
