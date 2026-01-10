'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Building2, Stethoscope, ShoppingCart, Landmark, Laptop, ArrowRight, Table2, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const IndustriesPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        산업별 AI 솔루션
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        제조부터 금융, 공공까지. 각 산업에 최적화된 AiNex의 맞춤형 전략을 만나보세요.
                    </p>
                </motion.div>
            </section>

            {/* Industries Grid */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${industry.color}`}>
                                <industry.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                            <ul className="space-y-3 mb-8">
                                {industry.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={industry.href || '#'}
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium inline-block"
                            >
                                자세히 보기 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Industry AX Matrix Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">산업별 핵심 AX 솔루션 매트릭스</h2>
                    <p className="text-xl text-gray-400">Industry AX Solutions Matrix</p>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="min-w-[1200px] border border-white/10 rounded-2xl overflow-hidden bg-[#111]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10">
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[15%]">산업 분야</th>
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[15%]">핵심 가치</th>
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[20%]">AX 솔루션 1 (운영/분석)</th>
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[20%]">AX 솔루션 2 (서비스/경험)</th>
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[20%]">AX 솔루션 3 (보안/인프라)</th>
                                    <th className="p-6 font-bold text-gray-300 uppercase text-sm tracking-wider w-[10%]">Keywords</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {matrixData.map((row, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-bold text-white border-r border-white/5 bg-white/[0.02]">
                                            <div className="flex items-center gap-3">
                                                <row.icon className={`w-5 h-5 ${row.iconColor}`} />
                                                {row.industry}
                                            </div>
                                        </td>
                                        <td className="p-6 text-gray-300 border-r border-white/5">
                                            <div className="font-semibold text-white mb-1">{row.coreValue.title}</div>
                                            <div className="text-sm text-gray-500">{row.coreValue.sub}</div>
                                        </td>
                                        <td className="p-6 text-gray-400 border-r border-white/5">
                                            <div className="font-medium text-blue-300 mb-1">{row.sol1.title}</div>
                                            <div className="text-sm">{row.sol1.desc}</div>
                                        </td>
                                        <td className="p-6 text-gray-400 border-r border-white/5">
                                            <div className="font-medium text-purple-300 mb-1">{row.sol2.title}</div>
                                            <div className="text-sm">{row.sol2.desc}</div>
                                        </td>
                                        <td className="p-6 text-gray-400 border-r border-white/5">
                                            <div className="font-medium text-green-300 mb-1">{row.sol3.title}</div>
                                            <div className="text-sm">{row.sol3.desc}</div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex flex-wrap gap-2">
                                                {row.keywords.map((kw, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 whitespace-nowrap">
                                                        {kw}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Key Takeaways */}
            <section className="container mx-auto px-4 mb-24">
                <div className="rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                            <Lightbulb className="w-8 h-8 text-yellow-500" />
                            산업 간 공통 트렌드 (Key Takeaways)
                        </h2>
                        <p className="text-gray-400">모든 산업을 관통하는 AX의 핵심 방향성입니다.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {keyTakeaways.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-[#111] p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <div className="rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">
                        귀사의 산업에 맞는 AI 전략이 필요하신가요?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                        AiNex 전문가와 상담하여 산업 특화 AI 솔루션 도입 가능성을 진단해보세요.
                    </p>
                    <Link href="/contact" className="relative z-10 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-blue-500/25 inline-block">
                        상담 신청하기
                    </Link>
                </div>
            </section>
        </div>
    );
};

const industries = [
    {
        title: '제조업 (Manufacturing)',
        icon: Factory,
        color: 'from-orange-500/20 to-red-500/20',
        features: [
            '스마트 팩토리 최적화 전략',
            '설비 예지 보전 (Predictive Maintenance)',
            '품질 관리 자동화 및 불량률 감소',
        ],
        href: '/industries/manufacturing',
    },
    {
        title: '금융업 (Finance)',
        icon: Landmark,
        color: 'from-green-500/20 to-emerald-500/20',
        features: [
            '리스크 관리 및 사기 탐지 시스템',
            '규제 준수(Compliance) 자동화',
            '고객 맞춤형 금융 상품 추천',
        ],
        href: '/industries/finance',
    },
    {
        title: '의료/헬스케어',
        icon: Stethoscope,
        color: 'from-blue-500/20 to-cyan-500/20',
        features: [
            'AI 기반 진단 보조 시스템',
            '의료 데이터 분석 및 질병 예측',
            'HIPAA / 개인정보보호 규정 준수',
        ],
        href: '/industries/healthcare',
    },
    {
        title: '유통/물류',
        icon: ShoppingCart,
        color: 'from-purple-500/20 to-pink-500/20',
        features: [
            '수요 예측 및 재고 최적화',
            '고객 행동 분석 및 초개인화 마케팅',
            '물류 경로 최적화 및 배송 효율화',
        ],
        href: '/industries/retail',
    },
    {
        title: '공공기관',
        icon: Building2,
        color: 'from-slate-500/20 to-gray-500/20',
        features: [
            '정책 데이터 분석 및 의사결정 지원',
            '대민 서비스 자동화 (AI 민원 챗봇)',
            '온프레미스 기반 데이터 보안 강화',
        ],
        href: '/industries/public-sector',
    },
    {
        title: 'IT 서비스',
        icon: Laptop,
        color: 'from-indigo-500/20 to-violet-500/20',
        features: [
            '코드 생성 및 개발 생산성 향상',
            '기술 문서 자동화 및 지식 관리',
            '장애 탐지 및 자동 복구 시스템',
        ],
        href: '/industries/it-service',
    },
];

const matrixData = [
    {
        industry: '제조업',
        icon: Factory,
        iconColor: 'text-orange-400',
        coreValue: { title: '생산성 극대화', sub: '& 무결점 품질' },
        sol1: { title: '설비 예지 보전', desc: '고장 사전 예측 및 다운타임 최소화. 설비 수명 연장.' },
        sol2: { title: '스마트 팩토리 최적화', desc: '4M 데이터 분석 및 공정 자동 제어. 생산 효율 극대화.' },
        sol3: { title: '품질 관리 자동화', desc: '비전 AI를 통한 미세 불량 검출 및 불량률 획기적 감소.' },
        keywords: ['Predictive Maintenance', 'Machine Vision', 'Digital Twin']
    },
    {
        industry: '금융업',
        icon: Landmark,
        iconColor: 'text-emerald-400',
        coreValue: { title: '신뢰성 확보', sub: '& 초개인화' },
        sol1: { title: '리스크 관리 & FDS', desc: '이상 거래(사기) 실시간 탐지(AI-FDS) 및 선제적 차단.' },
        sol2: { title: '초개인화 상품 추천', desc: '마이데이터 기반 자산 분석 및 1:1 맞춤형 포트폴리오 제안.' },
        sol3: { title: '규제 준수 (RegTech)', desc: 'AML(자금세탁방지), KYC 자동화 및 실시간 규제 모니터링.' },
        keywords: ['FDS', 'AML', 'Robo-Advisor', 'XAI']
    },
    {
        industry: '의료/헬스케어',
        icon: Stethoscope,
        iconColor: 'text-cyan-400',
        coreValue: { title: '정밀 진단', sub: '& 프라이버시' },
        sol1: { title: '질병 예측 및 분석', desc: '바이탈/유전체 데이터 분석을 통한 질병 발병 예측 및 신약 개발.' },
        sol2: { title: 'AI 진단 보조 (CDSS)', desc: '의료 영상(X-ray, CT) 판독 자동화 및 진료 기록 생성 자동화.' },
        sol3: { title: 'HIPAA/개인정보 보호', desc: '연합 학습 및 데이터 자동 비식별화를 통한 환자 정보 보호.' },
        keywords: ['CDSS', 'Federated Learning', 'Medical Imaging']
    },
    {
        industry: '유통/물류',
        icon: ShoppingCart,
        iconColor: 'text-purple-400',
        coreValue: { title: '속도 혁신', sub: '& 재고 최적화' },
        sol1: { title: '수요 예측 & 재고 관리', desc: '날씨 등 외부 변수 통합 분석 및 자동 발주 시스템(Auto-Ordering).' },
        sol2: { title: '초개인화 마케팅', desc: '실시간 고객 행동 기반 타겟팅 및 AI 마케팅 콘텐츠 생성.' },
        sol3: { title: '물류 경로 최적화', desc: '실시간 교통 반영 동적 라우팅 및 스마트 풀필먼트 센터 운영.' },
        keywords: ['Demand Forecasting', 'Route Optimization', 'Hyper-personalization']
    },
    {
        industry: '공공기관',
        icon: Building2,
        iconColor: 'text-slate-400',
        coreValue: { title: '공정성/투명성', sub: '& 행정 효율' },
        sol1: { title: '데이터 기반 정책', desc: '디지털 트윈 기반 정책 시뮬레이션 및 복지 사각지대 발굴.' },
        sol2: { title: '대민 서비스 자동화', desc: 'RAG 기반 AI 민원 챗봇(법령/규정 근거) 및 멀티모달 서비스.' },
        sol3: { title: '온프레미스 보안', desc: '내부망 sLLM 구축 및 데이터 주권(Sovereign AI) 확보.' },
        keywords: ['Sovereign AI', 'On-premise', 'RAG']
    },
    {
        industry: 'IT 서비스',
        icon: Laptop,
        iconColor: 'text-indigo-400',
        coreValue: { title: '개발 생산성', sub: '& 운영 안정성' },
        sol1: { title: '장애 탐지 및 자동 복구', desc: 'AIOps 기반 로그 원인 분석(RCA) 및 장애 자동 복구(Self-Healing).' },
        sol2: { title: '코드 생성 및 생산성', desc: 'AI Copilot 기반 코딩 보조, 레거시 코드 현대화 및 리팩토링.' },
        sol3: { title: '기술 문서 자동화', desc: '코드 변경 감지 기반 API 문서 자동 생성 및 사내 지식 관리.' },
        keywords: ['AIOps', 'Copilot', 'DevEx', 'RCA']
    }
];

const keyTakeaways = [
    {
        title: '예측과 선제 대응 (Predictive)',
        desc: '모든 산업이 사후 대응(Reactive)에서 데이터 기반의 사전 예측(Predictive)으로 이동하고 있습니다. 설비 고장, 질병, 수요, 시스템 장애 등 미래를 먼저 내다보고 대응합니다.',
        icon: Zap,
        gradient: 'from-orange-500 to-red-500'
    },
    {
        title: '초개인화 (Hyper-Personalization)',
        desc: '금융, 유통뿐만 아니라 의료와 공공 서비스에서도 사용자 개개인의 맥락(Context)을 이해하고, 그에 딱 맞는 맞춤형 서비스를 제공하는 것이 핵심 경쟁력입니다.',
        icon: Lightbulb,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: '보안과 신뢰 (Security & Trust)',
        desc: 'AI 도입이 가속화될수록 데이터 프라이버시(의료, 금융)와 데이터 주권(공공)이 중요해집니다. 온프레미스, 연합 학습, 비식별화 기술은 선택이 아닌 필수입니다.',
        icon: ShieldCheck,
        gradient: 'from-blue-500 to-cyan-500'
    }
];

export default IndustriesPage;
