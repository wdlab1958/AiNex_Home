'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle, Shield, CreditCard, Cpu } from 'lucide-react';

const FaqPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const categories = [
        { id: 'All', label: 'All Questions' },
        { id: 'General', label: 'General', icon: MessageCircle },
        { id: 'Pricing', label: 'Pricing', icon: CreditCard },
        { id: 'Technical', label: 'Technical', icon: Cpu },
        { id: 'Security', label: 'Security', icon: Shield },
    ];

    const faqs = [
        // General FAQs
        {
            question: "AiNex는 어떤 회사인가요?",
            answer: "AiNex는 A3 Security의 AI 전문 사업부로, 26년간 축적된 보안 컨설팅 노하우와 최신 AI 기술을 결합하여 기업의 안전하고 효과적인 AI 전환을 지원합니다. ISO 42001 기반 AI 거버넌스, 멀티 에이전트 플랫폼, 맞춤형 AI 솔루션을 제공합니다.",
            category: "General"
        },
        {
            question: "컨설팅 서비스도 포함되어 있나요?",
            answer: "Professional 플랜 이상부터는 전담 매니저가 배정되어 AI 도입 로드맵 수립부터 구축, 운영까지 전 과정에 걸친 컨설팅 서비스를 제공합니다.",
            category: "General"
        },
        {
            question: "도입까지 얼마나 걸리나요?",
            answer: "프로젝트 규모에 따라 다르지만, 일반적으로 PoC(개념 검증)는 2-4주, 파일럿 프로젝트는 1-2개월, 전사 도입은 3-6개월 정도 소요됩니다. 긴급한 프로젝트의 경우 Fast Track 옵션을 통해 일정을 단축할 수 있습니다.",
            category: "General"
        },
        {
            question: "어떤 산업 분야에 적용 가능한가요?",
            answer: "금융, 제조, 의료/헬스케어, 유통/물류, 공공기관 등 다양한 산업에 적용 가능합니다. 각 산업별 특성에 맞는 사전 구축된 템플릿과 전문 컨설턴트를 통해 빠른 도입을 지원합니다.",
            category: "General"
        },
        {
            question: "교육 및 기술 지원은 어떻게 제공되나요?",
            answer: "모든 플랜에 온라인 문서와 튜토리얼이 제공되며, Professional 이상 플랜에는 전담 기술 지원과 정기 교육 세션이 포함됩니다. Enterprise 플랜은 온사이트 교육과 24/7 기술 지원을 제공합니다.",
            category: "General"
        },

        // Pricing FAQs
        {
            question: "초기 도입 비용은 얼마나 드나요?",
            answer: "Starter 플랜은 월 $299부터 시작하며, 엔터프라이즈 도입의 경우 규모와 요구사항에 따라 맞춤형 견적을 제공합니다. 자세한 내용은 Pricing 페이지를 참고하시거나 영업팀에 문의해 주시기 바랍니다.",
            category: "Pricing"
        },
        {
            question: "무료 체험 기간이 있나요?",
            answer: "네, 14일간 무료 체험이 가능합니다. 체험 기간 동안 Professional 플랜의 모든 기능을 사용해 볼 수 있으며, 신용카드 등록 없이 시작할 수 있습니다. 데모 신청을 통해 전문 컨설턴트의 안내를 받으실 수도 있습니다.",
            category: "Pricing"
        },
        {
            question: "API 사용량에 따른 추가 비용이 있나요?",
            answer: "각 플랜에는 기본 API 호출량이 포함되어 있습니다. 기본 할당량을 초과할 경우 사용량에 따라 추가 비용이 발생합니다. Enterprise 플랜은 무제한 API 호출을 제공하며, 대량 사용 시 볼륨 할인이 적용됩니다.",
            category: "Pricing"
        },
        {
            question: "플랜 변경이나 취소는 자유롭게 가능한가요?",
            answer: "월간 구독의 경우 언제든지 플랜 업그레이드/다운그레이드가 가능합니다. 연간 구독은 20% 할인 혜택이 있으며, 중도 해지 시 잔여 기간에 대해 프로-rata 방식으로 환불됩니다.",
            category: "Pricing"
        },
        {
            question: "온프레미스 구축 비용은 별도인가요?",
            answer: "온프레미스 구축은 Enterprise 플랜에서 제공되며, 초기 구축 비용과 월간 유지보수 비용이 별도로 책정됩니다. 고객사의 인프라 환경과 요구사항에 따라 맞춤 견적을 제공합니다.",
            category: "Pricing"
        },

        // Technical FAQs
        {
            question: "AiNex 플랫폼은 어떤 LLM을 지원하나요?",
            answer: "AiNex는 OpenAI GPT-4, Anthropic Claude 3, Google Gemini 등 주요 상용 LLM뿐만 아니라, Llama 3, Mistral 등 오픈 소스 LLM의 로컬 호스팅(Ollama 연동)도 지원합니다. 사용자는 프로젝트 요구사항에 따라 모델을 자유롭게 선택하고 교체할 수 있습니다.",
            category: "Technical"
        },
        {
            question: "기존 시스템(Legacy)과 연동이 가능한가요?",
            answer: "네, 가능합니다. AiNex는 RESTful API와 다양한 커넥터(DB, ERP, CRM 등)를 제공하여 기존 레거시 시스템과 손쉽게 연동할 수 있습니다. 커스텀 통합이 필요한 경우 엔지니어링 팀이 기술 지원을 제공합니다.",
            category: "Technical"
        },
        {
            question: "RAG 시스템 구축 시 벡터 DB는 무엇을 사용하나요?",
            answer: "기본적으로 PGVector, ChromaDB, Qdrant 등을 지원하며, 고객사가 이미 사용 중인 벡터 데이터베이스가 있다면 연동 설정을 통해 그대로 활용하실 수 있습니다.",
            category: "Technical"
        },
        {
            question: "멀티 에이전트 시스템은 어떻게 구현되나요?",
            answer: "AgentForge 플랫폼을 통해 LangGraph, CrewAI, AutoGen을 조합한 하이브리드 멀티 에이전트 시스템을 구축합니다. 각 에이전트는 특정 역할(분석, 작성, 검토 등)을 담당하며, 복잡한 업무를 협업하여 처리합니다.",
            category: "Technical"
        },
        {
            question: "API 문서는 어디서 확인할 수 있나요?",
            answer: "84개의 RESTful API 엔드포인트에 대한 상세 문서는 Swagger UI를 통해 제공됩니다. 각 API의 요청/응답 스키마, 예제 코드, 에러 코드 등을 확인하고 직접 테스트해 볼 수 있습니다.",
            category: "Technical"
        },
        {
            question: "모델 파인튜닝을 지원하나요?",
            answer: "네, Enterprise 플랜에서 고객사 데이터를 활용한 모델 파인튜닝을 지원합니다. LoRA, QLoRA 등 효율적인 파인튜닝 기법을 적용하여 도메인 특화 모델을 구축할 수 있으며, 모델 관리 및 버전 관리 도구도 함께 제공됩니다.",
            category: "Technical"
        },
        {
            question: "실시간 스트리밍 응답을 지원하나요?",
            answer: "네, Server-Sent Events(SSE)와 WebSocket을 통한 실시간 스트리밍 응답을 지원합니다. 이를 통해 대용량 텍스트 생성 시에도 사용자에게 즉각적인 피드백을 제공할 수 있습니다.",
            category: "Technical"
        },

        // Security FAQs
        {
            question: "데이터 보안은 어떻게 보장되나요?",
            answer: "데이터 주권을 최우선으로 고려하여, 고객사의 데이터를 외부로 전송하지 않는 On-Premise 구축 옵션과 VPC(Virtual Private Cloud) 환경을 제공합니다. 또한, PII(개인식별정보) 마스킹 기능과 RBAC(역할 기반 접근 제어)를 통해 데이터 접근을 철저히 통제합니다.",
            category: "Security"
        },
        {
            question: "ISO 인증을 보유하고 있나요?",
            answer: "A3 Security는 ISO 27001(정보보안), ISO 27701(개인정보보호) 인증을 보유하고 있으며, AiNex 플랫폼은 ISO/IEC 42001(AI 관리 시스템) 표준에 따라 설계되었습니다. 고객사의 ISO 42001 인증 취득도 지원합니다.",
            category: "Security"
        },
        {
            question: "Prompt Injection 공격에 대한 방어책이 있나요?",
            answer: "다층 방어 체계를 적용하여 Prompt Injection 공격을 방어합니다. 입력 검증, 프롬프트 격리, 출력 필터링, 이상 행동 탐지 등 여러 레이어의 보안 메커니즘이 작동하며, 보안 로그 모니터링을 통해 의심스러운 활동을 실시간으로 감지합니다.",
            category: "Security"
        },
        {
            question: "데이터 암호화는 어떻게 적용되나요?",
            answer: "전송 중 데이터는 TLS 1.3으로 암호화되고, 저장 데이터는 AES-256으로 암호화됩니다. 고객 관리형 키(CMK)를 지원하여 암호화 키에 대한 완전한 통제권을 고객사에서 가질 수 있습니다.",
            category: "Security"
        },
        {
            question: "접근 제어는 어떻게 관리하나요?",
            answer: "역할 기반 접근 제어(RBAC)와 속성 기반 접근 제어(ABAC)를 지원합니다. SSO(Single Sign-On) 연동, MFA(Multi-Factor Authentication), IP 화이트리스트, 세션 관리 등 다양한 인증/인가 메커니즘을 제공합니다.",
            category: "Security"
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6 border border-blue-500/30">
                        Help Center
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        AiNex 도입 및 기술 관련 궁금한 점을 확인해 보세요.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative z-10">
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none text-white pl-12 transition-all shadow-lg"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </motion.div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-4 mb-16">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {category.icon && <category.icon className="w-4 h-4" />}
                            {category.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="container mx-auto px-4 mb-24 max-w-3xl">
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`rounded-2xl border transition-all overflow-hidden ${openIndex === index
                                        ? 'bg-white/10 border-blue-500/30'
                                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                                >
                                    <span className="font-bold text-lg pr-8">{faq.question}</span>
                                    <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-8 pb-8 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                                                <div className="pt-4">{faq.answer}</div>
                                                <div className="mt-4 flex gap-2">
                                                    <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-400">
                                                        {faq.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            No questions found matching your search.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FaqPage;
