import React, {Component} from 'react'
import InvoiceCustInfo from './InvoiceCustInfo'
import CreateDetails from './CreateDetails'
import MaterialDetails from './MaterialDetails'
import './InvoiceLeftContainer.css'

class InvoiceLeftContainer extends Component {	
	render() {
		const {state, handleChange, detailClick} = this.props

		return(
			<div id='left-container'>
				<h3>Customer Info</h3>
				<InvoiceCustInfo 
					state={state}
					handleChange={handleChange}
				/><br/>
				<h3>Details</h3>
				<CreateDetails 
					handleChange={handleChange}
					state={state}
					detailClick={detailClick}
				/><br/>
				<h3>Materials</h3>
				<MaterialDetails
					handleChange={handleChange}
					state={state}
					detailClick={detailClick}
				/><br/>
				<div>
					<h3>Labor</h3>
					<label>Amount</label><br/>
					<input
						name='labor'
						type='text'
						value={state.labor}
						onChange={handleChange}
					/>
				</div>
			</div>
		)
	}
}
export default InvoiceLeftContainer
