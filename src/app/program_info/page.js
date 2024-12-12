"use client";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-blue-600">MAITH: AI 기반 수학 문제 플랫폼</h1>
                <p className="text-xl text-gray-700 mt-4">
                    AI(LLM)를 활용한 맞춤형 수학 문제 추천 및 학습 경로 제시
                </p>
            </header>

            {/* Section: Project Introduction */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">프로젝트 소개</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    MAITH는 사용자가 원하는 수학 문제를 검색하고 풀어볼 수 있는 플랫폼입니다. 
                    AI 기술을 활용하여 개인별 학습 수준과 목표에 맞는 문제를 추천하며, 
                    학습 경로를 설계해 더욱 효율적인 학습을 지원합니다. 
                </p>
            </section>

            {/* Section: Goals */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">목표</h2>
                <ul className="list-disc pl-8 text-lg text-gray-600">
                    <li>사용자가 원하는 수학 문제를 검색하고 풀어볼 수 있는 플랫폼 제공</li>
                    <li>AI(LLM)를 통해 맞춤형 문제 추천 및 학습 경로 제시</li>
                </ul>
            </section>

            {/* Section: Importance */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">필요성</h2>
                <ul className="list-disc pl-8 text-lg text-gray-600">
                    <li>
                        <strong>개인별 학습 속도와 스타일 반영:</strong> 학습자의 수준과 스타일을 분석해
                        맞춤형 학습 경로와 문제 제공.
                    </li>
                    <li>
                        <strong>약점 보완과 강점 강화:</strong> 부족한 부분을 집중적으로 강화하고, 잘하는
                        부분은 유지해 학습 성과 극대화.
                    </li>
                    <li>
                        <strong>지속적인 동기 부여 및 학습 효율 향상:</strong> 실시간 피드백과 목표 설정을
                        통해 학습 동기 유지.
                    </li>
                    <li>
                        <strong>환각 현상을 줄인 AI:</strong> 지식 그래프 기반 LLM으로 환각 현상을 줄이고
                        신뢰도 높은 응답 제공.
                    </li>
                </ul>
            </section>

            {/* Section: Expected Benefits */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">기대효과</h2>
                <ul className="list-disc pl-8 text-lg text-gray-600">
                    <li>
                        <strong>사용자 맞춤형 문제 제공:</strong> 조건에 맞는 문제를 제공해 개인화된 학습 경험
                        지원.
                    </li>
                    <li>
                        <strong>데이터 기반 학습 보조:</strong> 지식 그래프를 활용해 문제 간 연관성을 탐색하고
                        학습 로드맵 제안.
                    </li>
                    <li>
                        <strong>교육 효율성 향상:</strong> 다양한 문제 제공 및 학습 최적화로 교사와 학습자의
                        시간 절약.
                    </li>
                </ul>
            </section>

            {/* Section: Applications */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">활용 분야</h2>
                <ul className="list-disc pl-8 text-lg text-gray-600">
                    <li>E-Learning 서비스</li>
                    <li>학원 및 교사 보조 도구</li>
                    <li>시험 및 평가 시스템</li>
                    <li>연구 및 데이터 분석</li>
                </ul>
            </section>

            {/* Footer */}
            <footer className="text-center mt-16">
                <p className="text-gray-500">© 2024 MAITH. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
