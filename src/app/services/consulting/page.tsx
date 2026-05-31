'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Compass, Target, Lightbulb, TrendingUp, Shield, FileText,
    CheckCircle2, ArrowRight, Users, BarChart3, Clock, Award,
    Brain, Cpu, Database, Workflow
} from 'lucide-react';
import Link from 'next/link';

const ConsultingPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6 border border-blue-500/30">
                        AX Consulting Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            AI 전환(AX) 컨설팅
                        </span>
                        <br />
                        <span className="text-white text-3xl md:text-4xl">
                            성공적인 AI 도입을 위한 전문 파트너
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        26년간 축적된 WDLAB@2023-2026의 보안 컨설팅 노하우와 최신 AI 기술을 결합하여,
                        기업의 안전하고 효과적인 AI 전환을 체계적으로 지원합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact?type=consulting"
                            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all shadow-lg shadow-blue-900/30"
                        >
                            무료 상담 신청
                        </Link>
                        <Link 
                            href="/resources/whitepapers"
                            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-all"
                        >
                            컨설팅 백서 다운로드
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Key Statistics */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5-Stage Framework */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">5단계 AX 컨설팅 프레임워크</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        체계적인 방법론을 통해 AI 전략 수립부터 운영까지 전 과정을 지원합니다.
                    </p>
                </div>

                <div className="grid gap-8">
                    {consultingStages.map((stage, index) => (
                        <motion.div
                            key={stage.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${stage.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                            <div className="grid md:grid-cols-12 gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                                {/* Stage Number & Icon */}
                                <div className="md:col-span-2 flex md:flex-col items-center gap-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stage.iconBg}`}>
                                        <stage.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Stage</div>
                                        <div className="text-2xl font-bold text-white">{stage.id}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        <span className="text-blue-400">{stage.name}</span> - {stage.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{stage.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {stage.activities.map((activity, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Deliverables */}
                                <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-6">
                                    <div className="text-sm text-gray-500 mb-3 uppercase tracking-wider">Deliverables</div>
                                    <ul className="space-y-2">
                                        {stage.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Service Areas */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">핵심 컨설팅 영역</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        AI 전환의 모든 단계에서 전문적인 컨설팅 서비스를 제공합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${area.iconBg}`}>
                                <area.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{area.description}</p>
                            <ul className="space-y-2">
                                {area.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">왜 A3 AiNex 컨설팅인가?</h2>
                        <div className="space-y-6">
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">컨설팅 프로세스</h3>
                            <div className="space-y-4">
                                {processSteps.map((step, index) => (
                                    <div key={step} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 p-3 rounded-lg bg-white/5">{step}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-12 rounded-3xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30"
                >
                    <h2 className="text-3xl font-bold mb-4">AI 전환, 지금 시작하세요</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        무료 AI 성숙도 진단을 통해 귀사의 현재 위치와 발전 방향을 확인하세요.
                        전문 컨설턴트가 맞춤형 AI 전환 전략을 제안해 드립니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact?type=consulting"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all"
                        >
                            무료 상담 신청 <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/services/pricing"
                            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-all"
                        >
                            요금제 확인
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

// Data
const stats = [
    { value: '26+', label: '년 컨설팅 경험' },
    { value: '500+', label: '프로젝트 수행' },
    { value: '98%', label: '고객 만족도' },
    { value: '120+', label: '산업별 템플릿' },
];

const consultingStages = [
    {
        id: 1,
        name: 'Strategy',
        title: 'AI 비전 및 전략 수립',
        description: '고객사의 비즈니스 목표와 현황을 분석하여 AI 도입의 방향성과 전사적 전략을 수립합니다.',
        activities: ['AI 성숙도 진단', '기회 발굴 워크숍', '벤치마킹 분석', '전략 로드맵 수립'],
        deliverables: ['AI 성숙도 진단 보고서', '기회 분석 리포트', '3개년 전략 로드맵'],
        icon: Compass,
        iconBg: 'from-blue-500 to-cyan-500',
        gradient: 'from-blue-500/10 to-transparent',
    },
    {
        id: 2,
        name: 'Design',
        title: 'Use Case 및 아키텍처 설계',
        description: '우선순위가 높은 AI 과제를 선정하고, 구체적인 시스템 아키텍처와 거버넌스 체계를 설계합니다.',
        activities: ['Use Case 정의', '아키텍처 설계', '거버넌스 프레임워크', 'ROI 분석'],
        deliverables: ['상세 요건 정의서', '아키텍처 설계서', 'ISO 42001 거버넌스 가이드'],
        icon: Target,
        iconBg: 'from-purple-500 to-pink-500',
        gradient: 'from-purple-500/10 to-transparent',
    },
    {
        id: 3,
        name: 'Build',
        title: '플랫폼 및 솔루션 구축',
        description: 'PoC를 통해 기술 검증을 수행하고, AI 플랫폼과 개별 솔루션을 구축합니다.',
        activities: ['PoC/Pilot 수행', '플랫폼 구축', '모델 개발/통합', '품질 검증'],
        deliverables: ['PoC 결과 보고서', '플랫폼 구축 완료', 'AI 모델 배포'],
        icon: Lightbulb,
        iconBg: 'from-amber-500 to-orange-500',
        gradient: 'from-amber-500/10 to-transparent',
    },
    {
        id: 4,
        name: 'Scale',
        title: '파일럿 운영 및 전사 확산',
        description: '파일럿 운영을 통해 현업 적합성을 검증하고, 성공 사례를 전사적으로 확산합니다.',
        activities: ['파일럿 운영', '성과 측정', '변화 관리', '전사 확산 계획'],
        deliverables: ['파일럿 결과 보고서', '확산 계획서', '사용자 교육 자료'],
        icon: TrendingUp,
        iconBg: 'from-emerald-500 to-teal-500',
        gradient: 'from-emerald-500/10 to-transparent',
    },
    {
        id: 5,
        name: 'Operate',
        title: '운영 최적화 및 지속 개선',
        description: 'AI 시스템의 지속적인 모니터링과 개선을 통해 장기적인 가치를 창출합니다.',
        activities: ['성과 모니터링', 'MLOps 운영', '지속 개선', '거버넌스 관리'],
        deliverables: ['모니터링 대시보드', '개선 로드맵', '거버넌스 리포트'],
        icon: Shield,
        iconBg: 'from-rose-500 to-red-500',
        gradient: 'from-rose-500/10 to-transparent',
    },
];

const serviceAreas = [
    {
        title: 'AI 성숙도 진단',
        description: 'CMMI 기반 5단계 성숙도 모델을 활용하여 조직의 AI 준비도를 객관적으로 평가합니다.',
        features: ['4대 영역 평가 (전략/조직/데이터/기술)', 'Gap 분석 및 개선 권고', '벤치마킹 리포트'],
        icon: BarChart3,
        iconBg: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Use Case 발굴',
        description: '120+ 산업별 AI 적용 템플릿을 활용하여 최적의 AI 활용 기회를 발굴합니다.',
        features: ['가치-실행 용이성 매트릭스', '우선순위 결정 지원', 'Quick Win 과제 선정'],
        icon: Lightbulb,
        iconBg: 'from-amber-500 to-orange-500',
    },
    {
        title: 'ROI/TCO 분석',
        description: '체계적인 재무 분석을 통해 AI 투자의 타당성과 예상 효과를 검증합니다.',
        features: ['NPV, IRR, Payback Period', '시나리오별 비용 분석', '리스크 조정 수익률'],
        icon: TrendingUp,
        iconBg: 'from-emerald-500 to-teal-500',
    },
    {
        title: 'AI 거버넌스 설계',
        description: 'ISO 42001 기반의 AI 관리 체계를 구축하여 안전하고 신뢰할 수 있는 AI 운영을 보장합니다.',
        features: ['ISO 42001 AIMS 체크리스트', '리스크 관리 프레임워크', 'AI 윤리 가이드라인'],
        icon: Shield,
        iconBg: 'from-purple-500 to-pink-500',
    },
    {
        title: '아키텍처 설계',
        description: '확장성과 보안을 고려한 엔터프라이즈급 AI 시스템 아키텍처를 설계합니다.',
        features: ['하이브리드 클라우드 설계', 'MLOps 파이프라인', '데이터 레이크 설계'],
        icon: Cpu,
        iconBg: 'from-indigo-500 to-blue-500',
    },
    {
        title: '변화 관리',
        description: 'AI 도입에 따른 조직 변화를 체계적으로 관리하여 성공적인 정착을 지원합니다.',
        features: ['이해관계자 분석', '교육 프로그램 설계', '성과 관리 체계'],
        icon: Users,
        iconBg: 'from-rose-500 to-red-500',
    },
];

const whyChooseUs = [
    {
        title: '26년 보안 전문성',
        description: 'WDLAB@2023-2026의 정보보호 컨설팅 노하우를 바탕으로 안전한 AI 시스템을 구축합니다.',
        icon: Shield,
    },
    {
        title: 'ISO 국제 표준 기반',
        description: 'ISO 42001, 23053 등 국제 표준에 기반한 체계적인 컨설팅 방법론을 적용합니다.',
        icon: Award,
    },
    {
        title: '산업별 전문 컨설턴트',
        description: '금융, 제조, 의료 등 각 산업 분야의 도메인 전문가가 맞춤형 컨설팅을 제공합니다.',
        icon: Users,
    },
    {
        title: 'End-to-End 서비스',
        description: '전략 수립부터 구축, 운영까지 AI 전환의 전 과정을 원스톱으로 지원합니다.',
        icon: Workflow,
    },
];

const processSteps = [
    '초기 상담 및 요구사항 파악',
    '제안서 작성 및 범위 협의',
    '킥오프 미팅 및 착수',
    '현황 분석 및 진단',
    '전략/설계 수립',
    '중간 보고 및 피드백',
    '최종 산출물 납품',
    '후속 지원 및 모니터링',
];

export default ConsultingPage;
