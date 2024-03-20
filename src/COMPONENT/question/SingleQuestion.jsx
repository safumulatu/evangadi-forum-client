import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../axiosConfig/Axios';
import { CgProfile } from 'react-icons/cg';
import './singlequestion.css';

function SingleQuestion() {
  const { questionid } = useParams();
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const questionResponse = await axios.get(`/question/${questionid}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        setQuestion(questionResponse.data.title.toUpperCase());
        setDescription(questionResponse.data.description.toLowerCase());

        const response = await axios.get(`/all-answers/${questionid}`, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        if (response.data.msg) {
          alert('Success message: ' + response.data.msg);
        }
        const answersArray = Object.values(response.data);
        setAnswers(answersArray);
      } catch (error) {
        console.error('Error fetching question or answers:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [questionid]);

  const handlePostAnswer = async () => {
    if (!newAnswer || !questionid) {
      setAlertMessage('Failed to post answer. Please try again.');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`/question/${questionid}`, 
        { answer: newAnswer },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
  
      if (response.data.msg) {
        setAlertMessage('Success: ' + response.data.msg);
      }
    
      const updatedAnswers = [...answers, { answer: newAnswer }];
      setAnswers(updatedAnswers);
      setNewAnswer('');
  
      setTimeout(() => {
        setAlertMessage('');
      }, 1000);
    } catch (error) {
      console.error('Error posting answer:', error);
      setAlertMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <section className="forbackGrounds">
      <div className="container">
        <div className="row thewhole">
          <div className="col-md-12 max-width">
            <h1 className="titlequestion">QUESTION</h1>
            <h4 className="question">TITLE:{question}</h4>
            <span className="description">Question:{description}</span>
            <div>
              <h1 className="answerTitle">Answers From the Community</h1>
            </div>
            <ul className="QuestionList scrollable-div">
              {answers[0]?.map((answer) => (
                <li key={answer.answerid} className="AnswerItem">
                  <div className="QuestionInfo">
                    <div className="flex-row">
                      <CgProfile className="Avatar" />
                      <span className="username">{answer.username}</span>
                    </div>
                    <div>{answer.answer}</div>
                  </div>
                </li>
              ))}
              <div className="usernames">
                {answers[1] && (
                  <li key="newAnswer" className="AnswerItem">
                    <div>
                      <span className="usersname">{answers[1].answer} </span>
                    </div>
                  </li>
                )}
              </div>
            </ul>
            <div className="fortopmr">
              {alertMessage && <div className="alert">{alertMessage}</div>}
              <textarea
                style={{ width: '100%', height: '250px', border:'2px solid green', borderRadius:'15px', marginLeft:'15px' }}
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Your answer..."
              />
              <button onClick={handlePostAnswer} className="blue m-r" style={{ margin: '10px' }}>
                Post Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleQuestion;
