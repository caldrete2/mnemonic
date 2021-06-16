import React, {Component} from 'react'
import CreateDetails from './CreateDetails'
import InvoiceDetails from './InvoiceDetails'
import './CreateInvoice.css'

class CreateInvoice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			details: [],
			totalDue: '',
			desc: '',
			rate: '',
			qty: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleAddDetail = this.handleAddDetail.bind(this)
	}

	componentDidMount() {
		this.setState({
			data: this.props.location.state
		})
	}

	handleAddDetail(event) {
		const {details, desc, rate, qty} = this.state
		const dObj = {}
		
		dObj.desc = desc
		dObj.rate = rate
		dObj.qty = qty
		
		const dTemp = details.concat(dObj)
		this.setState({
			details: dTemp,
			desc: '',
			rate: '',
			qty: ''	
		})
	}

	handleChange(event) {
		const {name, value} = event.target
		this.setState({
			[name]: value	
		})
	}

	render() {
		const {data, desc, rate, qty, details} = this.state
		return(
			<div>
				<div className='invoiceContainer'>
					<div>
						<CreateDetails 
							desc={desc}
							rate={rate}
							qty={qty}
							handleChange={this.handleChange}/>
						<button 
							onClick={this.handleAddDetail}
						>Add</button>
					</div>
					<div className='invoiceInfo'>
						<div className='contactInfo'>
							<h3>{data.name}</h3>
							<p>{data.email}</p>
							<p>{data.phone}</p>
							<p>{data.street}</p>
							<p>{data.city}, {data.state}</p>
						</div>
						<InvoiceDetails details={details}/>

					</div>
				</div>
			</div>
		)
	}

}
export default CreateInvoice
