import Form from "./Form";
import { bodyStyle } from "./bodyStyle";

const FormPage = () => {
	bodyStyle()
	return (
		<>
			<div className="white-plate white-plate--payment">
				<div className="container-fluid">
					<div className="white-plate__header text-center">
						<p className="white-plate__logo">
							<span>Форма</span> заявок
						</p>
					</div>

					<div className="white-plate__line-between white-plate__line-between--main"></div>

					<Form />

				</div>
			</div>
		</>
	);
}

export default FormPage;