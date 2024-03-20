import { useState } from "react";
import axios from "axios";

const Answer = () => {
    
    return (
        <div>
            <textarea
                // value={newAnswer}
                // onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="Enter your answer..."
            />
            <input
                type="text"
                // value={questionid}
                // onChange={(e) => setQuestionid(e.target.value)}
                placeholder="Enter the question id..."
            />
            <button onClick={handlePostAnswer}>Post Answer</button>
        </div>
    );
};

export default Answer;
