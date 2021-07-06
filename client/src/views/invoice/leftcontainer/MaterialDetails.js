import React, {Component} from 'react'

class MaterialDetails extends Component {
	render() {
		const {handleChange, detailClick} = this.props
		const {item, count, cost} = this.props.state

		return(
			<main>
				<form>
					<label>Item</label><br/>
					<input
						name='item'
						type='text'
						value={item}
						onChange={handleChange}
					/><br/>
					<label>Count</label><br/>
					<input
						name='count'
						type='text'
						value={count}
						onChange={handleChange}
					/><br/>
					<label>Cost</label><br/>
					<input
						name='cost'
						type='text'
						value={cost}
						onChange={handleChange}
					/><br/>
					<button
						name='material-button'
						onClick={detailClick}
					>Add</button>
				</form>
			</main>
		)
	}
}
export default MaterialDetails
