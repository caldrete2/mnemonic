import React, {Component} from 'react'
import User from './UserDisplay'
import Details from './DetailsDisplay'
import Materials from './MaterialsDisplay'
import './InvoiceRightContainer.css'

class InvoiceRightContainer extends Component {
	render() {
		const {user, state, handleDelete} = this.props
		const {unit, po, details, mdata, labor} = state

		return(
			<div id='right-container'>
				<User 
					state={user} 
					unit={unit}
					po={po}
				/><br/>
				<Details 
					data={details}
					handleDelete={handleDelete}
				/>
				<Materials 
					data={mdata}
					handleDelete={handleDelete}
				/>
				<div id='labor-container'>
					<b><label>Labor</label></b><br/>
					<p>${labor}</p>
				</div>
			</div>
		)
	}
}
export default InvoiceRightContainer
