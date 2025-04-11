import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex mx-auto max-w-screen-xl h-screen justify-center items-center">
      <div className="flex flex-col sm:flex-row py-12 px-4 w-full h-full gap-4 max-h-[800px]">
        <div className="flex flex-col h-full w-full sm:w-96">
          <div className="flex h-96 grow-0 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 text-4xl items-center">
                <Logo />
              </div>
              <p>나만의 수학 코치, MAITH</p>
            </div>
          </div>
          <Link href="/auth/signin" className="group relative grow bg-violet-600 text-white h-full flex items-center p-4">
            <div className="absolute bottom-0 left-0 text-5xl p-4">
              <i className="fas fa-circle-arrow-right transition group-hover:translate-x-2"></i>
            </div>
            <p className="text-4xl font-bold transition group-hover:translate-x-2">마이페이지</p>
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 justify-stretch content-stretch h-fit sm:overflow-y-scroll lg:h-full lg:py-0">
          <Link className="relative bg-zinc-900 text-white flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/questions/create">
            <p className="text-4xl font-bold">문제 생성</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
          <Link className="relative bg-yellow-300 text-black flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/problem_collection">
            <p className="text-4xl font-bold">문제 모음</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
          <Link className="relative bg-zinc-900 text-white flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/community">
            <p className="text-4xl font-bold">커뮤니티</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
          <Link className="relative bg-yellow-300 text-black flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/announcement">
            <p className="text-4xl font-bold">공지사항</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
          <Link className="relative bg-zinc-900 text-white flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/customer_service">
            <p className="text-4xl font-bold">고객 센터</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
          <Link className="relative bg-yellow-300 text-black flex items-center justify-center h-28 lg:h-full transition hover:scale-105" href="/program_info">
            <p className="text-4xl font-bold">MAITH 소개</p>
            <div className="absolute top-0 right-0 p-4">
              <i className="fas fa-circle-plus text-5xl"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
