import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { serverPath } from "../../helpers/variables";
import avatar from './../../img/avatar-128.jpg'
import { AppContext } from '../App';

const LeftPanel = () => {

	const { filter, filterProduct } = useContext(AppContext)

	const [number, setNumber] = useState()

	useEffect(() => {
		fetch(serverPath + 'requests')
			.then(res => res.json())
			.then(data => {
				setNumber(data.filter(item => item.status === 'new').length)
			})
	}, [])

	return (
		<div className="left-panel blue-skin">
			<div className="left-panel__logo">
				<div className="left-panel__logo-title">CRM заявки</div>
				<div className="left-panel__logo-subtitle">учебный проект webcademy</div>
			</div>
			<div className="left-panel__user clearfix">
				<div className="left-panel__user-photo">
					<img src={avatar} alt="Avatar" />
				</div>
				<div className="left-panel__user-name">Петр <br />Васильевич</div>
			</div>
			<div className="left-panel__navigation"
				onClick={(e) => {
					filterProduct('statusVal', e.target.dataset.value)
				}}>
				<div className="left-panel__navigation-title">Заявки</div>
				<ul>
					<li>
						<Link to='' data-value="all" data-role="left-status" className={filter.statusVal === 'all' ? 'active' : ''}>Все вместе</Link>
					</li>
					<li>
						<Link to='' data-value="new" data-role="left-status" className={filter.statusVal === 'new' ? 'active' : ''}>Новые<div className="badge" id="badge-new">{number}</div></Link>
					</li>
					<li>
						<Link to='' data-value="inwork" data-role="left-status" className={filter.statusVal === 'inwork' ? 'active' : ''}>В работе</Link>
					</li>
					<li>
						<Link to='' data-value="complete" data-role="left-status" className={filter.statusVal === 'complete' ? 'active' : ''}>Завершенные</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftPanel;