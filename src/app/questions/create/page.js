"use client"

import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Home() {

  // STUB: Implement proper authentication hook for later use
  const [accessToken, setAccessToken] = useState(null);
  const [question, setQuestion] = useState("");  // 사용자 질문
  const [answer, setAnswer] = useState("");      // 서버 응답

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
};

const handleSubmit = () => {
    //서버로 질문 전송 로직
    console.log("사용자 질문:", question);
    
    // 서버 응답값을 LaTeX 문자열로 가정
    const latexResponse = `
        We give illustrations for the 3 processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.
    `;
    setAnswer(latexResponse);
};
  

  // check if user is logged in
  useEffect(() => { 
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        location.href = '/auth/signin';
      } else {
        setAccessToken(accessToken);
      }
    }
  }, []);


  return (
    <>
        <div className="my-4">
            <label htmlFor="question-input" className="block text-lg font-medium">
                질문을 입력하세요:
            </label>
            <textarea
                id="question-input"
                value={question}
                onChange={handleQuestionChange}
                placeholder="질문을 입력하세요"
                rows={5} 
                className="mt-2 p-2 border rounded w-full resize-y text-black placeholder-gray-500"
            ></textarea>
            <button 
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                작성
            </button>
        </div>
        <div className="my-4">
            <h2 className="text-lg font-medium">맞춤형 수학 문제:</h2>
            <div 
                className="mt-2 p-2 border rounded w-full resize-y text-black bg-white"
                style={{ minHeight: '100px', whiteSpace: 'pre-wrap' }} 
            >
                <Latex>{answer}</Latex>
            </div>
        </div>
    </>
);
}