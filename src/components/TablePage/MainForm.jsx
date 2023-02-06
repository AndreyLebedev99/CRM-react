import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Form = () => {

	const { filter, filterProduct } = useContext(AppContext)

	return (
		<form action="">
			<div className="row mb-3 justify-content-start">

				<div className="col">
					<div id="topStatusBar" className="btn-group" role="group" aria-label="..."
						onClick={(e) => {
							filterProduct('statusVal', e.target.dataset.value)
						}}
					>
						<Link to='' className={`btn btn-light ${filter.statusVal === 'all' ? 'active' : ''}`} data-value="all">Все</Link>
						<Link to='' className={`btn btn-light ${filter.statusVal === 'new' ? 'active' : ''}`} data-value="new">Новые</Link>
						<Link to='' className={`btn btn-light ${filter.statusVal === 'inwork' ? 'active' : ''}`} data-value="inwork">В работе</Link>
						<Link to='' className={`btn btn-light ${filter.statusVal === 'complete' ? 'active' : ''}`} data-value="complete">Завершенные</Link>
					</div>
				</div>
				<div className="col">
					<select className="custom-select" id="productSelect" onChange={(e) => {
						filterProduct('productVal', e.target.value)
					}}
						value={filter.productVal}
					>
						<option value="all">Все продукты</option>
						<option value="course-html">Курс по верстке</option>
						<option value="course-js">Курс по JavaScript</option>
						<option value="course-vue">Курс по VUE JS</option>
						<option value="course-php">Курс по PHP</option>
						<option value="course-wordpress">Курс по WordPress</option>
					</select>
				</div>
			</div>
		</form>
	);
}

export default Form;