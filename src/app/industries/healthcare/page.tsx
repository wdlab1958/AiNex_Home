'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, ShieldCheck, HeartPulse, ArrowRight, Zap, CheckCircle2, Lock, Microscope, FileText } from 'lucide-react';
import Link from 'next/link';

const HealthcarePage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm mb-6 border border-cyan-500/30">
                        Healthcare Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                            의료/헬스케어 (Healthcare)
                        </span>
                        <br />
                        AI 진단 및 보안 전략
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        의료진의 경험을 보조하는 지능형 의료 비서와 정밀 의료, 그리고 완벽한 데이터를 보호하는 AI 시스템을 구축합니다.
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
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-transparent rounded-3xl -z-10 group-hover:from-cyan-900/20 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
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
                                            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                            주요 기능 및 세부 내용
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
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
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">헬스케어 AX 구축을 위한 핵심 고려사항</h2>
                            <p className="text-xl text-gray-400">Key Implementation Strategy</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Stethoscope className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Co-pilot 역할 명확화</h3>
                                <p className="text-gray-400 text-sm">
                                    AI는 의사를 대체하는 것이 아니라, 최종 판단을 돕는 부조종사(Co-pilot) 역할임을 명시하여 의료진의 수용성을 높여야 합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                                    <FileText className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">데이터 상호운용성</h3>
                                <p className="text-gray-400 text-sm">
                                    병원마다 제각각인 데이터 표준(HL7, FHIR 등)을 통합하고 정제하여 AI가 학습 가능한 형태로 만드는 파이프라인이 필요합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">윤리적 AI 검증</h3>
                                <p className="text-gray-400 text-sm">
                                    AI 모델이 특정 인종이나 성별에 편향된 진단을 내리지 않도록 지속적인 편향성 검증과 모니터링이 필수적입니다.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg hover:shadow-cyan-500/25">
                                헬스케어 AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
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
        title: 'AI 기반 진단 보조 시스템',
        englishTitle: 'AI-CDSS',
        icon: Stethoscope,
        color: 'from-blue-500 to-cyan-500',
        core: '의료진의 경험에 의존하던 진단 과정을 AI가 보조하여 오진율을 획기적으로 낮추고, 진단의 효율성을 극대화하는 지능형 의료 비서 구축입니다.',
        details: [
            {
                title: '의료 영상 판독 자동화',
                desc: 'X-ray, CT, MRI 등을 AI가 분석하여 이상 부위를 히트맵으로 표시하고, 미세한 초기 병변을 탐지하여 조기 진단율을 높입니다.'
            },
            {
                title: '생성형 AI 기반 진료 기록 요약',
                desc: '의사와 환자의 대화 내용을 AI가 실시간 인식하여 EMR에 구조화된 텍스트로 자동 저장, 행정 업무를 줄여줍니다.'
            }
        ]
    },
    {
        title: '의료 데이터 분석 및 질병 예측',
        englishTitle: 'Predictive Analytics',
        icon: Activity,
        color: 'from-teal-500 to-emerald-500',
        core: '과거의 진료 기록과 실시간 생체 데이터를 분석하여 발병 가능성을 미리 예측하고, 환자 개개인에게 최적화된 치료법을 제시하는 정밀 의료의 실현입니다.',
        details: [
            {
                title: '질병 발병 및 위급 상황 예측',
                desc: '바이탈 사인과 EMR 분석으로 패혈증, 심정지 등 위급 상황을 예측하고, 유전체/생활습관 데이터로 만성 질환 위험도를 예측합니다.'
            },
            {
                title: '신약 개발 가속화 (AI Drug Discovery)',
                desc: '방대한 화합물 데이터베이스를 분석하여 신약 후보 물질을 발굴하고 시뮬레이션하여 개발 기간과 비용을 단축합니다.'
            }
        ]
    },
    {
        title: 'HIPAA / 개인정보보호 규정 준수',
        englishTitle: 'Privacy Preserving AI',
        icon: Lock,
        color: 'from-indigo-500 to-violet-500',
        core: '민감한 환자 데이터를 외부 유출 없이 안전하게 활용하기 위해, 규제(HIPAA, GDPR)를 기술적으로 준수하는 보안 내재화 AI 시스템을 구축합니다.',
        details: [
            {
                title: '연합 학습 (Federated Learning)',
                desc: '데이터를 중앙으로 모으지 않고 각 병원 내부에서 학습 후 가중치만 공유하여 프라이버시 침해를 원천 차단합니다.'
            },
            {
                title: '자동 비식별화 및 가명화',
                desc: '이름, 주민번호 등 개인 식별 정보를 AI가 자동 탐지하여 마스킹하거나 가상의 데이터로 대체하여 안전한 활용을 지원합니다.'
            }
        ]
    }
];

export default HealthcarePage;
