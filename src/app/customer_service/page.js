"use client";

export default function CustomerSupport() {
    const handleFormRedirect = () => {
        // Google Forms 링크로 이동
        window.open("https://forms.gle/MUDgSUvK6sMNoXQJ9", "_blank");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">고객센터</h1>
            <p className="text-lg text-gray-600 mb-4">
                질문사항이나 건의사항이 있으시면 아래 버튼을 눌러 Google 폼으로 이동해주세요.
            </p>
            <button
                onClick={handleFormRedirect}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
            >
                Google 폼으로 이동하기
            </button>
        </div>
    );
}
