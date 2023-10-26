import { createSlice } from '@reduxjs/toolkit'

const STATUSES = Object.freeze({
	IDLE: 'idle',
	ERROR: 'error',
	LOADING: 'loading'
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
				invoices: state.invoices.filter(
					(invoice) => invoice.id !== action.payload.id
				)
			}
		}
	}
})

export const { add, remove } = invoiceSlice.actions
export default invoiceSlice.reducer
