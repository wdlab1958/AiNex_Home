'use client';

import React from 'react';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">이용 약관</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="mb-4">최종 업데이트: 2026년 1월</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. 약관의 동의</h2>
                    <p className="mb-4">
                        AiNex 플랫폼(이하 "서비스")에 접속하거나 이용함으로써, 귀하는 본 이용 약관에 구속됨에 동의하게 됩니다. 약관의 일부에 동의하지 않는 경우 서비스에 접속할 수 없습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. 이용 라이선스</h2>
                    <p className="mb-4">
                        AiNex 웹사이트의 자료(정보 또는 소프트웨어) 사본 하나를 개인적, 비상업적 일시적 열람을 목적으로 다운로드할 수 있는 권한이 부여됩니다. 이는 라이선스의 부여이며 소유권의 이전이 아닙니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. AI 서비스 및 데이터 사용</h2>
                    <p className="mb-4">
                        본 서비스는 인공지능 기술을 활용합니다. 귀하가 서비스에 입력한 데이터("입력 데이터")에 대한 모든 권리는 귀하에게 있습니다. 귀하는 AiNex가 귀하에게 서비스를 제공하기 위한 목적으로만 귀하의 입력 데이터를 사용할 수 있는 라이선스를 부여합니다. 당사는 귀하의 명시적인 동의 없이 기초 모델을 학습시키기 위해 귀하의 데이터를 사용하지 않습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. 면책 조항</h2>
                    <p className="mb-4">
                        AiNex 웹사이트의 자료는 '있는 그대로' 제공됩니다. AiNex는 명시적이거나 묵시적인 어떠한 보증도 하지 않으며, 상품성, 특정 목적에의 적합성 또는 지적 재산권의 비침해 또는 기타 권리 침해에 대한 묵시적 보증 또는 조건을 포함하여(단, 이에 국한되지 않음) 다른 모든 보증을 부인하고 배제합니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. 책임의 한계</h2>
                    <p className="mb-4">
                        어떠한 경우에도 AiNex 또는 그 공급업체는 AiNex 웹사이트의 자료 사용 또는 사용 불가능으로 인해 발생하는 손해(데이터 또는 이익의 손실 또는 영업 중단으로 인한 손해를 포함하되 이에 국한되지 않음)에 대해 책임을 지지 않습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. AI 기본법 준수</h2>
                    <p className="mb-4">
                        AiNex는 곧 시행될 "AI 기본법"에 명시된 윤리 원칙과 규정을 준수합니다. 우리는 AI 시스템의 투명성, 공정성 및 안전성을 약속합니다. 당사는 국가 및 국제 AI 거버넌스 표준을 완전히 준수하기 위해 규제 개발 사항을 적극적으로 모니터링합니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
