"use client";

import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import axios from "axios";

axios.defaults.baseURL = "https://mathai.kro.kr:4434"; // 기본 API URL 설정

export default function Home() {
  const [accessToken, setAccessToken] = useState(null);
  const [questionData, setQuestionData] = useState({ difficulty: "", topic: "", num_problems: 1 });
  const [problems, setProblems] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("요청 데이터:", questionData);
    try {
      const response = await axios.post(
        "/api/problems/generate",
        questionData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("서버 응답 성공:", response.data)
      setProblems(response.data.problems);
      setSelectedAnswer(null);
    } catch (error) {
      console.error("서버 응답 실패:", error.response?.data || error.message);
    }
  };

  const handleShowAnswer = (answer) => {
    console.log("선택된 정답:", answer);
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      console.log("로컬 스토리지에서 가져온 토큰:", token); // 토큰 로그
      if (!token) {
        location.href = "/auth/signin";
      } else {
        setAccessToken(token);
      }
    }
  }, []);

  return (
    <>
      <div className="my-4">
        <label htmlFor="difficulty" className="block text-lg font-medium">
          난이도를 입력해주세요:
        </label>
        <input
          id="difficulty"
          name="difficulty"
          value={questionData.difficulty}
          onChange={handleInputChange}
          placeholder="e.g., medium"
          className="mt-2 p-2 border rounded w-full text-black placeholder-gray-500"
        />

        <label htmlFor="topic" className="block text-lg font-medium mt-4">
          원하는 문제의 주제를 입력해주세요:
        </label>
        <input
          id="topic"
          name="topic"
          value={questionData.topic}
          onChange={handleInputChange}
          placeholder="e.g., algebra"
          className="mt-2 p-2 border rounded w-full text-black placeholder-gray-500"
        />

        <label htmlFor="num_problems" className="block text-lg font-medium mt-4">
          원하는 문제 개수를 입력해주세요:
        </label>
        <input
          id="num_problems"
          name="num_problems"
          type="number"
          value={questionData.num_problems}
          onChange={handleInputChange}
          className="mt-2 p-2 border rounded w-full text-black"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          문제 생성
        </button>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-medium">생성된 문제:</h2>
        {problems.map((problem) => (
          <div
            key={problem.id}
            className="mt-4 p-4 border rounded bg-white text-black"
          >
            <Latex>{problem.question}</Latex>
            <button
              onClick={() => handleShowAnswer(problem.answer)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              정답 확인
            </button>
          </div>
        ))}
      </div>

      {selectedAnswer && (
        <div className="my-4">
          <h2 className="text-lg font-medium">정답:</h2>
          <div
            className="mt-2 p-4 border rounded bg-white text-black"
            style={{ whiteSpace: "pre-wrap" }}
          >
            <Latex>{selectedAnswer}</Latex>
          </div>
        </div>
      )}
    </>
  );
}
