// import  { useContext, useRef, useState } from "react";
// import axios from "./axiosConfig";
// import {  useNavigate } from "react-router-dom";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { FaRegEye } from "react-icons/fa6";
// import { AppState } from "../App";
import './registration.css'
function Registrations() {
	
	// function to handle the user registretion
	
	return (
		<div>
			<div className="regiterWrapper">
				<form>
					<section className="inputss">
						{/* alerting messages for users */}
						{/* {alert && <div className="alerts">{alert}</div>}
						{error && <div className="alerts">{error}</div>} */}
						{/* {createdMessage && <div className="alerts">{createdMessage}</div>}
						{errorCatch && <div className="alerts">{errorCatch}</div>} */}
						<input type="text" placeholder="User name" />
						<div className="fifty">
							<input
								type="text"
								placeholder="First name"
								className="p-l"
							/>

							<input
								className="p-r"
								type="text"
								name=""
								placeholder="Last name"
							/>
						</div>

						<input type="email"  placeholder="Email address" />

						<div className="password">
							<input
								// type={showPassword ? "text" : "password"}
								placeholder="password"
							/>
							{/* <span onClick={togglePasswordVisibility}>
								{showPassword ? (
									<FaRegEye className="eye" />
								) : (
									<FaRegEyeSlash className="eye" />
								)}
							</span> */}
						</div>
						<div className="lastones">
							<span className="terms">
								I agree to the <a className="onhover">privacy policy</a> and
								<a className="onhover">terms of service</a>.
							</span>
							<button className="agree">Agree and Join</button>
						</div>
					</section>
				</form>
			</div>
		</div>
	);
}

export default Registrations
