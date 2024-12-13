import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "mAIth",
  description: "수학의 자신감, AI로 함께 키워요!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
