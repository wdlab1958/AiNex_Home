'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ShieldAlert, Scale, UserCheck, ArrowRight, Zap, CheckCircle2, Lock, FileText, Share2 } from 'lucide-react';
import Link from 'next/link';

const FinancePage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-6 border border-emerald-500/30">
                        Finance Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
                            금융업 (Finance)
                        </span>
                        <br />
                        리스크 관리 및 AX 전략
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        규칙 기반 시스템을 넘어, AI가 실시간으로 데이터를 학습하고 방어하는 지능형 금융 보안 체계를 구축합니다.
                    </p>
                </motion.div>
            </section>

            {/* Strategies Grid */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid gap-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent rounded-3xl -z-10 group-hover:from-emerald-900/20 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                                </div>

                                <div className="md:col-span-8">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-3">
                                            <Zap className="w-5 h-5 text-yellow-400" />
                                            핵심 가치 (Core)
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed text-lg bg-black/30 p-4 rounded-xl border border-white/5">
                                            {section.core}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                            주요 기능 및 세부 내용
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                                    <div>
                                                        <span className="font-semibold text-white">{detail.title}:</span>{' '}
                                                        <span className="leading-relaxed">{detail.desc}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* AX Strategy Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">AX 구축을 위한 핵심 고려사항</h2>
                            <p className="text-xl text-gray-400">Key Implementation Strategy</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <FileText className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">설명 가능한 AI (XAI)</h3>
                                <p className="text-gray-400 text-sm">
                                    금융은 신뢰가 생명이므로, AI가 대출 거절이나 사기 탐지 판정을 내렸을 때 "왜 그런 판단을 했는지" 설명할 수 있어야 합니다 (블랙박스 문제 해결).
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                    <Share2 className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">데이터 사일로 제거</h3>
                                <p className="text-gray-400 text-sm">
                                    은행, 카드, 증권 등 부서별로 단절된 데이터를 통합 데이터 레이크(Data Lake)로 구축하여 AI 학습용 고품질 데이터를 확보해야 합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                                    <Lock className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">보안 및 프라이버시 강화</h3>
                                <p className="text-gray-400 text-sm">
                                    민감한 금융 정보를 다루므로 연합 학습(Federated Learning) 등 데이터를 외부로 유출하지 않고 학습하는 보안 기술 도입이 필요합니다.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-lg hover:shadow-emerald-500/25">
                                금융 AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const sections = [
    {
        title: '리스크 관리 및 사기 탐지',
        englishTitle: 'Risk Management & FDS',
        icon: ShieldAlert,
        color: 'from-red-500 to-orange-500',
        core: '기존의 규칙 기반(Rule-based) 시스템을 넘어, AI가 실시간으로 데이터를 학습하고 이상 징후를 선제적으로 방어하는 지능형 보안 체계로의 전환입니다.',
        details: [
            {
                title: '지능형 이상 거래 탐지 (AI-FDS)',
                desc: 'ML 알고리즘이 고객의 패턴을 학습하여 이상 거래를 실시간 차단하고, 신종 사기 패턴(보이스피싱 등)을 스스로 학습하여 방어합니다.'
            },
            {
                title: '신용 리스크 평가 고도화 (Credit Scoring)',
                desc: '비금융 데이터(통신비, 쇼핑 패턴 등)를 포함한 대안 신용평가 모델을 적용하여, 씬파일러에 대한 정교한 신용 평가를 수행합니다.'
            }
        ]
    },
    {
        title: '규제 준수 자동화',
        englishTitle: 'Compliance Automation / RegTech',
        icon: Scale,
        color: 'from-blue-500 to-indigo-500',
        core: '복잡하고 빈번하게 바뀌는 금융 규제에 AI를 활용해 대응함으로써, 컴플라이언스 비용을 절감하고 위규 리스크를 최소화합니다.',
        details: [
            {
                title: 'NLP 기반 규제 모니터링',
                desc: 'NLP 기술로 개정되는 금융 법안과 규정을 자동 분석하고, 내부 규정과의 불일치 사항을 담당자에게 알림을 제공합니다.'
            },
            {
                title: '자금 세탁 방지 (AML) 자동화',
                desc: 'KYC 자동화(OCR, 안면인식) 및 그래프 뉴럴 네트워크(GNN) 기반의 복잡한 자금 세탁 네트워크 추적을 지원합니다.'
            }
        ]
    },
    {
        title: '고객 맞춤형 금융 상품 추천',
        englishTitle: 'Hyper-Personalization',
        icon: UserCheck,
        color: 'from-purple-500 to-pink-500',
        core: "단순한 세그먼트 분류를 넘어, 고객의 생애 주기와 초단위 행동 데이터까지 분석하여 '개인(N=1)'에게 최적화된 제안을 하는 초개인화 서비스입니다.",
        details: [
            {
                title: '마이데이터 기반 자산 관리',
                desc: '흩어진 금융 자산을 AI가 통합 분석하여, 최적의 포트폴리오(Robo-Advisor)를 구성하고 리밸런싱을 제안합니다.'
            },
            {
                title: '상황 인식 추천',
                desc: '결제 위치, 소비 시간대 등을 분석하여 "지금 이 순간" 가장 필요한 혜택(카드, 대출, 보험)을 실시간 추천합니다.'
            },
            {
                title: '생성형 AI 금융 비서',
                desc: 'LLM을 도입하여 복잡한 상품 설명을 요약해주거나, 대화형으로 상담을 진행하는 AI 뱅커를 구축합니다.'
            }
        ]
    }
];

export default FinancePage;
