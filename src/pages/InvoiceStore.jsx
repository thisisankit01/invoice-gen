import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/invoiceSlice'
import { useState } from 'react'
import { BiEdit, BiEnvelopeOpen, BiTrash } from 'react-icons/bi'
import InvoiceModal from '../components/InvoiceModal'
import EditableFormStore from '../components/EditableFormStore'
import { update } from '../store/invoiceSlice'

const InvoiceStore = () => {
	const productsFromStore = useSelector((state) => state.invoice.invoices)
	const [selectedItem, setSelectedItem] = useState(null)
	const [products, setProducts] = useState(productsFromStore)
	const [openViewModal, setOpenViewModal] = useState(false)
	const [openEditModal, setOpenEditModal] = useState(false)
	const dispatch = useDispatch()

	const handleSave = (updatedItem) => {
		dispatch(update(updatedItem))
		const updatedProducts = products.map((item) => {
			if (item.id === updatedItem.id) {
				return updatedItem
			}
			return item
		})
		setProducts(updatedProducts)
		setOpenEditModal(false)
	}

	const handleRemove = (id) => {
		dispatch(remove({ id: id }))
		const updatedProducts = products.filter((item) => item.id !== id)
		setProducts(updatedProducts)
	}

	const closeViewModal = () => {
		setOpenViewModal((prev) => !prev)
	}

	const closeEditModal = () => {
		setOpenEditModal((prev) => !prev)
	}

	const handleEdit = (item) => {
		setSelectedItem(item)
		setOpenEditModal(true)
	}

	console.log(products)

	return (
		<div className="mt-4">
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
				{products &&
					products.map((item) => (
						<div key={item?.id} className="col">
							<div className="card h-100">
								<div className="card-body d-flex flex-column align-items-center justify-content-center">
									<svg xmlns="http://www.w3.org/2000/svg" width={'4rem'} height={'5rem'} fill="currentColor" className="bi bi-file-earmark-text-fill mb-3" viewBox="0 0 16 16">
										<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
									</svg>
									<span className="text-center">{item.items[0]?.name}</span>
									<div className="d-flex gap-2 py-2">
										<BiEnvelopeOpen
											style={{
												height: '33px',
												width: '33px',
												padding: '7.5px'
											}}
											onClick={closeViewModal}
											className="text-white mt-1 btn btn-primary"
										/>
										{openViewModal && (
											<InvoiceModal
												key={item?.id}
												showModal={openViewModal}
												closeModal={closeViewModal}
												info={item}
												items={item?.items}
												currency={item?.currency}
												subTotal={item?.subTotal}
												taxAmmount={item?.taxAmmount}
												discountAmmount={item?.discountAmmount}
												total={item?.total}
											/>
										)}
										<BiEdit
											style={{
												height: '33px',
												width: '33px',
												padding: '7.5px'
											}}
											onClick={() => handleEdit(item?.id)}
											className="text-black mt-1 btn"
										/>
										{openEditModal && (
											<EditableFormStore
												onClick={handleEdit}
												key={item?.id}
												showModal={openEditModal}
												closeModal={closeEditModal}
												info={item}
												items={item?.items}
												currency={item?.currency}
												subTotal={item?.subTotal}
												taxAmmount={item?.taxAmmount}
												discountAmmount={item?.discountAmmount}
												total={item?.total}
												handleSave={handleSave}
											/>
										)}
										<BiTrash
											style={{
												height: '33px',
												width: '33px',
												padding: '7.5px'
											}}
											onClick={() => handleRemove(item?.id)}
											className="text-white mt-1 btn btn-danger"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default InvoiceStore
