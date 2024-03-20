// import  { useContext, useEffect } from "react";
// import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";
// import { AppState } from "../App";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";

// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";

// function Header() {
// 	const navigate= useNavigate()
// 	const { user, setuser } = useContext(AppState);

// 	const logout = () => {
// 		// Clear the user object
// 		setuser(null);

// 		// Clear token from localStorage
// 		localStorage.setItem("token", "");
// 		navigate("/login")
// 	};
// 	  useEffect(() => {
// 			// Check if a token is present in localStorage
// 			const storedToken = localStorage.getItem("token");

// 			if (storedToken) {
// 				// If a token is present, set the user as logged in
// 				setuser({});
// 			} else {
// 				// If no token is present, set the user as logged out
// 				setuser(null);
// 			}
// 		}, [setuser]);


// 		return (
// 			<>
// 				{["md"].map((expand) => (
// 					<Navbar
// 						key={expand}
// 						expand={expand}
// 						className="bg-body-tertiary p-4 fixed-top shadow-sm mb-5"
// 					>
// 						<Container fluid>
// 							<Navbar.Brand>
// 								<Link className="navbar-brand" to={"/"}>
// 									<img
// 							className="evangadiImage"
// 								src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
// 							alt="evangadi logo"
// 							/>
// 								</Link>
// 							</Navbar.Brand>
// 							<Navbar.Toggle
// 								aria-controls={`offcanvasNavbar-expand-${expand}`}
// 							/>
// 							<Navbar.Offcanvas
// 								id={`offcanvasNavbar-expand-${expand}`}
// 								aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
// 								placement="end"
// 							>
// 								<Offcanvas.Header closeButton>
// 									<Offcanvas.Title
// 										id={`offcanvasNavbarLabel-expand-${expand}`}
// 									></Offcanvas.Title>
// 								</Offcanvas.Header>
// 								<Offcanvas.Body>
// 									<Nav className="justify-content-end flex-grow-1 pe-3">
// 										<Nav.Link>
// 											<div
// 												onClick={() =>
// 									user ? navigate("/home") : navigate("/login")
// 								}
// 											>
												
// 												Home
// 											</div>
// 										</Nav.Link>
// 										<Nav.Link href="#">
											
// 											<Link className="links">How it works</Link>
// 										</Nav.Link>
// 										<Nav.Link>
// 											<div className="connect-block btn-blue">
// 												{user ? (
// 									<span onClick={logout} className="tomblue">
// 										LOG OUT
// 									</span>
// 								) : (
// 									<Link to="/login">
// 										<span className="tomblue">SIGN IN</span>
// 									</Link>
// 								)}
// 											</div>
// 										</Nav.Link>
// 									</Nav>
// 								</Offcanvas.Body>
// 							</Navbar.Offcanvas>
// 						</Container>
// 					</Navbar>
// 				))}
// 			</>
// 		);
// }


// export default Header;
