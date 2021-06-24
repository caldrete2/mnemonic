import React, {Component} from 'react'
import User from './UserDisplay'
import Details from './DetailsDisplay'
import './InvoiceRightContainer.css'

class InvoiceRightContainer extends Component {
	render() {
		const {state, unit, po, materials, details, handleDelete} = this.props

		return(
			<div id='right-container'>
				<User 
					state={state} 
					unit={unit}
					po={po}
				/><br/>
				<Details 
					data={details}
					handleDelete={handleDelete}/>
			</div>
		)
	}
}
export default InvoiceRightContainer
