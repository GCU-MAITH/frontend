"use client";

import Logo from '@/components/Logo';
import NavItem from '@/components/NavItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function GenericLayout({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userInfo = localStorage.getItem('userInfo');
      setUserInfo(userInfo);
    }

    if (!userInfo) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        (async () => {
          const res = await fetch('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (res.ok) {
            const userInfo = await res.json();
            console.log(userInfo);
            setUserInfo(userInfo);
            if (typeof window !== 'undefined') {
              localStorage.setItem('userInfo', JSON.stringify(userInfo));
            }
            return;
          } else {
            setUserInfo(undefined);
          }
        })();
      } else {
        setUserInfo(undefined);
      }
    }
  }, []);

  const signOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
      setUserInfo(undefined);
    }
  }

  return (
    <>
      <header className="bg-zinc-800 text-white p-2 px-4">
        <div className="flex max-w-screen-xl mx-auto justify-between gap-8">
          <nav className="flex gap-4 md:gap-8">
            <Link href="/"><Logo className="h-10 w-fit" /></Link>
            <ul className="flex gap-2 items-center">
              <NavItem icon="fas fa-home" href="/">홈</NavItem>
              <NavItem icon="fas fa-clipboard-question" href="/">문제 생성</NavItem>
            </ul>
          </nav>

          <div className='flex items-center'>
            {userInfo ? <div className="relative flex gap-2 items-center transition hover:bg-zinc-700 py-1 px-2 rounded-full md:rounded-md cursor-pointer" onClick={() => setMenuOpen(e => !e)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={userInfo.picture ?? 'https://via.placeholder.com/150'} alt={userInfo.name} className="h-8 w-8 rounded-full" />
              <span className="text-md hidden md:block">{userInfo.name}</span>
              <span className="text-zinc-500 hidden md:block">
                { menuOpen ? <i className='fas fa-chevron-up'></i> : <i className='fas fa-chevron-down'></i>}
              </span>

              {menuOpen && <ul className="absolute flex flex-col items-center top-14 right-0 bg-zinc-800 text-white p-1 w-36 rounded-lg">
                <li className="flex gap-2 justify-center w-full py-1 px-4 rounded-md transition items-center bg-zinc-800 hover:bg-zinc-700 cursor-pointer" onClick={() => signOut()}>
                  <i className="fas fa-right-from-bracket"></i>
                  <span>로그아웃</span>
                </li>
              </ul>}

            </div> : userInfo === null ? <>
              <i className="fas fa-spinner fa-spin"></i>
            </> : <Link href="/auth/signin" className="bg-violet-600 text-white py-1 px-4 rounded-lg">로그인</Link>}
          </div>
        </div>
       </header>
      <main className="mx-auto max-w-screen-xl px-4 min-h-[calc(100dvh-12rem)]">{children}</main>
      <footer>
        <div className="flex max-w-screen-xl mx-auto justify-between gap-8 px-4">
          <div className="flex flex-col gap-2">
            <Logo className="h-16 w-fit opacity-20" />
            <p className="opacity-70">© 2021 MAITH. All rights reserved.</p>
          </div>
          <div className='flex justify-end gap-4'>
            <Link href="/policy/terms" className="text-zinc-500 transition hover:text-blue-700">이용약관</Link>
            <Link href="/policy/privacy" className="text-zinc-500 transition hover:text-blue-700">개인정보 처리방침</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
