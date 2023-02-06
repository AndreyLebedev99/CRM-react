import { Link } from 'react-router-dom'

const Product = (item) => {
	const { id, name, phone, email, status, dateDate } = item.product

	const statusClass = {
		"new": "badge-danger",
		'inwork': 'badge-warning',
		'complete': 'badge-success'
	}

	return (

		<tr>
			<th scope="row">{id}</th>
			<td>{dateDate}</td>
			<td>{item.productsTitle}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>{phone}</td>
			<td>
				<div className={`badge badge-pill ${statusClass[status]}`}>{item.statuses[status]}</div>
			</td>
			<td>
				<Link to={`/edit/${id}`}>Редактировать</Link>
			</td>
		</tr>
	);
}

export default Product;