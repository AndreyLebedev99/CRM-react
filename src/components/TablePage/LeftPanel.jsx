import { useState, useEffect } from 'react';
import { serverPath } from "../../helpers/variables";
import avatar from './../../img/avatar-128.jpg'
import { updateActiveStatusLinkc } from './updateActiveStatusLinkc';

const LeftPanel = ({filter, filterProduct}) => {

	const [number, setNumber] = useState()

	useEffect(() => {
		fetch(serverPath + 'requests')
			.then(res => res.json())
			.then(data => {
				setNumber(data.filter(item => item.status === 'new').length)
			})
	}, [filter])	

	const filteredProduct = (value) => {
		const leftStatusBar = Array.from(document.querySelectorAll('.left-panel__navigation li a'))
		leftStatusBar.forEach((link) => {
			link.classList.remove('active')
			if (link.dataset.value === value) link.classList.add('active')
		})
	}

	filteredProduct(filter.statusVal)

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
					updateActiveStatusLinkc(e.target.dataset.value)
					filterProduct('statusVal', e.target.dataset.value)
				}}
			>
				<div className="left-panel__navigation-title">Заявки</div>
				<ul>
					<li><a data-value="all" data-role="left-status" href="#" >Все вместе</a></li>
					<li><a data-value="new" data-role="left-status" href="#" >Новые<div className="badge" id="badge-new">
						{number}
					</div></a></li>
					<li><a data-value="inwork" data-role="left-status" href="#">В работе</a></li>
					<li><a data-value="complete" data-role="left-status" href="#">Завершенные</a></li>
				</ul>
			</div>
		</div>
	);
}

export default LeftPanel;