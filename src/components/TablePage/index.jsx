import { useContext, useEffect, useState } from "react";
import { serverPath } from "../../helpers/variables";
import { AppContext } from "../App";
import { bodyStyle } from "./bodyStyle";
import LeftPanel from "./LeftPanel";
import MainPanel from "./MainPanel";

const TablePage = () => {
	bodyStyle()

	const {filter} = useContext(AppContext)
	const [newRequests, setNewRequests] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(`${serverPath}requests?
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

	return (
		<>
			<LeftPanel/>
			<MainPanel newRequests={newRequests} isLoading={isLoading} error={error}/>
		</>
	);
}

export default TablePage;