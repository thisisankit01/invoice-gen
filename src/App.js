import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InvoiceForm from './components/InvoiceForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InvoiceStore from './pages/InvoiceStore'

class App extends Component {
	render() {
		return (
			<div className="App d-flex flex-column align-items-center justify-content-center w-100">
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
			</div>
		)
	}
}

export default App
