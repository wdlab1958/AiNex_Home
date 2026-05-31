'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    GraduationCap, HeadphonesIcon, BookOpen, Video, Users, Clock,
    CheckCircle2, ArrowRight, MessageSquare, Phone, Mail, FileText,
    Award, Laptop, Building, Zap, Calendar, Globe, Shield, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const SupportPage = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'support'>('education');

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6 border border-purple-500/30">
                        Education & Support
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                            교육 & 기술 지원
                        </span>
                        <br />
                        <span className="text-white text-3xl md:text-4xl">
                            AI 전환 성공을 위한 동반자
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        체계적인 교육 프로그램과 전문 기술 지원을 통해
                        고객사의 AI 역량 강화와 플랫폼 안정 운영을 지원합니다.
                    </p>
                </motion.div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                            activeTab === 'education'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        <GraduationCap className="w-5 h-5" />
                        교육 프로그램
                    </button>
                    <button
                        onClick={() => setActiveTab('support')}
                        className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                            activeTab === 'support'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                    >
                        <HeadphonesIcon className="w-5 h-5" />
                        기술 지원
                    </button>
                </div>
            </section>

            {/* Education Section */}
            {activeTab === 'education' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Education Programs */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">교육 프로그램</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                경영진부터 실무자까지, 역할에 맞는 맞춤형 교육 프로그램을 제공합니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {educationPrograms.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${program.iconBg}`}>
                                        <program.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${program.levelColor}`}>
                                            {program.level}
                                        </span>
                                        <span className="text-sm text-gray-500">{program.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{program.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {program.topics.map((topic, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <span className="text-sm text-gray-500">대상: {program.target}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education Formats */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">교육 방식</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                고객사의 환경과 요구에 맞는 다양한 교육 방식을 제공합니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {educationFormats.map((format, index) => (
                                <motion.div
                                    key={format.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                        <format.icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="font-bold mb-2">{format.title}</h3>
                                    <p className="text-sm text-gray-400">{format.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Certification */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">수료증 & 자격증</h2>
                                <p className="text-gray-400 mb-8">
                                    교육 과정 수료 시 WDLAB@2023-2026 공인 수료증을 발급하며,
                                    고급 과정 이수자에게는 AiNex Certified Professional 자격을 부여합니다.
                                </p>
                                <div className="space-y-4">
                                    {certificationBenefits.map((benefit, index) => (
                                        <div key={benefit} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                            <span className="text-gray-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {certificationLevels.map((level, index) => (
                                    <div 
                                        key={level.name}
                                        className={`p-6 rounded-xl border text-center ${level.highlight ? 'bg-purple-500/10 border-purple-500/50' : 'bg-white/5 border-white/10'}`}
                                    >
                                        <Award className={`w-10 h-10 mx-auto mb-3 ${level.highlight ? 'text-purple-400' : 'text-gray-400'}`} />
                                        <div className="font-bold mb-1">{level.name}</div>
                                        <div className="text-sm text-gray-400">{level.requirement}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </section>
                </motion.div>
            )}

            {/* Support Section */}
            {activeTab === 'support' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Support Plans */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">기술 지원 플랜</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                플랜별로 차별화된 기술 지원 서비스를 제공합니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {supportPlans.map((plan, index) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative p-8 rounded-2xl border ${
                                        plan.featured 
                                            ? 'bg-gradient-to-b from-purple-900/30 to-transparent border-purple-500/50' 
                                            : 'bg-white/5 border-white/10'
                                    }`}
                                >
                                    {plan.featured && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-xs font-bold uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 mb-6">{plan.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                                <span className="text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Clock className="w-4 h-4" />
                                            응답 시간: {plan.responseTime}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Support Channels */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">지원 채널</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                다양한 채널을 통해 신속하고 정확한 기술 지원을 받으실 수 있습니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {supportChannels.map((channel, index) => (
                                <motion.div
                                    key={channel.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all text-center"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                                        <channel.icon className="w-7 h-7 text-purple-400" />
                                    </div>
                                    <h3 className="font-bold mb-2">{channel.title}</h3>
                                    <p className="text-sm text-gray-400 mb-3">{channel.description}</p>
                                    <div className="text-sm text-purple-400">{channel.availability}</div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Support Services */}
                    <section className="container mx-auto px-4 mb-24">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">지원 서비스</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                플랫폼 운영의 모든 단계에서 전문적인 기술 지원을 제공합니다.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {supportServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${service.iconBg}`}>
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                                            <ul className="space-y-2">
                                                {service.items.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
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
                </motion.div>
            )}

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-12 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30"
                >
                    <h2 className="text-3xl font-bold mb-4">
                        {activeTab === 'education' ? '교육 프로그램 문의' : '기술 지원 문의'}
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        {activeTab === 'education' 
                            ? '맞춤형 교육 프로그램 설계 및 일정 상담을 원하시면 문의해 주세요.'
                            : '기술 지원 플랜 선택 및 상담을 원하시면 문의해 주세요.'
                        }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href={`/contact?type=${activeTab}`}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 font-semibold transition-all"
                        >
                            문의하기 <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/resources/faq"
                            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-all"
                        >
                            FAQ 확인하기
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

// Data
const educationPrograms = [
    {
        title: 'AI 전략 리더십',
        description: '경영진을 위한 AI 전략 수립 및 의사결정 역량 강화 교육',
        level: 'Executive',
        levelColor: 'bg-amber-500/20 text-amber-400',
        duration: '1일 (8시간)',
        target: '임원/C-Level',
        icon: Lightbulb,
        iconBg: 'from-amber-500 to-orange-500',
        topics: ['AI 트렌드 및 비즈니스 임팩트', 'AI 전략 수립 프레임워크', 'AI 투자 의사결정', 'AI 거버넌스 이해'],
    },
    {
        title: 'AI 프로젝트 매니지먼트',
        description: 'AI 프로젝트의 기획, 실행, 관리 역량을 배양하는 과정',
        level: 'Advanced',
        levelColor: 'bg-purple-500/20 text-purple-400',
        duration: '2일 (16시간)',
        target: 'PM/PL/기획자',
        icon: Users,
        iconBg: 'from-purple-500 to-pink-500',
        topics: ['AI 프로젝트 라이프사이클', 'Use Case 정의 및 우선순위화', 'ROI 분석 및 리스크 관리', '변화 관리 전략'],
    },
    {
        title: 'AiNex 플랫폼 실습',
        description: 'AiNex 플랫폼의 핵심 기능을 실습을 통해 학습하는 과정',
        level: 'Intermediate',
        levelColor: 'bg-blue-500/20 text-blue-400',
        duration: '3일 (24시간)',
        target: '개발자/운영자',
        icon: Laptop,
        iconBg: 'from-blue-500 to-cyan-500',
        topics: ['플랫폼 아키텍처 이해', 'Agent 개발 실습', 'RAG 시스템 구축', 'API 활용 및 연동'],
    },
    {
        title: 'AgentForge 개발자 과정',
        description: '멀티 에이전트 시스템 개발을 위한 심화 교육 과정',
        level: 'Advanced',
        levelColor: 'bg-purple-500/20 text-purple-400',
        duration: '5일 (40시간)',
        target: '개발자',
        icon: Building,
        iconBg: 'from-emerald-500 to-teal-500',
        topics: ['LangGraph/CrewAI 활용', 'Agent Mesh 설계', 'Tool Integration', 'Performance 최적화'],
    },
    {
        title: 'AI 거버넌스 실무',
        description: 'ISO 42001 기반 AI 거버넌스 체계 구축 및 운영 교육',
        level: 'Advanced',
        levelColor: 'bg-purple-500/20 text-purple-400',
        duration: '2일 (16시간)',
        target: '거버넌스 담당자',
        icon: Shield,
        iconBg: 'from-rose-500 to-red-500',
        topics: ['ISO 42001 요구사항 해설', 'AIMS 체크리스트 활용', '리스크 평가 실습', '감사 대응 준비'],
    },
    {
        title: 'AI 보안 전문가',
        description: 'AI 시스템의 보안 위협과 대응 방안을 학습하는 과정',
        level: 'Expert',
        levelColor: 'bg-red-500/20 text-red-400',
        duration: '3일 (24시간)',
        target: '보안 담당자',
        icon: Shield,
        iconBg: 'from-indigo-500 to-blue-500',
        topics: ['AI 보안 위협 유형', 'Prompt Injection 대응', '모델 보안 및 프라이버시', '보안 모니터링 체계'],
    },
];

const educationFormats = [
    {
        title: '온사이트 교육',
        description: '고객사 현장에서 진행하는 맞춤형 대면 교육',
        icon: Building,
    },
    {
        title: '온라인 라이브',
        description: '실시간 화상 강의로 진행하는 양방향 교육',
        icon: Video,
    },
    {
        title: 'VOD 학습',
        description: '언제 어디서나 수강 가능한 동영상 교육',
        icon: Laptop,
    },
    {
        title: '워크숍',
        description: '실습 중심의 참여형 그룹 워크숍',
        icon: Users,
    },
];

const certificationBenefits = [
    '교육 과정 수료 시 WDLAB@2023-2026 공인 수료증 발급',
    '고급 과정 이수자 AiNex Certified Professional 자격 부여',
    '자격 보유자 전용 커뮤니티 및 네트워킹 기회',
    '연간 재인증을 통한 자격 유지 및 역량 업데이트',
];

const certificationLevels = [
    { name: 'Foundation', requirement: '기본 과정 수료', highlight: false },
    { name: 'Professional', requirement: '심화 과정 수료', highlight: true },
    { name: 'Expert', requirement: '전문가 과정 수료', highlight: false },
    { name: 'Master', requirement: '마스터 과정 수료', highlight: true },
];

const supportPlans = [
    {
        name: 'Standard',
        description: 'Starter 플랜 고객을 위한 기본 지원',
        features: [
            '이메일 기술 지원',
            '온라인 문서 및 FAQ',
            '커뮤니티 포럼 접근',
            '월간 뉴스레터',
        ],
        responseTime: '영업일 기준 48시간 이내',
        featured: false,
    },
    {
        name: 'Priority',
        description: 'Professional 플랜 고객을 위한 우선 지원',
        features: [
            '이메일 + 전화 지원',
            '우선 티켓 처리',
            '전담 기술 매니저',
            '분기별 리뷰 미팅',
            '원격 트러블슈팅',
        ],
        responseTime: '영업일 기준 24시간 이내',
        featured: true,
    },
    {
        name: 'Premium',
        description: 'Enterprise 플랜 고객을 위한 프리미엄 지원',
        features: [
            '24/7 핫라인 지원',
            '온사이트 엔지니어 파견',
            '전담 TAM (Technical Account Manager)',
            '월간 성과 리뷰',
            'SLA 보장 (99.9%)',
            '긴급 패치 우선 적용',
        ],
        responseTime: '긴급 4시간 / 일반 8시간 이내',
        featured: false,
    },
];

const supportChannels = [
    {
        title: '이메일 지원',
        description: '기술 문의 및 일반 상담',
        availability: '24시간 접수',
        icon: Mail,
    },
    {
        title: '전화 지원',
        description: '긴급 기술 지원 및 상담',
        availability: '평일 09:00-18:00',
        icon: Phone,
    },
    {
        title: '온라인 채팅',
        description: '실시간 기술 문의',
        availability: '평일 09:00-18:00',
        icon: MessageSquare,
    },
    {
        title: '기술 문서',
        description: '가이드 및 튜토리얼',
        availability: '24시간 이용 가능',
        icon: FileText,
    },
];

const supportServices = [
    {
        title: '기술 컨설팅',
        description: '플랫폼 최적화 및 아키텍처 개선을 위한 전문 컨설팅',
        icon: Lightbulb,
        iconBg: 'from-amber-500 to-orange-500',
        items: ['아키텍처 리뷰', '성능 최적화 권고', '보안 강화 방안', '확장성 설계'],
    },
    {
        title: '장애 대응',
        description: '시스템 장애 발생 시 신속한 원인 분석 및 복구 지원',
        icon: Zap,
        iconBg: 'from-red-500 to-rose-500',
        items: ['24/7 모니터링', '긴급 장애 대응', '원인 분석 보고서', '재발 방지 대책'],
    },
    {
        title: '업그레이드 지원',
        description: '플랫폼 업그레이드 및 마이그레이션 기술 지원',
        icon: Calendar,
        iconBg: 'from-blue-500 to-cyan-500',
        items: ['업그레이드 계획 수립', '테스트 환경 지원', '마이그레이션 가이드', '롤백 계획'],
    },
    {
        title: '운영 지원',
        description: '플랫폼 안정 운영을 위한 지속적인 기술 지원',
        icon: Globe,
        iconBg: 'from-emerald-500 to-teal-500',
        items: ['정기 점검', '성능 모니터링', '보안 패치 적용', '용량 관리'],
    },
];

export default SupportPage;
