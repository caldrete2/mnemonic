import React, {Component} from 'react'
import LeftContainer from './leftcontainer/InvoiceLeftContainer'
import RightContainer from './rightcontainer/InvoiceRightContainer'
import './CreateInvoice.css'

class CreateInvoice extends Component {
	constructor() {
		super()
		this.state = {
			unit: '',
			po: '',
			desc: '',
			rate: '',
			qty: '',
			material: '',
			count: '',
			cost: '',
			labor: '',
			details: [],
			mdata: []	
		}

		this.handleChange = this.handleChange.bind(this)
		this.buttonClick = this.buttonClick.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleDelete(elem, a) {
		const {details, mdata} = this.state
		if(a==='details') {
			let i = details.indexOf(elem)
			if(i > -1) { details.splice(i,1) }
			this.setState({details: details})
		} else {

		}
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({ [name]: value })
	}

	buttonClick(event) {
		event.preventDefault()
		const {desc, rate, qty, details, cost, count, mdata, material} = this.state
		const {name} = event.target
		const dObj = {desc: desc, rate: rate, qty: qty, total: '0.00'}
		const mObj = {material: material, cost: cost, count: count, total: '0.00'}	

		if(name==='detail-button') {
			let temp = details.concat(dObj)
			this.setState({ details: temp, desc: '', qty: '', rate: ''  })
		} else {
			let temp = mdata.concat(mObj)
			this.setState({ mdata: temp, count: '', cost: '', material: '' })
		}
	}

	render() {
		const {unit, po, mdata, details} = this.state
		return(
			<div id='invoice-container'>
				<LeftContainer 
					state={this.state}
					handleChange={this.handleChange}
					detailClick={this.buttonClick}
				/>				
				<RightContainer
					state={this.props.location.state}
					unit={unit}
					po={po}
					details={details}
					materials={mdata}
					handleDelete={this.handleDelete}
				 />
			</div>
		)
	}
}
export default CreateInvoice
