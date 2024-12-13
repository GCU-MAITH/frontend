"use client"

import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Home() {

  // STUB: Implement proper authentication hook for later use
  const [accessToken, setAccessToken] = useState(null);

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
      <h1 className="text-4xl font-bold">문제 생성</h1>
      <p>아직 구현 안 됨. Under construction</p>
      <Latex>We give illustrations for the {1 + 2} processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.</Latex>
    </>
  );
}