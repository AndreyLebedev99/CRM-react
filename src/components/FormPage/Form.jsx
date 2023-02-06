import { useState } from "react";
import { serverPath } from "../../helpers/variables";
import { getRandomExample } from "./testData";

const Form = () => {

	let randomExample = getRandomExample()

	const [name, setName] = useState(randomExample.name)
	const [phone, setPhone] = useState(randomExample.phone)
	const [email, setEmail] = useState(randomExample.email)
	const [product, setProduct] = useState(randomExample.product)
	const status = 'new'

	const changeExample = () => {
		randomExample = getRandomExample()
		setName(randomExample.name)
		setPhone(randomExample.phone)
		setEmail(randomExample.email)
		setProduct(randomExample.product)
	}

	const handlSubmit = (e) => {
		e.preventDefault()

		const date = new Date().toISOString()
		let request = {
			name, phone, email, product, status, date,
			dateDate: new Date(date).toLocaleDateString(),
			dateTime: new Date(date).toLocaleTimeString()
		}

		fetch(serverPath + 'requests', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(request)
		}).then(() => changeExample())
		.catch(err=>alert(err.message))
	}

	return (
		<form id="form" method="post" action="" onSubmit={handlSubmit}>
			<label>Ваши данные:</label>
			<div className="form-group">
				<input id="name" type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия" required
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			</div>
			<div className="form-group">
				<input id="phone" type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон"
					onChange={(e) => setPhone(e.target.value)}
					value={phone} />
			</div>
			<div className="form-group">
				<input id="email" type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required
					onChange={(e) => setEmail(e.target.value)}
					value={email} />
			</div>
			<div className="form-group">
				<label htmlFor="exampleFormControlSelect1">Продукт:</label>
				<select id="product" name="product" className="form-control"
					onChange={(e) => setProduct(e.target.value)}
					value={product}
				>
					<option value="course-html">Курс по верстке</option>
					<option value="course-js">Курс по JavaScript</option>
					<option value="course-vue">Курс по VUE JS</option>
					<option value="course-php">Курс по PHP</option>
					<option value="course-wordpress">Курс по WordPress</option>
				</select>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-lg btn-primary btn-block"
				>Оформить заявку</button>
			</div>
		</form>
	);
}

export default Form;

