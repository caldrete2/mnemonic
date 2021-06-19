import React, {Component} from 'react'

class InvoiceCustInfo extends Component {
	render() {
		const {unit, po} = this.props.state
		const {handleChange} = this.props
		
		return(
			<main>
				<form>
					<label>Unit</label><br/>
					<input 
						name='unit'
						type='text'
						value={unit}
						onChange={handleChange}
					/><br/>
					<label>PO #</label><br/>
					<input
						name='po'
						type='text'
						value={po}
						onChange={handleChange}
					/>
				</form>
			</main>
		)
	}
}
export default InvoiceCustInfo
