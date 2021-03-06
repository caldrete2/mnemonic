import React, {Component} from 'react'

class CreateDetails extends Component {
	render() {
		const {handleChange, detailClick} = this.props
		const {desc, rate, qty} = this.props.state

		return(
			<main>
				<form>
					<label>Description</label><br/>
					<input
						name='desc'
						type='text'
						value={desc}
						onChange={handleChange}
					/><br/>
					<label>Rate</label><br/>
					<input
						name='rate'
						type='text'
						value={rate}
						onChange={handleChange}
					/><br/>
					<label>Qty</label><br/>
					<input
						name='qty'
						type='text'
						value={qty}
						onChange={handleChange}
					/><br/>
					<button
						name='detail-button'
						onClick={detailClick}
					>Add</button>
				</form>
			</main>
		)
	}
}
export default CreateDetails
