'use client';

import React from 'react';

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">개인정보 처리방침</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="mb-4">최종 업데이트: 2026년 1월</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. 수집하는 개인정보 항목</h2>
                    <p className="mb-4">
                        당사는 귀하가 계정을 생성하거나, 뉴스레터를 구독하거나, 지원을 위해 당사에 연락할 때와 같이 귀하가 직접 제공하는 정보를 수집합니다. 또한 당사는 귀하의 서비스 상호 작용에 대한 정보를 수집할 수 있습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. 개인정보의 이용 목적</h2>
                    <p className="mb-4">
                        당사는 수집한 정보를 바탕으로 거래 처리, 기술 공지 발송, 의견 및 질문에 대한 답변 등 서비스를 제공, 유지 및 개선하는 데 사용합니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. 데이터 보안</h2>
                    <p className="mb-4">
                        당사는 분실, 도난, 오용 및 무단 접근, 공개, 변경 및 파괴로부터 귀하의 정보를 보호하기 위해 합리적인 조치를 취합니다. 엔터프라이즈 고객의 경우, 강화된 데이터 주권을 위해 온프레미스(On-premise) 및 VPC 배포 옵션을 제공합니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. 쿠키</h2>
                    <p className="mb-4">
                        당사는 쿠키 및 유사한 기술을 사용하여 귀하의 활동, 브라우저 및 장치에 대한 정보를 수집합니다. 귀하는 브라우저에서 모든 쿠키를 거부하거나 쿠키가 전송될 때 이를 표시하도록 설정할 수 있습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. 개인정보 처리방침의 변경</h2>
                    <p className="mb-4">
                        당사는 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새로운 개인정보 처리방침을 게시하여 귀하에게 알립니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
