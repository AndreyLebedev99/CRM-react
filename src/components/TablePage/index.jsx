import { useState, useEffect } from 'react';
import { bodyStyle } from "./bodyStyle";
import { serverPath } from "../../helpers/variables";
import Navbar from "../Navbar";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";


const TablePage = () => {
	bodyStyle()

	const [filter, setFilter] = useState({ productVal: 'all', statusVal: 'all' })
	const [newRequests, setNewRequests] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (localStorage.getItem('filter')) {
			setFilter(JSON.parse(localStorage.getItem('filter')))
		} else {
			localStorage.setItem('filter', JSON.stringify(filter))
			setFilter(filter)
		}
	}, [])

	useEffect(() => {
		fetch(
			`${serverPath}requests?
			${filter.statusVal === 'all' ? '' : `status=${filter.statusVal}`}&
			${filter.productVal === 'all' ? '' : `product=${filter.productVal}`}`
		).then(res => res.json()
		).then(data => {
			setNewRequests(data)
			setLoading(false)
			setError(null)
		}).catch((error) => {
			if (error.name === "AbortError") {
				console.log("fetch aborted");
			} else {
				setError(error.message)
				setLoading(false)
				
			}
		})
	}, [filter])
	
	const filterProduct = (name, value) => {
		setFilter(() => {
			const newFilter = { ...filter, [name]: value }
			localStorage.setItem('filter', JSON.stringify(newFilter))
			return newFilter
		})
	}

	return (
		<>
			<Navbar />

			<LeftPanel filter={filter} filterProduct={filterProduct}/>

			<MainPanel 
			filter={filter} 
			filterProduct={filterProduct} 
			newRequests={newRequests}
			isLoading={isLoading}
			error={error}
			/>
		</>
	);
}

export default TablePage;