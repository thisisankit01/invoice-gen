import { createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
	IDLE: 'idle'
})

const initialState = {
	invoices: [],
	status: STATUSES.IDLE
}

const invoiceSlice = createSlice({
	name: 'invoice',
	initialState,
	reducers: {
		add: (state, action) => {
			return {
				...state,
				invoices: [...state.invoices, action.payload]
			}
		},
		remove: (state, action) => {
			return {
				...state,
				invoices: state.invoices.filter((invoice) => invoice.id !== action.payload.id)
			}
		},
		update: (state, action) => {
			return {
				...state,
				invoices: state.invoices.map((invoice) => (invoice.id === action.payload.id ? action.payload : invoice))
			}
		}
	}
})

export const { add, remove, update } = invoiceSlice.actions
export default invoiceSlice.reducer
