// "use client";

// import { useState } from "react";

// const notices = [
//   {
//     id: 1,
//     title: "서비스 업데이트 공지",
//     date: "2024-12-01",
//     content: "MAITH 서비스가 새롭게 업데이트되었습니다. 자세한 사항은 공지사항을 확인하세요."
//   },
//   {
//     id: 2,
//     title: "점검 안내",
//     date: "2024-12-10",
//     content: "2024년 12월 15일 00:00 ~ 06:00까지 서버 점검이 예정되어 있습니다."
//   },
//   {
//     id: 3,
//     title: "신규 기능 출시",
//     date: "2024-12-05",
//     content: "사용자 맞춤형 문제 추천 기능이 추가되었습니다."
//   }
// ];

// export default function NoticePage() {
//   const [selectedNotice, setSelectedNotice] = useState(null);

//   return (
//     <div className="flex flex-col mx-auto max-w-screen-xl h-screen p-6 gap-6">
//       <div className="flex justify-center items-center">
//         <h1 className="text-4xl font-bold">공지사항</h1>
//       </div>

//       <div className="flex flex-col gap-4">
//         {notices.map((notice) => (
//           <div
//             key={notice.id}
//             className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
//             onClick={() => setSelectedNotice(notice)}
//           >
//             <h2 className="text-2xl font-semibold">{notice.title}</h2>
//             <p className="text-sm text-gray-500">{notice.date}</p>
//           </div>
//         ))}
//       </div>

//       {selectedNotice && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setSelectedNotice(null)}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4">{selectedNotice.title}</h2>
//             <p className="text-sm text-gray-500 mb-2">{selectedNotice.date}</p>
//             <p className="text-base">{selectedNotice.content}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function NoticePage() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // 컴포넌트가 마운트될 때 공지사항을 API에서 가져옵니다.
  useEffect(() => {
    axios
      .get("http://mathai.kro.kr:4434/api/announcements")
      .then((response) => {
        // 서버 응답값을 로그로 출력
        console.log("공지사항 데이터:", response.data);

        // 응답 데이터에서 announcements 배열을 notices 상태에 저장
        setNotices(response.data.announcements);
      })
      .catch((error) => {
        console.error("공지사항을 가져오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-screen-xl h-screen p-6 gap-6">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">공지사항</h1>
      </div>

      <div className="flex flex-col gap-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
            onClick={() => setSelectedNotice(notice)}
          >
            <h2 className="text-2xl font-semibold">{notice.title}</h2>
            <p className="text-sm text-gray-500">{notice.date}</p>
          </div>
        ))}
      </div>

      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedNotice(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedNotice.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{selectedNotice.date}</p>
            <p className="text-base">{selectedNotice.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}
