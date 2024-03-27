import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./singlequestion.css";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";

function SingleQuestion() {
  const { questionid } = useParams();
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const questionResponse = await axios.get(
          `https://evanforum-2kee.onrender.com/api/users/question/${questionid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setQuestion(questionResponse.data.title.toUpperCase());
        setDescription(questionResponse.data.description.toLowerCase());

        const response = await axios.get(
          `https://evanforum-2kee.onrender.com/api/users/all-answers/${questionid}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if (response.data.msg) {
          toast.success("Success message: " + response.data.msg);
        }
        const answersArray = Object.values(response.data);
        setAnswers(answersArray);
      } catch (error) {
        toast.error("Error fetching question or answers:" + error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [questionid]);

  const handlePostAnswer = async () => {
    if (!newAnswer || !questionid) {
      toast.error("Failed to post answer. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://evanforum-2kee.onrender.com/api/users/question/${questionid}`,
        { answer: newAnswer },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.data.msg) {
        setAlertMessage("Success: " + response.data.msg);
      }

      const updatedAnswers = [...answers, { answer: newAnswer }];
      setAnswers(updatedAnswers);
      setNewAnswer("");

      setTimeout(() => {
        setAlertMessage("");
      }, 1000);
    } catch (error) {
      toast.error("Error posting answer:" + error.message);
      setAlertMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  // Add an import for the Bootstrap spinner

  // Inside the SingleQuestion component
  return (
    <section className="forbackGrounds">
      <div className="container">
        <div className="row thewhole">
          <div className="col-md-12 max-width">
            {isLoading ? (
              // Display a loading spinner while data is being fetched
              <div className="text-center">
                <Loader animation="border" variant="primary" />
              </div>
            ) : (
              <>
                <h1 className="fs-5 text-muted text-center mb-3 p-3">
                  QUESTION
                </h1>
                <h4 className="text-center mb- fs-lg text-primary fw-bold">
                  {question}
                </h4>
                <span className="text-center fst-italic fs-lg text-sucess fw-bold justify-center">
                  {description}
                </span>
                <div>
                  <h1 className="answerTitle">Answers From the Community</h1>
                </div>
                <ul className="QuestionList">
                  {answers[0]?.map((answer) => (
                    <li key={answer.answerid} className="AnswerItem">
                      <div className="QuestionInfo p-4">
                        <div className="flex m-5 p-4 justify-center">
                          <CgProfile className="Avatar" />
                          <span className="username">{answer.username}</span>
                        </div>
                        <div>{answer.answer}</div>
                      </div>
                    </li>
                  ))}
                  <li key="newAnswer" className="AnswerItem">
                    <div className="QuestionInfo p-4">
                      <div className="flex m-5 justify-center">
                        {/* Assuming answers[1].username is the correct property */}
                        <span className="username">{answers[1]?.username}</span>
                      </div>
                      {/* Assuming answers[1].answer is the correct property */}
                      <div>{answers[1]?.answer}</div>
                    </div>
                  </li>
                </ul>

                <div className="fortopmr">
                  {alertMessage && <div className="alert">{alertMessage}</div>}
                  <textarea
                    style={{
                      width: "100%",
                      height: "250px",
                      border: "2px solid green",
                      borderRadius: "15px",
                      marginLeft: "15px",
                    }}
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Your answer..."
                  />
                  <Link>
                    <button
                      onClick={handlePostAnswer}
                      className="blue rounded p-2 bg-primary text-white items-center"
                      style={{ margin: "10px" }}
                    >
                      Post Answer
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleQuestion;
