import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { useEffect } from "react";
const QuizDetail = () => {
  const [selectedChoices, setSelectedChoices] = useState({});
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  const handleSubmit = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const token = sessionStorage.getItem("jwtToken");

    const data = {
      memberId: user.id,
      point: correctAnswerCount,
    };
    const res = await fetch("http://localhost:8084/member/create-result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error();
    } else {
      const data = await res.json();
      console.log(data);
      setIsModalOpen(false);
      message.success("Nộp bài thành công");
    }
  };

  const handleClear = () => {
    setSelectedChoices({});
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [question, setQuestion] = useState([]);
  const getQuiz = async () => {
    const token = sessionStorage.getItem("jwtToken");

    console.log("log token:", token);

    const value = { id: 9 };

    try {
      const res = await fetch("http://localhost:8084/member/create-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(value),
      });
      if (res.ok) {
        const data = await res.json();

        const ARRAY = data.map((item) => ({
          id: item.id,
          question: item.question,
          choices: [item.firstChoice, item.secondChoice, item.thirdChoice],
          correctAnswer: item.answer,
        }));
        setQuestion(ARRAY);
      } else {
        console.error("API call failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChoiceChange = (event, questionIndex) => {
    const selectedChoice = event.target.value;
    const currentQuestion = question[questionIndex];

    setSelectedChoices((prevChoices) => ({
      ...prevChoices,
      [questionIndex]: selectedChoice,
    }));

    if (selectedChoice === currentQuestion.correctAnswer) {
      setCorrectAnswerCount((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-9 ">
          {question &&
            question.map((question, index) => (
              <div className="row mt-4" key={question.id}>
                <div className="col-md-3 carddd ps-5">
                  <div className="card-body p-2 border border-dark rounded">
                    <h5 className="card-title">Câu: {index + 1} </h5>
                    <p className="card-text">Câu trả lời: </p>
                    <p className="card-text"> Điểm của câu: </p>
                  </div>
                </div>
                <div
                  key={index}
                  className="col-md-9 carddd border border-dark rounded"
                >
                  <div className="card-body">
                    <p className="card-text">{question.question}</p>
                    <form>
                      {question &&
                        question.choices.map((choice, choiceIndex) => (
                          <div key={choiceIndex}>
                            <label>
                              <input
                                type="radio"
                                value={choice}
                                checked={selectedChoices[index] === choice}
                                onChange={(event) =>
                                  handleChoiceChange(event, index)
                                }
                              />
                              {choice}
                            </label>
                          </div>
                        ))}
                      <label>{question.correctAnswer}</label>
                    </form>
                    <a
                      style={{
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={handleClear}
                    >
                      Clear
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="col-md-3 carddd mt-4 ">
          <div>
            <div className="card-body border p-2  border-dark rounded">
              <h5 className="card-title">Số câu đã làm </h5>
              <div className="carddd" style={{ width: "25px" }}>
                <div className="container card-body border border-dark m-2">
                  <p className="card-title">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body border p-2 mt-2 border-dark rounded">
            <p>Số câu trả lời đúng: {correctAnswerCount}</p>
          </div>
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-4 mt-2">
          <Button type="primary" onClick={showModal}>
            Kết thúc bài làm
          </Button>
          <Modal
            title="Thông báo"
            open={isModalOpen}
            onOk={handleSubmit}
            onCancel={handleCancel}
          >
            <p>
              Các câu trả lời sẽ được lưu vào hệ thống, bạn có chắc chắn nộp bài
            </p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
