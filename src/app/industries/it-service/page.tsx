'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, BookOpen, Activity, Code2, ArrowRight, Zap, CheckCircle2, Lock, Eye, Terminal } from 'lucide-react';
import Link from 'next/link';

const ITServicePage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-400 text-sm mb-6 border border-indigo-500/30">
                        IT Service Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
                            IT 서비스 (IT Service)
                        </span>
                        <br />
                        AI 엔지니어링 & AIOps
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        개발자의 생산성을 혁신하고, 장애를 스스로 예방하고 복구하는 자율 운영 시스템을 구축합니다.
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
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-transparent rounded-3xl -z-10 group-hover:from-indigo-900/20 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
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
                                            <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                                            주요 기능 및 세부 내용
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
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
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">IT 서비스 AX 구축을 위한 핵심 고려사항</h2>
                            <p className="text-xl text-gray-400">Key Implementation Strategy</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                                    <Lock className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">지적 재산권(IP) 보호</h3>
                                <p className="text-gray-400 text-sm">
                                    소스 코드 유출 방지를 위해 Private LLM을 구축하거나 Zero-data retention 옵션을 철저히 적용해야 합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                                    <Eye className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">코드 품질 검증</h3>
                                <p className="text-gray-400 text-sm">
                                    AI가 생성한 코드의 버그나 환각을 방지하기 위해 인간 검증(Human-in-the-loop)과 CI/CD 파이프라인 검증이 필수입니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Terminal className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">개발 문화의 변화</h3>
                                <p className="text-gray-400 text-sm">
                                    AI 도구를 단순한 툴이 아닌 강력한 협업 도구로 인식하도록 개발자 교육과 문화적인 변화 관리가 필요합니다.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg hover:shadow-indigo-500/25">
                                IT AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
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
        title: '코드 생성 및 개발 생산성 향상',
        englishTitle: 'AI-Powered Engineering',
        icon: Code2,
        color: 'from-violet-500 to-purple-500',
        core: '개발자의 단순 반복 업무를 제거하고 AI와 협업하는 환경을 구축하여, 고부가가치 아키텍처 설계와 비즈니스 로직에 집중하게 합니다.',
        details: [
            {
                title: 'AI 코딩 어시스턴트 (Copilot)',
                desc: '자연어로 코드를 생성하고, 레거시 코드를 현대화하거나 리팩토링하여 유지보수성을 높입니다.'
            },
            {
                title: '테스트 코드 및 보안 취약점 자동 탐지',
                desc: '단위 테스트 코드를 자동 생성하고, 개발 단계에서 보안 취약점(SQL 인젝션 등)을 실시간으로 탐지합니다.'
            }
        ]
    },
    {
        title: '기술 문서 자동화 및 지식 관리',
        englishTitle: 'Knowledge Management Automation',
        icon: BookOpen,
        color: 'from-blue-500 to-indigo-500',
        core: '소홀해지기 쉬운 문서화 작업을 자동화하고, 프로젝트 파편화로 인한 지식의 단절을 막아 조직의 자산으로 관리합니다.',
        details: [
            {
                title: '코드 기반 문서 자동 생성 (Doc-as-Code)',
                desc: '코드 변경을 감지하여 API 명세서, 릴리스 노트 등을 자동 업데이트하여 문서와 코드의 싱크를 맞춥니다.'
            },
            {
                title: '사내 지식 검색 시스템 (Enterprise RAG)',
                desc: 'Jira, Wiki, Slack 등에 흩어진 히스토리를 벡터 DB화하여, 질문 시 과거 해결 방법과 담당자를 찾아줍니다.'
            }
        ]
    },
    {
        title: '장애 탐지 및 자동 복구 시스템',
        englishTitle: 'AIOps & Self-Healing',
        icon: Activity,
        color: 'from-cyan-500 to-blue-500',
        core: '장애 발생 후 대응하는 것이 아니라, AI가 이상 징후를 감지하여 예방하고 발생 시 스스로 복구하는 자율 운영 체계입니다.',
        details: [
            {
                title: '이상 징후 예측 및 근본 원인 분석 (RCA)',
                desc: '로그/메트릭을 분석하여 장애 징후를 예측하고, 장애 시 근본 원인이 되는 에러 로그를 즉시 찾아냅니다.'
            },
            {
                title: '자동 복구 스크립트 실행',
                desc: '장애 패턴 감지 시 서비스 재시작, 트래픽 우회, 롤백 등의 조치를 자동 수행하여 다운타임을 최소화합니다.'
            }
        ]
    }
];

export default ITServicePage;
