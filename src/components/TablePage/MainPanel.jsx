import Form from "./MainForm";
import Product from "./Product";

const MainPanel = ({ newRequests, isLoading, error}) => {

	const productsTitle = {
		'course-html': 'Курс по верстке',
		'course-js': 'Курс по JavaScript',
		'course-vue': 'Курс по Vue JS',
		'course-php': 'Курс по PHP',
		'course-wordpress': 'Курс по WordPress'
	}

	const statuses = {
		'new': 'Новый',
		'inwork': 'В работе',
		'complete': 'Завершена'
	}

	const products = () => {
		if (newRequests) {
			return newRequests.map((item) => {
				return <Product
					product={item}
					key={item.id}
					productsTitle={productsTitle[item.product]}
					statuses={statuses}
				/>
			})
		}
	}

	return (
		<div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>

				<Form />

				<table className="table fs-14">
					<thead>
						<tr>
							<th>ID</th>
							<th>дата</th>
							<th>продукт</th>
							<th>имя</th>
							<th>email</th>
							<th>телефон</th>
							<th>статус</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tbody">
						{error && <tr><td>{error}</td></tr>}
						{isLoading && <tr><td>Loading...</td></tr>}
						{newRequests && products()}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default MainPanel;