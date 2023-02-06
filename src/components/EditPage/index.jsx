import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { bodyStyle } from "./bodyStyle";
import { serverPath } from '../../helpers/variables';

const EditPage = () => {
	bodyStyle()

	const [product, setProduct] = useState(null)
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [productName, setProductName] = useState('')
	const [status, setStatus] = useState('')
	const [dateDate, setDateDate] = useState('')
	const [dateTime, setDateTime] = useState('')
	const navigate = useNavigate()

	useEffect(()=> {
		fetch(serverPath + 'requests/' + id)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setName(data.name)
				setPhone(data.phone)
				setEmail(data.email)
				setProductName(data.product)
				setStatus(data.status)
				setDateDate(data.dateDate)
				setDateTime(data.dateTime)
			})
	}, [])

	const { id } = useParams()

	const deleteProduct = (id) => {
		fetch(serverPath + 'requests/' + id, {
			method: 'DELETE'
		}).then(()=> navigate('/table'))
	}
		
	const handlSubmit = (e) => {
		e.preventDefault()
		const newProduct = {
			...product, id, name, phone, email, product: productName, status
		}

		fetch(serverPath + 'requests/' + id, {
			method: "PUT",// обновить данные
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newProduct)
		}).then(()=> navigate('/table'))
	}

	return (
		<>
			<div className="form-wrapper">
				<div className="container-fluid">

					<div className="row justify-content-between align-items-center">
						<div className="col">
							<div className="admin-heading-1">Работа с заявкой</div>
						</div>
						<div className="col text-right">
							<Link to="/table" className="btn btn-link">Вернуться назад</Link>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<form id="form" onSubmit={handlSubmit}>
								<div className="card mb-4">
									<div className="card-header">Данные о заявке</div>
									<div className="card-body">
										<div className="row mb-3">
											<div className="col-md-2">
												<strong>ID:</strong>
											</div>
											<div className="col">Заявка №<span id="number">{id}</span></div>
											<input name="id" type="hidden" id="id" value={id} />
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Дата создания:</strong>
											</div>
											<div className="col" id="date">{dateDate} {dateTime}</div>
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Продукт:</strong>
											</div>
											<div className="col">
												<select id="product" name="product" className="custom-select"
													onChange={(e) => setProductName(e.target.value)}
													value={productName}
												>
													<option value="course-html">Курс по верстке</option>
													<option value="course-js">Курс по JavaScript</option>
													<option value="course-vue">Курс по VUE JS</option>
													<option value="course-php">Курс по PHP</option>
													<option value="course-wordpress">Курс по WordPress</option>
												</select>
											</div>
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Имя:</strong>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													value={name}
													id="name"
													name="name"
													onChange={(e) => {
														setName(e.target.value)
													}}
												/>
											</div>
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Email:</strong>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													value={email}
													id="email"
													name="email"
													onChange={(e) => setEmail(e.target.value)}
												/>
											</div>
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Телефон:</strong>
											</div>
											<div className="col">
												<input
													type="text"
													className="form-control"
													value={phone}
													id="phone"
													name="phone"
													onChange={(e) => setPhone(e.target.value)}
												/>
											</div>
										</div>

										<div className="row mb-3">
											<div className="col-md-2">
												<strong>Статус заявки:</strong>
											</div>
											<div className="col">
												<select className="custom-select" id="status" name="status"
													onChange={(e) => setStatus(e.target.value)}
													value={status}
												>
													<option value="new">Новый</option>
													<option value="inwork">В работе</option>
													<option value="complete">Завершен</option>
												</select>
											</div>
										</div>
									</div>
								</div>

								<div className="row justify-content-between">
									<div className="col text-right">
										<button type="submit" className="btn btn-primary">Сохранить изменения</button>
										<br />
										<br />
										<button className="btn btn-primary"
											onClick={() => {
												deleteProduct(id)
											}}>Удалить заявку</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EditPage;