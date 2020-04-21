import React from "react";
import Basic from "../components/Basic";
import Contacts from "../components/Contacts";
import Avatar from "../components/Avatar";
import Finish from "../components/Finish";
import Steps from "../components/Steps";
import Buttons from "../components/Buttons";

const extraState = {
	currentStep: 2,
	values: {
		firstname: "",
		lastname: "",
		password: "",
		repeatPassword: "",
		gender: "male",
		email: "",
		mobile: "",
		country: "",
		city: "",
		avatar: "",
	},
	errors: {},
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = extraState;
	}

	onChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		const values = { ...this.state.values };
		values[name] = value;
		this.setState({
			values,
		});
	};

	onNext = (event) => {
		event.preventDefault();
		const validate = this.validate();
		if (Object.keys(validate).length) {
			this.setState({
				errors: validate,
			});
		} else {
			this.setState((prevState) => ({
				currentStep: prevState.currentStep + 1,
				errors: {},
			}));
		}
	};
	onPrevious = (event) => {
		event.preventDefault();
		this.setState((prevState) => ({
			currentStep: prevState.currentStep - 1,
		}));
	};
	onReset = (event) => {
		event.preventDefault();
		this.setState({
			...extraState,
		});
	};
	validate = () => {
		const { currentStep, values } = this.state;
		const errors = {};
		if (currentStep === 1) {
			if (values.firstname.length < 5) {
				errors.firstname = "Required";
			}
			if (values.lastname.length < 5) {
				errors.lastname = "Required";
			}
			if (!values.password) {
				errors.password = "Required";
			}
			if (values.repeatPassword !== values.password) {
				errors.repeatPassword = "Must be equal password";
			}
		}
		if (currentStep === 2) {
			if (!values.email.includes("@")) {
				errors.email = "Required";
			}
			if (values.mobile.length < 5) {
				errors.mobile = "Invalid mobile ";
			}
			if (!values.city) {
				errors.city = "Required";
			}
			if (!values.country) {
				errors.country = "Required";
			}
		}
		if (currentStep === 3) {
			if (!values.avatar) {
				errors.avatar = "Required";
			}
		}
		return errors;
	};

	render() {
		return (
			<div className="form-container card">
				<form className="form card-body">
					<Steps currentStep={this.state.currentStep} />
					{this.state.currentStep === 1 ? (
						<Basic
							values={this.state.values}
							onChange={this.onChange}
							errors={this.state.errors}
						/>
					) : this.state.currentStep === 2 ? (
						<Contacts
							values={this.state.values}
							onChange={this.onChange}
							errors={this.state.errors}
						/>
					) : this.state.currentStep === 3 ? (
						<Avatar
							values={this.state.values}
							onChange={this.onChange}
							errors={this.state.errors}
						/>
					) : (
						<Finish values={this.state.values} />
					)}
					<Buttons
						onNext={this.onNext}
						onPrevious={this.onPrevious}
						onReset={this.onReset}
						currentStep={this.state.currentStep}
					/>
				</form>
			</div>
		);
	}
}
