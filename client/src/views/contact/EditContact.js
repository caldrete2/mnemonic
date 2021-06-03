import React, {Component} from 'react'
import axios from 'axios'

class EditContact extends Component {
	constructor() {
		super()
		this.state = {
			data: []
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState(pState => {
			return {
				data: {
					...pState.data,
					[name]: value	
				}
			}
		})
	}
	
	componentDidMount() {
		this.setState({
			data: this.props.location.state	
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		const {data} = this.state
		console.log(data)
		axios.post('api/post/contact', data)
			.then(res => console.log(res, data)) 
			.catch((err) => console.log(err))
	
	}

	render() {
		const {data} = this.state
		console.log(data)
		const temp = Object.entries(data)
		const contactForm = temp.map((elem, i) => {
			return i!==0 && i!==1? (
					<div key={i}>
						<input
							type='text'
							name={elem[0]}
							value={elem[1]}
							placeholder={elem[0]}
							onChange={this.handleChange}
						/><br/>
					</div>
				) : null
		})

		return(
			<main>
				<form>
					{contactForm}
					<button 
						type='submit'
						onClick={this.handleSubmit}
					> Submit </button>		
				</form>
			</main>
		)
	}
}

export default EditContact