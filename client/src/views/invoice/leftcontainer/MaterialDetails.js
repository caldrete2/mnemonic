import React, {Component} from 'react'

class MaterialDetails extends Component {
	render() {
		const {handleChange, detailClick} = this.props
		const {material, count, cost} = this.props.state

		return(
			<main>
				<form>
					<label>Material</label><br/>
					<input
						name='material'
						type='text'
						value={material}
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
