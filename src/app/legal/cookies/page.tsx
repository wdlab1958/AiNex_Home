'use client';

import React from 'react';

const CookiesPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">쿠키 정책</h1>
                <div className="prose prose-invert max-w-none text-gray-300">
                    <p className="mb-4">최종 업데이트: 2026년 1월</p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. 쿠키란 무엇인가요?</h2>
                    <p className="mb-4">
                        쿠키는 귀하가 웹사이트를 방문할 때 귀하의 컴퓨터나 모바일 장치에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 작동하거나 더 효율적으로 작동하도록 돕고, 사이트 소유자에게 정보를 제공하기 위해 널리 사용됩니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. 쿠키 사용 목적</h2>
                    <p className="mb-4">
                        우리는 아래에 설명된 다양한 이유로 쿠키를 사용합니다. 불행히도 대부분의 경우 이 사이트가 제공하는 기능과 특징을 완전히 비활성화하지 않고는 쿠키를 비활성화할 수 있는 업계 표준 옵션이 없습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. 설정되는 쿠키 종류</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            <strong>계정 관련 쿠키:</strong> 귀하가 계정을 생성하면 가입 절차 관리 및 일반 관리를 위해 쿠키를 사용합니다.
                        </li>
                        <li>
                            <strong>로그인 관련 쿠키:</strong> 귀하가 로그인했을 때 이 사실을 기억하기 위해 쿠키를 사용합니다. 이를 통해 새로운 페이지를 방문할 때마다 로그인할 필요가 없습니다.
                        </li>
                        <li>
                            <strong>양식 관련 쿠키:</strong> 연락처 페이지나 댓글 양식과 같은 양식을 통해 데이터를 제출할 때, 향후 통신을 위해 귀하의 사용자 세부 정보를 기억하도록 쿠키가 설정될 수 있습니다.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. 제3자 쿠키</h2>
                    <p className="mb-4">
                        일부 특별한 경우에는 신뢰할 수 있는 제3자가 제공하는 쿠키도 사용합니다. 다음 섹션에서는 이 사이트에서 접할 수 있는 제3자 쿠키에 대해 설명합니다.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            이 사이트는 귀하가 사이트를 사용하는 방식과 경험을 개선할 수 있는 방법을 이해하는 데 도움을 주기 위해 웹에서 가장 널리 퍼져 있고 신뢰할 수 있는 분석 솔루션인 Google Analytics를 사용합니다.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. 추가 정보</h2>
                    <p className="mb-4">
                        이 정보가 도움이 되었기를 바랍니다. 더 자세한 정보가 필요하시면 저희의 선호하는 연락 방법을 통해 문의해 주시기 바랍니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiesPage;
