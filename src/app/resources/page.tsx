'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, Video, Code, HelpCircle, ArrowRight, Download, X, ExternalLink, Play, FileCode, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

// 개발자 문서 모달 컴포넌트
const DocsModal = ({ isOpen, onClose, doc }: { isOpen: boolean; onClose: () => void; doc: typeof docsLinks[0] | null }) => {
    if (!isOpen || !doc) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-[#0f1117] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="sticky top-0 bg-[#0f1117] border-b border-white/10 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {doc.icon}
                            <h2 className="text-xl font-bold">{doc.label}</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-400 mb-6">{doc.description}</p>
                        
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">주요 내용</h3>
                            <ul className="space-y-3">
                                {doc.contents.map((content, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-green-400 mt-1">•</span>
                                        {content}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-sm text-gray-400 mb-4">
                                전체 문서는 개발자 포털에서 확인하실 수 있습니다.
                            </p>
                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 transition-colors font-medium flex items-center justify-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                개발자 포털 바로가기
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// 웨비나 모달 컴포넌트
const WebinarModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-[#0f1117] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="sticky top-0 bg-[#0f1117] border-b border-white/10 p-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Video className="w-6 h-6 text-purple-400" />
                            <h2 className="text-xl font-bold">웨비나 다시보기</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6">
                        {/* 비디오 플레이어 영역 */}
                        <div className="aspect-video bg-black/50 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-purple-500/30 transition-colors">
                                    <Play className="w-8 h-8 text-purple-400 ml-1" />
                                </div>
                                <p className="text-gray-400">클릭하여 재생</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">ISO 42001 기반의 엔터프라이즈 AI 거버넌스</h3>
                        
                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full">AI 거버넌스</span>
                            <span>2025년 12월 20일</span>
                            <span>60분</span>
                            <span>조회수 1,245회</span>
                        </div>

                        <p className="text-gray-300 mb-6">
                            ISO 42001 국제 표준을 기반으로 기업 환경에서 AI 거버넌스를 효과적으로 구축하고 운영하는 방법에 대해 알아봅니다. 
                            실제 사례와 함께 단계별 구현 전략을 제시합니다.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="p-4 bg-white/5 rounded-xl">
                                <h4 className="font-semibold mb-3 text-white">발표자</h4>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                        김
                                    </div>
                                    <div>
                                        <p className="font-medium">김민수</p>
                                        <p className="text-sm text-gray-400">AI 거버넌스 컨설턴트</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl">
                                <h4 className="font-semibold mb-3 text-white">핵심 내용</h4>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>• ISO 42001 프레임워크 이해</li>
                                    <li>• 거버넌스 체계 구축 방법</li>
                                    <li>• 리스크 관리 전략</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                href="/resources/webinars"
                                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 transition-colors font-medium text-center"
                            >
                                전체 웨비나 보기
                            </Link>
                            <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors font-medium">
                                공유하기
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ResourcesPage = () => {
    const [selectedDoc, setSelectedDoc] = useState<typeof docsLinks[0] | null>(null);
    const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);
    const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false);

    const handleDocClick = (doc: typeof docsLinks[0]) => {
        setSelectedDoc(doc);
        setIsDocsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* 모달들 */}
            <DocsModal
                isOpen={isDocsModalOpen}
                onClose={() => setIsDocsModalOpen(false)}
                doc={selectedDoc}
            />
            <WebinarModal
                isOpen={isWebinarModalOpen}
                onClose={() => setIsWebinarModalOpen(false)}
            />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                        자료 및 인사이트
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        최신 AI 기술 정보, 백서, 그리고 전문가 가이드를 확인하세요.
                    </p>
                </motion.div>
            </section>

            {/* Resource Categories */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tech Blog */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-blue-400" />
                            <h2 className="text-2xl font-bold">기술 블로그</h2>
                        </div>
                        <div className="grid gap-6">
                            {blogPosts.map((post) => (
                                <Link 
                                    key={post.title} 
                                    href="/blog"
                                    className="group cursor-pointer block hover:bg-white/5 p-4 -m-4 rounded-xl transition-colors"
                                >
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 mb-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link 
                            href="/blog"
                            className="mt-8 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                        >
                            전체 포스트 보기 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 hover:border-purple-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Video className="w-6 h-6 text-purple-400" />
                                <h3 className="text-lg font-bold">최신 웨비나</h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                "ISO 42001 기반의 엔터프라이즈 AI 거버넌스"
                            </p>
                            <button 
                                onClick={() => setIsWebinarModalOpen(true)}
                                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                            >
                                <Play className="w-4 h-4" /> 영상 다시보기
                            </button>
                            <Link 
                                href="/resources/webinars"
                                className="mt-3 w-full py-2 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                            >
                                전체 웨비나 보기 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="w-6 h-6 text-green-400" />
                                <h3 className="text-lg font-bold">개발자 문서</h3>
                            </div>
                            <ul className="space-y-3 mb-4">
                                {docsLinks.map((link) => (
                                    <li 
                                        key={link.label} 
                                        onClick={() => handleDocClick(link)}
                                        className="flex items-center justify-between text-sm text-gray-400 hover:text-white cursor-pointer transition-colors p-2 -mx-2 rounded-lg hover:bg-white/5"
                                    >
                                        <div className="flex items-center gap-2">
                                            {link.icon}
                                            <span>{link.label}</span>
                                        </div>
                                        <ArrowRight className="w-3 h-3" />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* White Papers */}
            <section className="container mx-auto px-4 mb-20">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-white/10" />
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <FileText className="w-6 h-6 text-yellow-400" />
                        백서 (White Papers)
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whitePapers.map((paper, index) => (
                        <Link
                            key={paper.title}
                            href="/resources/whitepapers"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-colors group cursor-pointer h-full"
                            >
                                <div className="mb-4">
                                    <span className="text-xs font-mono text-blue-400 px-2 py-1 rounded bg-blue-400/10">
                                        {paper.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                                    {paper.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                                    {paper.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors">
                                    <Download className="w-4 h-4" /> 자세히 보기
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/resources/whitepapers"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 hover:border-yellow-500/50 transition-colors font-medium text-yellow-300 hover:text-yellow-200"
                    >
                        전체 백서 보기 <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문 (FAQ)</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Link key={index} href="/resources/faq">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold mb-2 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                                    {faq.question}
                                </h3>
                                <p className="text-gray-400 pl-8">{faq.answer}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/resources/faq"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-colors font-medium text-purple-300 hover:text-purple-200"
                    >
                        전체 FAQ 보기 <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

const blogPosts = [
    {
        title: '멀티 에이전트 시스템: 엔터프라이즈 AI의 미래',
        excerpt: '자율 에이전트가 비즈니스 워크플로우와 의사결정 프로세스를 어떻게 혁신하는지 알아봅니다.',
        date: '2026년 1월 5일',
        readTime: '5분 분량',
    },
    {
        title: 'ISO 42001 도입 가이드',
        excerpt: '조직에 새로운 AI 관리 시스템 표준을 적용하기 위한 실질적인 접근 방식을 제시합니다.',
        date: '2025년 12월 28일',
        readTime: '8분 분량',
    },
    {
        title: 'AgentForge를 활용한 로컬 LLM 보안',
        excerpt: '온프레미스 대규모 언어 모델을 배포하고 보호하기 위한 모범 사례를 소개합니다.',
        date: '2025년 12월 15일',
        readTime: '6분 분량',
    },
];

const docsLinks = [
    { 
        label: 'API 참조 문서',
        icon: <FileCode className="w-4 h-4 text-blue-400" />,
        description: 'AgentForge와 AiNex 플랫폼의 완전한 REST API 참조 문서입니다. 인증, 엔드포인트, 요청/응답 형식을 상세히 설명합니다.',
        contents: [
            '인증 및 API 키 관리',
            '84개 REST API 엔드포인트 상세 설명',
            '요청/응답 JSON 스키마',
            'Rate Limiting 및 에러 핸들링',
            'SDK 사용 예제 (Python, JavaScript, Java)',
        ]
    },
    { 
        label: '에이전트 설정 가이드',
        icon: <Zap className="w-4 h-4 text-yellow-400" />,
        description: '멀티 에이전트 시스템을 구성하고 커스터마이징하는 방법을 단계별로 안내합니다.',
        contents: [
            'Strategy, Design, ROI, Risk, Report 에이전트 설정',
            '에이전트 간 협업 워크플로우 구성',
            'LangGraph, CrewAI, AutoGen 프레임워크 활용',
            '커스텀 에이전트 생성 및 배포',
            '에이전트 모니터링 및 로깅 설정',
        ]
    },
    { 
        label: '보안 프로토콜',
        icon: <Shield className="w-4 h-4 text-green-400" />,
        description: '엔터프라이즈급 보안을 위한 프로토콜과 베스트 프랙티스를 제공합니다.',
        contents: [
            'TLS 1.3 암호화 통신',
            '데이터 암호화 및 키 관리',
            'RBAC (역할 기반 접근 제어) 설정',
            '감사 로그 및 컴플라이언스 리포팅',
            '온프레미스 배포 보안 가이드라인',
        ]
    },
    { 
        label: '통합 가이드',
        icon: <ExternalLink className="w-4 h-4 text-purple-400" />,
        description: '기존 엔터프라이즈 시스템과의 원활한 통합을 위한 종합 가이드입니다.',
        contents: [
            'SSO (Single Sign-On) 연동',
            'ERP/CRM 시스템 통합',
            '데이터베이스 커넥터 설정',
            'Webhook 및 이벤트 기반 통합',
            'CI/CD 파이프라인 연동',
        ]
    },
];

const whitePapers = [
    {
        title: '2026 AI 전환 트렌드',
        category: '시장 조사',
        description: '엔터프라이즈 분야의 진화하는 AI 도입 환경에 대한 포괄적인 분석.',
    },
    {
        title: '자율 에이전트의 ROI 분석',
        category: '비즈니스 가치',
        description: '멀티 에이전트 시스템을 통한 경제적 효과와 효율성 증대를 이해합니다.',
    },
    {
        title: 'AI 거버넌스 프레임워크',
        category: '규제 준수 (Compliance)',
        description: 'AI 안전을 위한 규제 요구사항과 표준화에 대한 심층 분석.',
    },
];

const faqs = [
    {
        question: 'AgentForge는 어떤 모델을 지원하나요?',
        answer: 'AgentForge는 Ollama를 통한 Llama 3, Mistral 등의 다양한 로컬 LLM과 주요 API 기반 모델들을 광범위하게 지원합니다.',
    },
    {
        question: 'AiNex를 사용하면 내 데이터는 안전한가요?',
        answer: '네, AiNex는 데이터 주권을 최우선으로 합니다. 데이터가 귀사의 인프라를 절대 떠나지 않는 완전한 온프레미스 배포 옵션을 제공합니다.',
    },
    {
        question: '기존 도구들과 통합할 수 있나요?',
        answer: '물론입니다. 주요 엔터프라이즈 플랫폼 및 데이터 소스에 대한 포괄적인 REST API와 사전 구축된 통합 기능을 제공합니다.',
    },
    {
        question: '가격 정책은 어떻게 되나요?',
        answer: '구축 규모와 필요한 기능에 따라 유연한 SaaS 구독 요금제를 제공합니다. 맞춤형 엔터프라이즈 플랜은 영업팀에 문의해 주세요.',
    },
];

export default ResourcesPage;
