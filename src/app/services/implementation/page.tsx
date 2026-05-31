'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Server, Database, Cloud, Shield, Cpu, Code2,
    CheckCircle2, ArrowRight, Settings, Layers, GitBranch,
    Lock, Zap, Monitor, HardDrive, Network, Box
} from 'lucide-react';
import Link from 'next/link';

const ImplementationPage = () => {
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
                        Platform Implementation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            AI 플랫폼 구축
                        </span>
                        <br />
                        <span className="text-white text-3xl md:text-4xl">
                            엔터프라이즈급 AI 인프라 구현
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        데이터 주권이 보장되는 온프레미스/하이브리드 클라우드 환경에서
                        안전하고 확장 가능한 AI 플랫폼을 구축합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact?type=implementation"
                            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold transition-all shadow-lg shadow-emerald-900/30"
                        >
                            구축 상담 신청
                        </Link>
                        <Link 
                            href="/agentforge"
                            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-all"
                        >
                            AgentForge 살펴보기
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Platform Options */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">구축 옵션</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        고객사의 보안 요구사항과 인프라 환경에 맞는 최적의 구축 방식을 선택하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {deploymentOptions.map((option, index) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border transition-all ${
                                option.recommended 
                                    ? 'bg-gradient-to-b from-emerald-900/30 to-transparent border-emerald-500/50' 
                                    : 'bg-white/5 border-white/10 hover:border-emerald-500/30'
                            }`}
                        >
                            {option.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-xs font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${option.iconBg}`}>
                                <option.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                            <p className="text-gray-400 mb-6">{option.description}</p>
                            <ul className="space-y-3 mb-8">
                                {option.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/10">
                                <div className="text-sm text-gray-500 mb-2">적합한 환경</div>
                                <div className="flex flex-wrap gap-2">
                                    {option.suitable.map((item, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        검증된 오픈소스와 엔터프라이즈 기술을 조합하여 최적의 AI 플랫폼을 구축합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${category.iconBg}`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.techs.map((tech, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Implementation Process */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">구축 프로세스</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        체계적인 구축 방법론을 통해 안정적인 AI 플랫폼을 구현합니다.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-cyan-500/50 to-blue-500/50 -translate-y-1/2" />
                    
                    <div className="grid lg:grid-cols-6 gap-6">
                        {implementationSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="relative z-10 p-6 rounded-2xl bg-[#0a0b0d] border border-white/10 hover:border-emerald-500/50 transition-all text-center">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-bold mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-400">{step.description}</p>
                                    <div className="mt-3 text-xs text-emerald-400">{step.duration}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Components */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">핵심 구성 요소</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        엔터프라이즈 AI 플랫폼을 구성하는 핵심 컴포넌트입니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {coreComponents.map((component, index) => (
                        <motion.div
                            key={component.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex items-start gap-6">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${component.iconBg}`}>
                                    <component.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{component.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{component.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {component.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">보안 & 컴플라이언스</h2>
                        <p className="text-gray-400 mb-8">
                            26년간 축적된 WDLAB@2023-2026의 보안 전문성을 바탕으로
                            엔터프라이즈급 보안이 내재화된 AI 플랫폼을 구축합니다.
                        </p>
                        <div className="space-y-4">
                            {securityFeatures.map((feature, index) => (
                                <div key={feature.title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <feature.icon className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {certifications.map((cert, index) => (
                            <div 
                                key={cert.name}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                            >
                                <div className="text-2xl font-bold text-emerald-400 mb-2">{cert.code}</div>
                                <div className="text-sm text-gray-400">{cert.name}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center p-12 rounded-3xl bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 border border-emerald-500/30"
                >
                    <h2 className="text-3xl font-bold mb-4">AI 플랫폼 구축을 시작하세요</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        전문 아키텍트가 귀사의 요구사항을 분석하고 최적의 구축 방안을 제안해 드립니다.
                        PoC부터 전사 구축까지, 단계별 맞춤 서비스를 제공합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact?type=implementation"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold transition-all"
                        >
                            구축 상담 신청 <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link 
                            href="/cases"
                            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition-all"
                        >
                            구축 사례 보기
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

// Data
const deploymentOptions = [
    {
        title: 'On-Premise',
        description: '고객사 데이터센터에 직접 구축하여 완전한 데이터 주권을 보장합니다.',
        icon: Server,
        iconBg: 'from-blue-500 to-indigo-500',
        features: [
            '완전한 데이터 통제',
            '내부 네트워크 격리',
            '커스터마이징 자유도',
            '기존 인프라 활용',
        ],
        suitable: ['금융기관', '공공기관', '의료기관', '대기업'],
        recommended: false,
    },
    {
        title: 'Hybrid Cloud',
        description: '온프레미스와 클라우드의 장점을 결합한 최적의 아키텍처를 제공합니다.',
        icon: Cloud,
        iconBg: 'from-emerald-500 to-cyan-500',
        features: [
            '민감 데이터 온프레미스 유지',
            '탄력적 리소스 확장',
            '비용 최적화',
            '재해 복구 지원',
        ],
        suitable: ['중견기업', '스타트업', '글로벌 기업'],
        recommended: true,
    },
    {
        title: 'Private Cloud',
        description: '격리된 프라이빗 클라우드 환경에서 안전하게 AI 플랫폼을 운영합니다.',
        icon: Lock,
        iconBg: 'from-purple-500 to-pink-500',
        features: [
            'VPC 기반 격리 환경',
            '전용 인프라 제공',
            '관리형 서비스',
            'SLA 보장',
        ],
        suitable: ['IT 서비스 기업', '제조업', '유통업'],
        recommended: false,
    },
];

const techCategories = [
    {
        title: 'AI/ML Framework',
        icon: Cpu,
        iconBg: 'from-blue-500 to-cyan-500',
        techs: ['LangChain / LangGraph', 'CrewAI / AutoGen', 'Ollama / vLLM', 'HuggingFace Transformers'],
    },
    {
        title: 'Data & Storage',
        icon: Database,
        iconBg: 'from-emerald-500 to-teal-500',
        techs: ['PostgreSQL + pgvector', 'ChromaDB / Qdrant', 'MinIO (Object Storage)', 'Apache Kafka'],
    },
    {
        title: 'Infrastructure',
        icon: Server,
        iconBg: 'from-purple-500 to-pink-500',
        techs: ['Kubernetes (K8s)', 'Docker / Podman', 'NVIDIA GPU Cluster', 'Terraform / Ansible'],
    },
    {
        title: 'Security & Ops',
        icon: Shield,
        iconBg: 'from-orange-500 to-red-500',
        techs: ['Vault (시크릿 관리)', 'Prometheus / Grafana', 'ELK Stack', 'Keycloak (IAM)'],
    },
];

const implementationSteps = [
    { title: '요구사항 분석', description: '비즈니스 요건 및 기술 환경 분석', duration: '1-2주' },
    { title: '아키텍처 설계', description: '시스템 설계 및 기술 스택 선정', duration: '2-3주' },
    { title: '인프라 구축', description: '서버, 네트워크, 스토리지 구성', duration: '2-4주' },
    { title: '플랫폼 배포', description: 'AI 플랫폼 컴포넌트 설치 및 구성', duration: '3-4주' },
    { title: '통합 테스트', description: '기능, 성능, 보안 테스트 수행', duration: '2-3주' },
    { title: '운영 이관', description: '교육, 문서화, 운영 이관', duration: '1-2주' },
];

const coreComponents = [
    {
        title: 'AgentForge Platform',
        description: '멀티 에이전트 오케스트레이션 플랫폼으로 복잡한 AI 워크플로우를 구현합니다.',
        icon: Box,
        iconBg: 'from-blue-500 to-purple-500',
        features: ['Agent Mesh', 'Workflow Engine', 'Tool Integration'],
    },
    {
        title: 'RAG System',
        description: '기업 문서 기반의 지능형 검색 및 응답 생성 시스템을 구축합니다.',
        icon: Database,
        iconBg: 'from-emerald-500 to-cyan-500',
        features: ['Hybrid Search', 'Reranking', 'Multi-modal RAG'],
    },
    {
        title: 'MLOps Pipeline',
        description: 'AI 모델의 개발, 배포, 모니터링을 자동화하는 파이프라인을 구축합니다.',
        icon: GitBranch,
        iconBg: 'from-amber-500 to-orange-500',
        features: ['CI/CD', 'Model Registry', 'A/B Testing'],
    },
    {
        title: 'API Gateway',
        description: '84개 API 엔드포인트를 안전하게 관리하고 모니터링합니다.',
        icon: Network,
        iconBg: 'from-rose-500 to-red-500',
        features: ['Rate Limiting', 'Authentication', 'Logging'],
    },
    {
        title: 'Monitoring Dashboard',
        description: '실시간 시스템 모니터링 및 알림 체계를 제공합니다.',
        icon: Monitor,
        iconBg: 'from-indigo-500 to-blue-500',
        features: ['Real-time Metrics', 'Alerting', 'Log Analysis'],
    },
    {
        title: 'Security Layer',
        description: '엔터프라이즈급 보안 기능을 모든 계층에 내재화합니다.',
        icon: Shield,
        iconBg: 'from-purple-500 to-pink-500',
        features: ['Encryption', 'RBAC', 'Audit Trail'],
    },
];

const securityFeatures = [
    {
        title: '데이터 암호화',
        description: '저장 데이터(AES-256) 및 전송 데이터(TLS 1.3) 암호화 적용',
        icon: Lock,
    },
    {
        title: '접근 제어',
        description: 'RBAC/ABAC 기반 세분화된 권한 관리 및 SSO 연동',
        icon: Shield,
    },
    {
        title: '감사 추적',
        description: '모든 API 호출 및 데이터 접근에 대한 상세 로깅',
        icon: Monitor,
    },
    {
        title: '취약점 관리',
        description: '정기 보안 점검 및 취약점 패치 관리 체계 운영',
        icon: Settings,
    },
];

const certifications = [
    { code: 'ISO 27001', name: '정보보안 관리' },
    { code: 'ISO 27701', name: '개인정보보호' },
    { code: 'ISO 42001', name: 'AI 관리 시스템' },
    { code: 'ISMS-P', name: '정보보호 인증' },
];

export default ImplementationPage;
