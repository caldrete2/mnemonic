import React, {Component} from 'react'

class CreateDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}	
	}

	render() {
		return (
 			<div className='invoiceDetails'>
				<label>Description</label><br/>
				<input 
					onChange={this.props.handleChange}
					name='desc'
					type='text'
					value={this.props.desc}/><br/>
				<label>Rate</label><br/>
				<input 
					onChange={this.props.handleChange}
				    name='rate'
				    type='text'
				    value={this.props.rate}
				/><br/>
				<label>Qty</label><br/>
				<input 
					onChange={this.props.handleChange}
					name='qty'
					type='text'
					value={this.props.qty}
				/><br/>
			</div>
		)
	}
}

export default CreateDetails
