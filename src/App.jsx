import axios from "axios";
import { useNavigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../src/COMPONENT/login/Login";
import Home from "./pages/Home";
import { createContext } from "react";
import Header from "../src/COMPONENT/header/Header";
import Footer from "./COMPONENT/footer/Footer";
import Register from "./COMPONENT/signup/Register";
// import axios from '../src/COMPONENT/axiosConfig/Axios'
import AskQuestion from "./COMPONENT/question/AskQuestion";
import Question from "./COMPONENT/question/Question";
import Answer from "./COMPONENT/answer/Answer";
import SingleQuestion from "./COMPONENT/question/SingleQuestion";
import AnswerQuestion from "./COMPONENT/answer/Answer";
export const AppState = createContext();
export const QuestionState = createContext();

function App() {
  const [user, setuser] = useState({});
  const [question, setquestion] = useState({});
  const token = localStorage.getItem("token");
  // console.log(token)
  const navigate = useNavigate();

  //  to get and set user data
  async function checkUser() {
    try {
      const { data } = await axios.get(
        `https://evanforum-2kee.onrender.com/api/users/check`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // console.log(data)
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  }

  useEffect(() => {
    checkUser();
    // questions();
  }, []);
  // checkUser();

  return (
    <AppState.Provider value={{ user, setuser }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/askquestion" element={<AskQuestion />} />
        <Route path="/allquestion" element={<Question />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/question/:questionid" element={<SingleQuestion />} />
        <Route path="/answer/:questionid" element={<AnswerQuestion />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </AppState.Provider>
  );
}

export default App;
