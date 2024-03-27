import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS
// import axios from '../axiosConfig/Axios'
import axios from "axios";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import { useNavigate } from "react-router-dom";
import "./Question.css";

function AskQuestion() {
  const [newQuestion, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const postQuestion = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `https://evanforum-2kee.onrender.com/api/users/addquestion`,
        {
          title: newQuestion,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      toast.success("Question posted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setQuestion("");
      setDescription("");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Oops, your post is not completed.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setQuestion("");
      setDescription("");
      navigate("/askquestion");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <div className="  col-sm-12  text-center">
                <h1 className="askTitle text-center mb- fs-lg text-primary fw-bold">
                  {" "}
                  Steps To Write A Good Question.{" "}
                </h1>{" "}
                <h3 className="subAsk">
                  <ArrowCircleRightTwoToneIcon className="topurple text-start mb-2 fst-italic" />{" "}
                  Summarize your problems in a one - line - title.{" "}
                </h3>{" "}
                <h3 className="subAsk">
                  <ArrowCircleRightTwoToneIcon
                    className="topurple mb-2 text-start"
                    fst-italic
                  />{" "}
                  Describe your problem in more detail.{" "}
                </h3>{" "}
                <h3 className="subAsk">
                  <ArrowCircleRightTwoToneIcon
                    className="topurple mb-3"
                    fst-italic
                  />{" "}
                  Review your question and post it here.{" "}
                </h3>{" "}
              </div>{" "}
              <hr />
              <h1 className="text-center text-danger fst-italic">
                {" "}
                Post Your Question{" "}
              </h1>{" "}
              {/* Display Toasts */} <ToastContainer />
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Question title"
                    value={newQuestion}
                    onChange={(e) => setQuestion(e.target.value)}
                  />{" "}
                </div>{" "}
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Question details..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />{" "}
                </div>{" "}
                <div className="d-grid gap-2">
                  <button
                    type="button"
                    className="blue rounded p-2 bg-primary text-white items-center"
                    onClick={postQuestion}
                  >
                    Post Question{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default AskQuestion;
