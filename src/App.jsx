import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InvoiceForm from './components/InvoiceForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InvoiceStore from './pages/InvoiceStore'
import { Container } from 'react-bootstrap'

class App extends Component {
	render() {
		return (
			<Container>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<InvoiceForm />}></Route>
						<Route
							path="/invoice"
							element={<InvoiceStore />}
						></Route>
					</Routes>
				</BrowserRouter>
			</Container>
		)
	}
}

export default App
