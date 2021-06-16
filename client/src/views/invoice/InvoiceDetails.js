import React, {Component} from 'react'
import './InvoiceDetails.css'

class InvoiceDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
		
		}
	}

	render() {
		const {details} = this.props
		const detailsList = details.map((elem, i) => {
			return (	
				<tr key={i}>
					<th>{elem.desc}</th>
					<th>{elem.rate}</th>
					<th>{elem.qty}</th>
					<th>0.00</th>
				</tr>
			)
		})

		return (
			<div className='details-container'>
				<table id='invoice-table'>
					<tr>
						<th>Description</th>
						<th>Rate</th>
						<th>Qty</th>
						<th>Line Total</th>
					</tr>
					{detailsList}
				</table>
			</div>
		)
	}

}

export default InvoiceDetails
