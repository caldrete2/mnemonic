import React, {Component} from 'react'

class DetailsDisplay extends Component {
	render() {
		const {data} = this.props
		const detailList = data.map((elem, i) => {
			return(
				<tr key={i}>
					<td>{elem.desc}</td>
					<td>{elem.rate}</td>
					<td>{elem.qty}</td>
					<td>{elem.total}</td>
				</tr>
			)
		})

		console.log(data)
		return(
			<div>
				<table>
					<tr>
						<th>Description</th>
						<th>Rate</th>
						<th>Qty</th>
						<th>Line Total</th>
					</tr>
					{detailList}
				</table>
			</div>
		)
	}
}
export default DetailsDisplay
