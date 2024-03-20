import axios from "../axiosConfig/Axios";
import { MdArrowForwardIos } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { AppState } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import './allQuest.css'
function AllQuestions() {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/getAllquestion`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok" + response.status);
        }

        const data = response.data;
        setQuestions(data.questions); 
        setLoading(false);
        navigate('/')
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <section className="forbackGround">
      <div className="container">
        <div className="row thewhole">
          <div className="col-md-12 AllQuestions">
          <div className="container">
    <div className="tops">
        <Link to={"/askquestion"} className="link">
            <h2 className="AskQuestions blue">Ask Questions</h2>
        </Link>
        <div className="search-box">
            <input type="text" placeholder="Search..." />
        </div>
        <h2 className="rightone">Welcome: {user?.username}</h2>
    </div>
</div>

            {loading ? (
              <p className="LoadingMessage">Loading...</p>
            ) : error ? (
              <p className="ErrorMessage">Error: {error}</p>
            ) : (
              <ul className="QuestionList">
                {questions.map((question) => (
                  <div className="onhover" key={question.questionid}>
                    <li className="QuestionItem">
                      <div className="QuestionInfo  d-flex">
                        <div className="flex-row">
                          <CgProfile className="AvatarQ" />
                          <span className="username">{question.username}</span>
                        </div>
                        <h3 className="QuestionTitle">
                          <Link to={`/question/${question.questionid}`} 
													className="QuestionLink">
                            {question.title}
                            <MdArrowForwardIos className="ArrowIcon" />
                          </Link>
                        </h3>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllQuestions;
