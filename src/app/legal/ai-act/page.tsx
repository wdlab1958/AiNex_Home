'use client';

import React from 'react';
import { Scale, ShieldCheck, FileCheck } from 'lucide-react';

const AIActPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">AI 기본법 준수 (AI Basic Act Compliance)</h1>

                <div className="prose prose-invert max-w-none text-gray-300">
                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 mb-10">
                        <h2 className="text-xl font-bold text-emerald-400 mt-0 mb-2 flex items-center gap-2">
                            <Scale className="w-5 h-5" />
                            시행일: 2026년 1월 22일
                        </h2>
                        <p className="mb-0 text-emerald-100/80">
                            AiNex는 2026년 1월 22일부터 대한민국에서 시행되는 "인공지능 산업 육성 및 신뢰 기반 조성에 관한 법률"(AI 기본법)을 준수할 준비가 되어 있습니다.
                        </p>
                    </div>

                    <p className="mb-4">
                        AI 기본법은 한국에서 인공지능의 안전하고 윤리적인 혁신을 위한 법적 토대를 마련합니다. 엔터프라이즈 AI 솔루션 제공업체로서 A3 Security(AiNex)는 이 법률에서 요구하는 엄격한 기준을 준수하기 위해 최선을 다하고 있습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. 핵심 규정 준수 원칙</h2>
                    <p className="mb-4">
                        우리는 법률에 정의된 핵심 원칙을 따릅니다:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>투명성:</strong> 사용자가 AI 시스템과 상호 작용하고 있음을 명확히 공개합니다.</li>
                        <li><strong>안전성:</strong> 피해를 예방하고 견고성을 보장하기 위한 기술적 보호 조치를 구현합니다.</li>
                        <li><strong>책임성:</strong> 책임 소재가 명확하고 감사가 가능하도록 시스템을 설계합니다.</li>
                        <li><strong>공정성:</strong> AI 학습 데이터 및 출력 결과의 편향을 최소화합니다.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. 고위험 AI 관리</h2>
                    <p className="mb-4">
                        법률에 따라 "고위험"으로 분류된 사용 사례(예: 의료 진단, 중요 인프라, 채용)의 경우, AiNex는 제25조를 준수하는 특정 거버넌스 모듈을 제공합니다:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex items-center gap-2 mb-2 font-bold text-white">
                                <ShieldCheck className="w-4 h-4 text-blue-400" /> 위험 품질 관리
                            </div>
                            <div className="text-sm text-gray-400">배포 전 신뢰성을 검증하기 위한 자동화된 테스트 파이프라인.</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                            <div className="flex items-center gap-2 mb-2 font-bold text-white">
                                <FileCheck className="w-4 h-4 text-blue-400" /> 기록 보관
                            </div>
                            <div className="text-sm text-gray-400">규제 감사를 위한 모델 결정의 불변 로깅.</div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. 사용자 권리 및 구제</h2>
                    <p className="mb-4">
                        법률에 따라 사용자는 AI 시스템이 내린 결정에 대해 설명을 요구할 권리가 있습니다. AI 기반 결정이 귀하에게 불공정하게 영향을 미쳤다고 판단되는 경우, 지정된 <a href="/contact" className="text-blue-400 hover:underline">컴플라이언스 오피스</a>를 통해 이의를 제기할 수 있습니다.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. 향후 로드맵</h2>
                    <p className="mb-4">
                        우리는 시행령 구체화에 기여하기 위해 "국가 AI 안전 컨소시엄"에 적극적으로 참여하고 있습니다. 과학기술정보통신부의 새로운 지침이 발표되는 대로 이 정책을 지속적으로 업데이트할 것을 약속드립니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIActPage;
