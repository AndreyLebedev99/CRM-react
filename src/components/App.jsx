import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import './../assets/css/bootstrap.min.css'
import './../assets/css/main.css'
import Navbar from "./Navbar";
import FormPage from "./FormPage";
import TablePage from "./TablePage";
import EditPage from "./EditPage";

export const AppContext = createContext(null)

const App = () => {
	const [filter, setFilter] = useState({ productVal: 'all', statusVal: 'all' })

	useEffect(() => {
		if (localStorage.getItem('filter')) {
			setFilter(JSON.parse(localStorage.getItem('filter')))
		} else {
			localStorage.setItem('filter', JSON.stringify(filter))
			setFilter(filter)
		}
	}, [])

	const filterProduct = (name, value) => {
		setFilter(() => {
			const newFilter = { ...filter, [name]: value }
			localStorage.setItem('filter', JSON.stringify(newFilter))
			return newFilter
		})
	}

	return (
		<AppContext.Provider value={{filter, setFilter, filterProduct}}>
			<Router >
				<Navbar />
				<Routes >
					<Route path="/" element={<FormPage />} />
					<Route path="/table" element={<TablePage />} />
					<Route path="/edit/:id" element={<EditPage />} />
				</Routes>
			</Router>
		</AppContext.Provider>
	);
}

export default App;