import React from 'react'
import {BrowserRouter as Router,
		Switch,
		Route
} from 'react-router-dom'
import Navbar from './views/navbar/Navbar'
import './App.css'
import Contacts from './views/contact/Contacts'
import History from './views/History'
import OpenInvoice from './views/OpenInvoice'
import Profile from './views/Profile'
import EditContact from './views/contact/EditContact'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/contacts' component={Contacts} />	
					<Route path='/openInvoice' component={OpenInvoice} />
					<Route path='/history' component={History} />
					<Route path='/profile' component={Profile} />
					<Route path='/editContact' component={EditContact} />
				</Switch>
			</Router>
		</>
	)
}

export default App
