import React, {Component} from 'react'
import InvoiceCustInfo from './InvoiceCustInfo'
import CreateDetails from './CreateDetails'
import './InvoiceLeftContainer.css'

class InvoiceLeftContainer extends Component {	
	render() {
		const {unit, po, handleChange} = this.props

		return(
			<div id='left-container'>
				<InvoiceCustInfo 
					unit={unit}
					po={po}
					handleChange={handleChange}
				/>
				<CreateDetails />

			</div>
		)
	}
}
export default InvoiceLeftContainer
