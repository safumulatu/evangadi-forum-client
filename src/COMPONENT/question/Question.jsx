import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AppState } from "../../App";
import "./allQuest.css";
import Loader from "../loader/Loader";

function AllQuestions() {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://evanforum-2kee.onrender.com/api/users/getAllquestion`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Network response was not ok" + response.status);
        }

        const data = response.data;
        setQuestions(data.questions);
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError(error.message);
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [navigate]);

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="forbackGround">
      <div className="container">
        <div className="row thewhole">
          <div className="col-md-12 AllQuestions">
            <div className="container">
              <div className="tops">
                <Link to="/askquestion" className="link">
                  <h2 className="blue rounded p-2 bg-primary text-white items-center">
                    Ask Questions
                  </h2>
                </Link>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <h2 className="rightone ">
                  Welcome:{" "}
                  <span className="text-end text-uppercase text-danger fw-bold fst-italic">
                    {user?.username}
                  </span>
                </h2>
              </div>
            </div>

            {loading ? (
              <div className="LoadingMessage">
                <Loader />
              </div>
            ) : error ? (
              <p className="ErrorMessage">Error: {error}</p>
            ) : (
              <ul className="QuestionList">
                {filteredQuestions.map((question) => (
                  <div className="onhover" key={question.questionid}>
                    <li className="QuestionItem">
                      <div className="QuestionInfo d-flex">
                        <div className="flex-column ">
                          <CgProfile className="AvatarQ " />
                          <span className="username">{question.username}</span>
                        </div>
                        <h3 className="QuestionTitle gap">
                          <Link
                            to={`/question/${question.questionid}`}
                            className="QuestionLink"
                          >
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
