'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, MessageSquare, Shield, ArrowRight, Zap, CheckCircle2, Lock, Users, Server } from 'lucide-react';
import Link from 'next/link';

const PublicSectorPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-slate-500/20 text-slate-300 text-sm mb-6 border border-slate-500/30">
                        Public Sector Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-blue-400">
                            공공기관 (Public Sector)
                        </span>
                        <br />
                        데이터 기반 행정 & AI 보안
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        신뢰할 수 있는 투명한 행정과 업무 효율성을 위해, 온프레미스 기반의 안전한 AI 행정 서비스를 구축합니다.
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
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-transparent rounded-3xl -z-10 group-hover:from-slate-800/30 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-slate-500 to-transparent rounded-full" />
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
                                            <CheckCircle2 className="w-5 h-5 text-slate-400" />
                                            주요 기능 및 세부 내용
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 shrink-0" />
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
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-gray-900 border border-slate-700 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">공공기관 AX 구축을 위한 핵심 고려사항</h2>
                            <p className="text-xl text-gray-400">Key Implementation Strategy</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                                    <FileText className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">환각(Hallucination) 방지</h3>
                                <p className="text-gray-400 text-sm">
                                    행정 정보는 사실성이 중요하므로, 답변의 근거를 명확히 제시하는 RAG 기술을 고도화해야 합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">공정성과 윤리성</h3>
                                <p className="text-gray-400 text-sm">
                                    특정 지역이나 계층에 편향된 정책을 제안하지 않도록 알고리즘 공정성을 감시하는 체계(AI Red Teaming)가 필요합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Server className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">기존 레거시 시스템 연동</h3>
                                <p className="text-gray-400 text-sm">
                                    새올 행정시스템 등 기존의 방대한 시스템과 AI 솔루션이 매끄럽게 연동되도록 API 표준화가 선행되어야 합니다.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold transition-all shadow-lg hover:shadow-slate-500/25">
                                공공 AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
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
        title: '정책 데이터 분석 및 의사결정 지원',
        englishTitle: 'Data-Driven Decision Making',
        icon: Building2,
        color: 'from-blue-500 to-indigo-500',
        core: '경험과 직관을 넘어, 객관적인 데이터를 기반으로 정책 효과를 시뮬레이션하고 최적의 대안을 도출하는 과학 행정을 구현합니다.',
        details: [
            {
                title: '디지털 트윈 기반 정책 시뮬레이션',
                desc: '도시 전체를 가상 공간에 복제하여 교통, 주택, 재난 정책의 변화 결과를 미리 시뮬레이션하여 시행착오를 줄입니다.'
            },
            {
                title: '복지 사각지대 발굴 및 예측',
                desc: '각 기관에 흩어진 위기 징후 데이터를 AI가 통합 분석하여 소외된 위기 가구를 선제적으로 발굴합니다.'
            }
        ]
    },
    {
        title: '대민 서비스 자동화',
        englishTitle: 'AI Civil Service Chatbot',
        icon: MessageSquare,
        color: 'from-green-500 to-emerald-500',
        core: '단순 반복 업무는 AI에게 맡겨 공무원의 업무 효율을 높이고, 24시간 중단 없는 지능형 대민 서비스를 제공합니다.',
        details: [
            {
                title: 'RAG 기반 지능형 챗봇',
                desc: '법령과 행정 편람을 학습한 LLM이 민원인의 의도를 파악하고 관련 규정을 근거로 정확한 답변을 생성합니다.'
            },
            {
                title: '디지털 소외계층 멀티모달 서비스',
                desc: '음성 인식(STT) 및 합성(TTS) 기술을 적용한 보이는 AI 비서로 노인, 장애인 등 누구나 쉽게 이용하도록 지원합니다.'
            }
        ]
    },
    {
        title: '온프레미스 기반 데이터 보안 강화',
        englishTitle: 'On-premise Security Framework',
        icon: Shield,
        color: 'from-gray-500 to-slate-500',
        core: '민감한 정보를 다루는 공공기관 특성에 맞춰, 데이터가 외부로 유출되지 않는 내부 구축형 소버린 AI(Sovereign AI) 전략을 실행합니다.',
        details: [
            {
                title: '보안 특화 경량화 모델 (sLLM)',
                desc: '내부망 서버에 최적화된 sLLM을 구축하여 데이터 주권을 확보하고 외부 해킹 위협을 원천 차단합니다.'
            },
            {
                title: '개인정보 자동 비식별화 파이프라인',
                desc: '주민번호 등 민감 정보를 AI가 자동 탐지하여 마스킹 처리함으로써 보안 컴플라이언스 이슈를 해결합니다.'
            }
        ]
    }
];

export default PublicSectorPage;
