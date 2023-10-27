import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button, Form } from 'react-bootstrap'

const EditableFormStore = ({ showModal, closeModal, info, items, currency, subTotal, taxAmount, discountAmount, total, handleSave }) => {
	const [billTo, setBillTo] = useState(info.billTo || '')
	const [billToAddress, setBillToAddress] = useState(info.billToAddress || '')
	const [billToEmail, setBillToEmail] = useState(info.billToEmail || '')
	const [billFrom, setBillFrom] = useState(info.billFrom || '')
	const [billFromAddress, setBillFromAddress] = useState(info.billFromAddress || '')
	const [billFromEmail, setBillFromEmail] = useState(info.billFromEmail || '')

	const onSaveChanges = () => {
		const updatedItem = {
			...info,
			billTo,
			billToAddress,
			billToEmail,
			billFrom,
			billFromAddress,
			billFromEmail
		}
		handleSave(updatedItem)
	}

	return (
		<Modal show={showModal} onHide={closeModal} size="lg" centered>
			<Modal.Header closeButton>
				<Modal.Title>Edit Invoice</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="billTo">
						<Form.Label>Billed to:</Form.Label>
						<Form.Control type="text" value={billTo} onChange={(e) => setBillTo(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="billToAddress">
						<Form.Label>Billed to Address:</Form.Label>
						<Form.Control type="text" value={billToAddress} onChange={(e) => setBillToAddress(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="billToEmail">
						<Form.Label>Billed to Email:</Form.Label>
						<Form.Control type="email" value={billToEmail} onChange={(e) => setBillToEmail(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="billFrom">
						<Form.Label>Billed From:</Form.Label>
						<Form.Control type="text" value={billFrom} onChange={(e) => setBillFrom(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="billFromAddress">
						<Form.Label>Billed From Address:</Form.Label>
						<Form.Control type="text" value={billFromAddress} onChange={(e) => setBillFromAddress(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="billFromEmail">
						<Form.Label>Billed From Email:</Form.Label>
						<Form.Control type="email" value={billFromEmail} onChange={(e) => setBillFromEmail(e.target.value)} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={closeModal}>
					Close
				</Button>
				<Button variant="primary" onClick={onSaveChanges}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default EditableFormStore
