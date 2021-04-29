import React, {Component} from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as SiIcons from 'react-icons/si'
import * as ImIcons from 'react-icons/im'

class Contacts extends Component {
	constructor() {
		super()
		this.state = {
			data: {},
			isLoading: false
		}

		this.modifyData = this.modifyData.bind(this)
	}

	componentDidMount() {
		this.setState({isLoading: true})
		axios.get('api/get/allcontacts')
			.then(res => this.modifyData(res.data))
		this.setState({isLoading: false})
	}

	modifyData(data) {
		var obj = {}

		data.map((elem) => {
			var info = {}, addr = {}
		
			info.phone = elem.phone
			info.email = elem.email
			addr.street = elem.street
			addr.city = elem.city
			addr.stats = elem.state

			if(elem.name in obj) {
				obj[elem.name].addr.push(addr)
			} else {
				obj[elem.name] = {}
				obj[elem.name].info = info
				obj[elem.name].addr = []
				obj[elem.name].addr.push(addr)
			}
		})	
		
		this.setState({data: obj})
	}

	handleMouseOver(event) {
		
	}

	render() {/*
		const contactList = this.state.data.map((elem, i)=> {
			return(
				<div 
					key={i} 
					className='contact'
					onMouseOver={this.handleMouseOver}
				>
					<div><MdIcons.MdEdit/> <FaIcons.FaFileInvoice/></div>
					<div>
						<h4 className='contact-name'>
							<IoIcons.IoIosContact/>{elem.name}</h4>
						<p className='contact-email'>
							<SiIcons.SiMailDotRu/>{elem.email}</p> 
					</div>
				</div>
			)	
		})*/
		console.log(this.state.data)
		return (
			<div className='contacts'>
							
			</div>
		)
	}
}

export default Contacts
