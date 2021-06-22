import React, {Component} from 'react'
import User from './UserDisplay'
import Details from './DetailsDisplay'
import './InvoiceRightContainer.css'

class InvoiceRightContainer extends Component {
	constructor() {
		super()
		this.state = {}
	}
	
	render() {
		const {state, unit, po, materials, details} = this.props

		return(
			<div id='right-container'>
				<User 
					state={state} 
					unit={unit}
					po={po}
				/>
				<Details data={details}/>
			</div>
		)
	}
}
export default InvoiceRightContainer
