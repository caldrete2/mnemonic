import React from 'react'
import {BrowserRouter as Router,
		Switch,
		Route
} from 'react-router-dom'
import Navbar from './views/navbar/Navbar'
import './App.css'
import Contacts from './views/Contacts'
import History from './views/History'
import OpenInvoice from './views/OpenInvoice'
import Profile from './views/Profile'
import UserInfo from './views/UserInfo'

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
					<Route path='/userInfo' component={UserInfo} />
				</Switch>
			</Router>
		</>
	)
}

export default App
