import { updateActiveStatusLinkc } from "./updateActiveStatusLinkc";


const Form = ( {filter, filterProduct}) => {

	const filteredProduct = (value) => {
		const topStatusBar = Array.from(document.querySelectorAll('a.btn.btn-light'))
		topStatusBar.forEach((link) => {
			link.classList.remove('active')
			if (link.dataset.value === value) link.classList.add('active')
		})
	}
	
	filteredProduct(filter.statusVal)
	return (
		<form action="">
			<div className="row mb-3 justify-content-start">

				<div className="col">
					<div id="topStatusBar" className="btn-group" role="group" aria-label="..."
						onClick={(e) => {
							updateActiveStatusLinkc(e.target.dataset.value)
							filterProduct('statusVal' ,e.target.dataset.value)
						}}
					>
						<a href="#" className="btn btn-light" data-value="all">Все</a>
						<a href="#" className="btn btn-light" data-value="new">Новые</a>
						<a href="#" className="btn btn-light" data-value="inwork">В работе</a>
						<a href="#" className="btn btn-light" data-value="complete">Завершенные</a>
					</div>
				</div>
				<div className="col">
					<select className="custom-select" id="productSelect" onChange={(e)=>{
						filterProduct('productVal', e.target.value)}}
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