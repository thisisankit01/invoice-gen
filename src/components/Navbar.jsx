import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
	const itemsNumber = useSelector((state) => state.invoice.invoices)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white border border-slate-500 rounded-3 my-4">
			<div className="container-fluid px-4">
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand fs-4 fw-bold">
						Invoice Store
					</span>
				</Link>
				<Link to="/invoice">
					<button
						type="button"
						className="btn btn-primary position-relative"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-file-earmark-fill"
							viewBox="0 0 16 16"
						>
							<path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
						</svg>
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{itemsNumber && itemsNumber.length}
							<span className="visually-hidden">
								unread messages
							</span>
						</span>
					</button>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
