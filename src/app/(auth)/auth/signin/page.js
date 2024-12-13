"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const clientId = process.env.CLIENT_ID;

  useEffect(() => {
    const search = new URLSearchParams();
    search.set('client_id', clientId)
    search.set('scope', 'openid email profile')
    search.set('response_type', 'code')
    search.set('redirect_uri', location.protocol + '//' + location.host + '/auth/callback')

    location.href = 'https://accounts.google.com/o/oauth2/v2/auth?'+search.toString()
  }, []);

  return (
    <div className="flex mx-auto max-w-screen-xl h-screen gap-4 justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <i className="fas fa-right-to-bracket text-5xl"></i>
        <p>MAITH에 로그인하기 위해 Google로 이동합니다.</p>
      </div>
    </div>
  );
}
