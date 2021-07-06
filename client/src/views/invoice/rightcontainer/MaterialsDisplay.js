import React, {Component} from 'react'
import * as FaIcons from 'react-icons/fa'
import './DetailsDisplay.css'

class MaterialsDisplay extends Component {
	render() {
		const {data, handleDelete} = this.props
		const materialList = data.map((elem, i) => {
			return(
				<tr key={i}>
					<td>{elem.item}</td>
					<td>{elem.cost}</td>
					<td>{elem.count}</td>
					<td>{elem.total}</td>
					<td><FaIcons.FaTrash 
							onClick={()=> handleDelete(elem, 'materials')}
						/></td>
				</tr>
			)
		})

		return(
			<div>
				<table id='detail-display'>
					<tr>
						<th>Item</th>
						<th>Cost</th>
						<th>Count</th>
						<th>Line Total</th>
					</tr>
					{materialList}
				</table>
			</div>
		)
	}
}
export default MaterialsDisplay
