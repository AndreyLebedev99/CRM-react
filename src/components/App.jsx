import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./EditPage";
import FormPage from "./FormPage";
import TablePage from "./TablePage";
import './bootstrap.min.css'
import './main.css'


const App = () => {
	return (
		<Router >
			<Routes >
				<Route path="/" element={<FormPage />}></Route>
				<Route path="/table" element={<TablePage />}></Route>
				<Route path="/edit/:id" element={<EditPage />}></Route>
			</Routes>
		</Router>

	);
}

export default App;