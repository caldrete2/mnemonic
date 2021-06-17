import React, {Component} from 'react'

class DisplayDetails extends Component {
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
					<td>{elem.desc}</td>
					<td>{elem.rate}</td>
					<td>{elem.qty}</td>
				</tr>
			)	
		})

		return (
			<div>
				<table>
					<tr>
						<th>Details</th>
					</tr>
					{detailsList}
				</table>
			</div>
		)
	}
}
export default DisplayDetails
