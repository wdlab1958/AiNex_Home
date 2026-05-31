'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Heart, Rocket, Globe, Mail, ArrowRight, ShieldCheck, Cpu, X, CheckCircle, Clock, MapPin, Users, GraduationCap, Star, Send, Upload, User, Phone, FileText, Sparkles } from 'lucide-react';
import Link from 'next/link';

// 채용 포지션 상세 데이터
const positions = [
    {
        id: 1,
        title: 'Senior AI Research Engineer',
        team: 'AI Lab',
        location: 'Seoul / Remote',
        type: 'Full-time',
        experience: '5년 이상',
        salary: '협의 후 결정',
        deadline: '채용 시 마감',
        description: 'AiNex와 AgentForge의 핵심 AI 기술을 연구하고 개발하는 시니어 엔지니어를 찾습니다. Local LLM, RAG, Multi-Agent 시스템 등 최신 AI 기술을 활용하여 엔터프라이즈급 AI 솔루션을 구축합니다.',
        responsibilities: [
            'Local LLM (Llama, Mistral 등) 최적화 및 파인튜닝',
            'RAG (Retrieval-Augmented Generation) 시스템 설계 및 구현',
            'Multi-Agent 협업 워크플로우 개발',
            'AI 모델 성능 평가 및 벤치마킹',
            '팀 내 주니어 엔지니어 멘토링'
        ],
        requirements: [
            'CS/AI 관련 학과 석사 이상 또는 동등 경력',
            'PyTorch, TensorFlow 등 딥러닝 프레임워크 숙련',
            'LangChain, LlamaIndex 등 LLM 프레임워크 경험',
            'Python 고급 프로그래밍 능력',
            '영어 논문 독해 및 커뮤니케이션 가능'
        ],
        preferred: [
            'Hugging Face, Ollama 등 오픈소스 LLM 기여 경험',
            'LangGraph, CrewAI, AutoGen 등 에이전트 프레임워크 경험',
            'MLOps/LLMOps 경험',
            '보안/금융 도메인 경험'
        ],
        benefits: [
            'GPU 서버 자유 사용 (A100, H100)',
            '해외 컨퍼런스 참가 지원 (NeurIPS, ICML 등)',
            '논문 작성 및 발표 지원',
            '사내 스터디 및 세미나'
        ],
        skills: ['Python', 'PyTorch', 'LangChain', 'RAG', 'LLM', 'Multi-Agent']
    },
    {
        id: 2,
        title: 'Full Stack Engineer (Next.js)',
        team: 'Platform Team',
        location: 'Seoul',
        type: 'Full-time',
        experience: '3년 이상',
        salary: '협의 후 결정',
        deadline: '채용 시 마감',
        description: 'AiNex 플랫폼의 프론트엔드와 백엔드를 개발하는 풀스택 엔지니어를 찾습니다. Next.js 기반의 모던 웹 애플리케이션을 구축하고, AI 서비스와의 통합을 담당합니다.',
        responsibilities: [
            'Next.js 14 기반 웹 애플리케이션 개발',
            'React Server Components, App Router 활용',
            'RESTful API 및 GraphQL 설계/구현',
            'AI 서비스 연동 및 실시간 데이터 처리',
            'UI/UX 개선 및 성능 최적화'
        ],
        requirements: [
            'Next.js, React 3년 이상 실무 경험',
            'TypeScript 숙련',
            'Node.js 백엔드 개발 경험',
            'PostgreSQL, Redis 등 데이터베이스 경험',
            'Git 기반 협업 경험'
        ],
        preferred: [
            'Tailwind CSS, Framer Motion 경험',
            'Vercel, AWS 등 클라우드 배포 경험',
            'CI/CD 파이프라인 구축 경험',
            'WebSocket, Server-Sent Events 경험',
            'AI/ML 서비스 연동 경험'
        ],
        benefits: [
            '최신형 맥북 프로 지급',
            '자유로운 기술 스택 선택',
            '코드 리뷰 문화',
            '기술 블로그 작성 지원'
        ],
        skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
    },
    {
        id: 3,
        title: 'AI Consultant (Senior)',
        team: 'Consulting Team',
        location: 'Seoul',
        type: 'Full-time',
        experience: '7년 이상',
        salary: '협의 후 결정',
        deadline: '채용 시 마감',
        description: '기업의 AI 전환(AX)을 컨설팅하는 시니어 컨설턴트를 찾습니다. ISO 42001 기반의 AI 거버넌스 체계 수립부터 구체적인 AI 도입 전략까지, 고객사의 성공적인 AI 전환을 리드합니다.',
        responsibilities: [
            '고객사 AI 전환 전략 수립 및 로드맵 설계',
            'ISO 42001 기반 AI 거버넌스 컨설팅',
            'AI 도입 ROI 분석 및 비즈니스 케이스 개발',
            'AI 리스크 평가 및 관리 방안 수립',
            '경영진 대상 AI 전략 제안 및 프레젠테이션'
        ],
        requirements: [
            'IT/경영 컨설팅 7년 이상 경력',
            'AI/디지털 전환 프로젝트 리딩 경험',
            '대기업 또는 공공기관 컨설팅 경험',
            '뛰어난 커뮤니케이션 및 프레젠테이션 능력',
            '데이터 분석 및 비즈니스 인사이트 도출 능력'
        ],
        preferred: [
            'ISO 42001, ISO 27001 등 인증 심사 경험',
            'Big 4 컨설팅펌 또는 유사 경력',
            'AI/ML 기술에 대한 이해',
            'MBA 또는 관련 석사 학위',
            '금융/제조/공공 산업 전문성'
        ],
        benefits: [
            '프로젝트 성과급',
            '해외 출장 및 글로벌 네트워킹',
            '임원 트랙 승진 기회',
            '업계 최고 수준의 대우'
        ],
        skills: ['AI Strategy', 'ISO 42001', 'Digital Transformation', 'Governance', 'Risk Management']
    },
    {
        id: 4,
        title: 'DevOps Engineer',
        team: 'Infra Team',
        location: 'Seoul / Remote',
        type: 'Full-time',
        experience: '3년 이상',
        salary: '협의 후 결정',
        deadline: '채용 시 마감',
        description: 'AiNex와 AgentForge 플랫폼의 인프라를 설계하고 운영하는 DevOps 엔지니어를 찾습니다. 온프레미스와 클라우드 하이브리드 환경에서 안정적이고 확장 가능한 AI 서비스 인프라를 구축합니다.',
        responsibilities: [
            'Kubernetes 기반 컨테이너 오케스트레이션',
            'CI/CD 파이프라인 구축 및 자동화',
            '온프레미스/클라우드 하이브리드 인프라 설계',
            'GPU 클러스터 관리 및 최적화',
            '모니터링, 로깅, 알림 시스템 구축'
        ],
        requirements: [
            'DevOps/SRE 3년 이상 경력',
            'Kubernetes, Docker 실무 경험',
            'AWS, GCP, Azure 중 하나 이상 숙련',
            'Terraform, Ansible 등 IaC 경험',
            'Linux 시스템 관리 능력'
        ],
        preferred: [
            'GPU 서버 운영 경험',
            'MLOps/LLMOps 파이프라인 경험',
            'Prometheus, Grafana 모니터링 경험',
            '보안 인프라 설계 경험',
            'Python, Go 스크립팅 능력'
        ],
        benefits: [
            '재택근무 가능 (주 2-3일)',
            '최신 인프라 기술 학습 지원',
            'On-call 수당 지급',
            '클라우드 자격증 취득 지원'
        ],
        skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'CI/CD', 'Linux']
    },
];

// 채용 모달 컴포넌트
const PositionModal = ({ 
    isOpen, 
    onClose, 
    position 
}: { 
    isOpen: boolean; 
    onClose: () => void; 
    position: typeof positions[0] | null 
}) => {
    const [isApplying, setIsApplying] = useState(false);
    const [applied, setApplied] = useState(false);

    if (!isOpen || !position) return null;

    const handleApply = () => {
        setIsApplying(true);
        setTimeout(() => {
            setIsApplying(false);
            setApplied(true);
        }, 1500);
    };

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
                    className="bg-[#0f1117] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 헤더 */}
                    <div className="sticky top-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-white/10 p-6 z-10">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                                        {position.team}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                                        {position.type}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white">{position.title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* 기본 정보 */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                {position.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-gray-400" />
                                {position.experience}
                            </div>
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4 text-gray-400" />
                                {position.deadline}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* 포지션 소개 */}
                        <div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {position.description}
                            </p>
                        </div>

                        {/* 기술 스택 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-blue-400" />
                                기술 스택
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {position.skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 주요 업무 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-emerald-400" />
                                주요 업무
                            </h3>
                            <div className="space-y-2">
                                {position.responsibilities.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 자격 요건 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-yellow-400" />
                                자격 요건
                            </h3>
                            <div className="space-y-2">
                                {position.requirements.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg"
                                    >
                                        <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 우대 사항 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Star className="w-5 h-5 text-purple-400" />
                                우대 사항
                            </h3>
                            <div className="space-y-2">
                                {position.preferred.map((item, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg"
                                    >
                                        <Star className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 팀 혜택 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-red-400" />
                                팀 혜택
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {position.benefits.map((benefit, index) => (
                                    <div 
                                        key={index}
                                        className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg text-center"
                                    >
                                        <span className="text-gray-300 text-sm">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 지원하기 CTA */}
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
                            {applied ? (
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">지원이 완료되었습니다!</h4>
                                    <p className="text-gray-400">
                                        빠른 시일 내에 이력서 검토 후 연락드리겠습니다.<br />
                                        지원해 주셔서 감사합니다.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <h4 className="text-lg font-bold text-white mb-2">이 포지션에 관심이 있으신가요?</h4>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        이력서를 careers@wdlab.co.kr로 보내주시거나, 아래 버튼을 클릭하여 지원해 주세요.
                                    </p>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={handleApply}
                                            disabled={isApplying}
                                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            {isApplying ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    지원 중...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    지원하기
                                                </>
                                            )}
                                        </button>
                                        <a
                                            href={`mailto:careers@wdlab.co.kr?subject=[지원] ${position.title}`}
                                            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-medium flex items-center gap-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            이메일
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// 인재풀 등록 모달 컴포넌트
const TalentPoolModal = ({ 
    isOpen, 
    onClose 
}: { 
    isOpen: boolean; 
    onClose: () => void; 
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        skills: '',
        introduction: '',
        portfolio: '',
        agreePrivacy: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    if (!isOpen) return null;

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        
        if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
        if (!formData.email.trim()) {
            newErrors.email = '이메일을 입력해주세요.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '유효한 이메일 형식이 아닙니다.';
        }
        if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.';
        if (!formData.position) newErrors.position = '관심 분야를 선택해주세요.';
        if (!formData.experience) newErrors.experience = '경력을 선택해주세요.';
        if (!formData.introduction.trim()) newErrors.introduction = '자기소개를 입력해주세요.';
        if (!formData.agreePrivacy) newErrors.agreePrivacy = '개인정보 수집에 동의해주세요.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const handleClose = () => {
        onClose();
        // 모달 닫을 때 상태 초기화
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                position: '',
                experience: '',
                skills: '',
                introduction: '',
                portfolio: '',
                agreePrivacy: false
            });
            setIsSubmitted(false);
            setErrors({});
        }, 300);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={handleClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-[#0f1117] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 헤더 */}
                    <div className="sticky top-0 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 border-b border-white/10 p-6 z-10">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-5 h-5 text-emerald-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full">
                                        Talent Pool
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-white">인재풀 등록</h2>
                                <p className="text-gray-400 text-sm mt-1">
                                    적합한 포지션 오픈 시 우선적으로 연락드립니다.
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="p-6">
                        {isSubmitted ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">등록이 완료되었습니다!</h3>
                                <p className="text-gray-400 mb-6">
                                    소중한 정보를 등록해 주셔서 감사합니다.<br />
                                    적합한 포지션이 오픈되면 우선적으로 연락드리겠습니다.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:opacity-90 transition-opacity"
                                >
                                    확인
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* 기본 정보 */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <User className="w-5 h-5 text-blue-400" />
                                        기본 정보
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                이름 <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors`}
                                                placeholder="홍길동"
                                            />
                                            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                이메일 <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors`}
                                                placeholder="example@email.com"
                                            />
                                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            연락처 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors`}
                                            placeholder="010-0000-0000"
                                        />
                                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* 경력 정보 */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-emerald-400" />
                                        경력 정보
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                관심 분야 <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                value={formData.position}
                                                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.position ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors`}
                                            >
                                                <option value="" className="bg-[#0f1117]">선택해주세요</option>
                                                <option value="ai-research" className="bg-[#0f1117]">AI Research / ML Engineer</option>
                                                <option value="fullstack" className="bg-[#0f1117]">Full Stack Engineer</option>
                                                <option value="backend" className="bg-[#0f1117]">Backend Engineer</option>
                                                <option value="frontend" className="bg-[#0f1117]">Frontend Engineer</option>
                                                <option value="devops" className="bg-[#0f1117]">DevOps / SRE</option>
                                                <option value="consultant" className="bg-[#0f1117]">AI Consultant</option>
                                                <option value="pm" className="bg-[#0f1117]">Product Manager</option>
                                                <option value="design" className="bg-[#0f1117]">UI/UX Designer</option>
                                                <option value="security" className="bg-[#0f1117]">Security Engineer</option>
                                                <option value="other" className="bg-[#0f1117]">기타</option>
                                            </select>
                                            {errors.position && <p className="text-red-400 text-sm mt-1">{errors.position}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                                경력 <span className="text-red-400">*</span>
                                            </label>
                                            <select
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                                className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.experience ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors`}
                                            >
                                                <option value="" className="bg-[#0f1117]">선택해주세요</option>
                                                <option value="new" className="bg-[#0f1117]">신입</option>
                                                <option value="1-3" className="bg-[#0f1117]">1-3년</option>
                                                <option value="3-5" className="bg-[#0f1117]">3-5년</option>
                                                <option value="5-7" className="bg-[#0f1117]">5-7년</option>
                                                <option value="7-10" className="bg-[#0f1117]">7-10년</option>
                                                <option value="10+" className="bg-[#0f1117]">10년 이상</option>
                                            </select>
                                            {errors.experience && <p className="text-red-400 text-sm mt-1">{errors.experience}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            보유 기술/스킬
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.skills}
                                            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none transition-colors"
                                            placeholder="예: Python, PyTorch, LangChain, React, TypeScript"
                                        />
                                    </div>
                                </div>

                                {/* 자기소개 */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-purple-400" />
                                        자기소개
                                    </h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            간단한 자기소개 <span className="text-red-400">*</span>
                                        </label>
                                        <textarea
                                            value={formData.introduction}
                                            onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.introduction ? 'border-red-500' : 'border-white/10'} focus:border-emerald-500/50 focus:outline-none transition-colors resize-none`}
                                            placeholder="본인의 경력, 강점, 관심 분야 등을 자유롭게 작성해주세요."
                                        />
                                        {errors.introduction && <p className="text-red-400 text-sm mt-1">{errors.introduction}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            포트폴리오 / GitHub / LinkedIn URL
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.portfolio}
                                            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none transition-colors"
                                            placeholder="https://"
                                        />
                                    </div>
                                </div>

                                {/* 개인정보 동의 */}
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.agreePrivacy}
                                            onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                                            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-emerald-500"
                                        />
                                        <span className="text-sm text-gray-300">
                                            <span className="text-red-400">*</span> 개인정보 수집 및 이용에 동의합니다. 
                                            수집된 정보는 채용 목적으로만 사용되며, 채용 절차 완료 후 파기됩니다.
                                        </span>
                                    </label>
                                    {errors.agreePrivacy && <p className="text-red-400 text-sm mt-2">{errors.agreePrivacy}</p>}
                                </div>

                                {/* 제출 버튼 */}
                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                등록 중...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                인재풀 등록하기
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-medium"
                                    >
                                        취소
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const CareersPage = () => {
    const [selectedPosition, setSelectedPosition] = useState<typeof positions[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTalentPoolModalOpen, setIsTalentPoolModalOpen] = useState(false);

    const handlePositionClick = (position: typeof positions[0]) => {
        setSelectedPosition(position);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* 채용 포지션 모달 */}
            <PositionModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    // 모달 닫을 때 지원 상태 초기화
                    setTimeout(() => setSelectedPosition(null), 300);
                }}
                position={selectedPosition}
            />

            {/* 인재풀 등록 모달 */}
            <TalentPoolModal
                isOpen={isTalentPoolModalOpen}
                onClose={() => setIsTalentPoolModalOpen(false)}
            />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6 border border-blue-500/30">
                        Join Our Team
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            안전한 AI의 미래를 함께 만듭니다
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        WDLAB@2023-2026는 26년의 보안 전문성을 바탕으로, 데이터 주권이 보장되는 안전한 AI 세상을 만들어가고 있습니다. 최고의 동료들과 함께 성장할 기회를 잡으세요.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Values */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Safe AI First</h3>
                        <p className="text-gray-400">
                            우리는 혁신보다 안전을 먼저 생각합니다. 데이터 주권과 보안이 보장되지 않는 AI는 진정한 혁신이 아닙니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <Cpu className="w-10 h-10 text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Frontier Tech</h3>
                        <p className="text-gray-400">
                            Local LLM, Multi-Agent, RAG 등 최전선의 AI 기술을 다룹니다. 끊임없이 학습하고 실험하는 문화를 지향합니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10"
                    >
                        <Globe className="w-10 h-10 text-purple-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Global Standard</h3>
                        <p className="text-gray-400">
                            ISO 국제 표준을 준수하며, 글로벌 시장에서도 통용될 수 있는 수준 높은 AI 거버넌스 체계를 구축합니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="container mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
                <div className="grid gap-6 max-w-4xl mx-auto">
                    {positions.map((position, index) => (
                        <motion.div
                            key={position.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handlePositionClick(position)}
                            className="group p-6 rounded-xl bg-[#111] border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{position.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400">
                                        <span>{position.team}</span>
                                        <span>•</span>
                                        <span>{position.location}</span>
                                        <span>•</span>
                                        <span>{position.type}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="hidden md:flex flex-wrap gap-1 max-w-[200px]">
                                        {position.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="px-6 py-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-sm font-medium transition-colors flex items-center gap-2">
                                        상세보기
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-4 mb-24 bg-white/5 rounded-3xl p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>
                        <p className="text-gray-400 mb-8">
                            최고의 성과를 낼 수 있도록 아낌없이 지원합니다.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Rocket className="w-4 h-4" /></div>
                                <span>최신형 맥북 프로 및 듀얼 모니터 지원</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><Heart className="w-4 h-4" /></div>
                                <span>종합 건강검진 및 단체 상해 보험</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><Briefcase className="w-4 h-4" /></div>
                                <span>유연 근무제 및 리모트 워크 지원</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-64 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-lg font-semibold text-blue-200">Growth & Culture</p>
                            <p className="text-sm text-gray-400">함께 성장하는 문화</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">지원하고 싶은 포지션이 없나요?</h2>
                    <p className="text-gray-400 mb-8">
                        인재풀에 등록해주시면 적합한 포지션 오픈 시 우선적으로 연락드리겠습니다.
                    </p>
                    <button 
                        onClick={() => setIsTalentPoolModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold transition-all"
                    >
                        <Sparkles className="w-5 h-5" /> 인재풀 등록하기
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
