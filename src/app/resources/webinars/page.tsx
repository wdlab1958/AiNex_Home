'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Video, Calendar, Clock, Users, Play, ChevronRight, 
    X, ExternalLink, Bell, CheckCircle, Star, Bookmark
} from 'lucide-react';

interface Webinar {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    speaker: {
        name: string;
        role: string;
        company: string;
        image?: string;
    };
    category: string;
    type: 'upcoming' | 'recorded';
    registeredCount?: number;
    viewCount?: number;
    thumbnail?: string;
    tags: string[];
    content?: string;
}

const webinars: Webinar[] = [
    // Upcoming Webinars
    {
        id: 1,
        title: "ISO 42001 기반의 엔터프라이즈 AI 거버넌스 구축 전략",
        description: "AI 관리 시스템 국제 표준인 ISO/IEC 42001을 기반으로 조직 내 AI 거버넌스를 효과적으로 구축하는 방법을 알아봅니다.",
        date: "2026년 1월 20일",
        time: "오후 2:00 - 3:30 (KST)",
        duration: "90분",
        speaker: {
            name: "김정호",
            role: "AI 거버넌스 총괄",
            company: "AiNex"
        },
        category: "Governance",
        type: "upcoming",
        registeredCount: 234,
        tags: ["ISO 42001", "AI 거버넌스", "규제 준수"],
        content: `
## 웨비나 소개

AI 기술의 급속한 발전과 함께 AI 시스템의 안전하고 책임감 있는 운영에 대한 요구가 높아지고 있습니다. 
ISO/IEC 42001은 AI 관리 시스템에 대한 최초의 국제 표준으로, 조직이 AI를 책임감 있게 개발하고 
운영할 수 있도록 체계적인 프레임워크를 제공합니다.

## 주요 내용

1. **ISO 42001 표준 개요**
   - AI 관리 시스템(AIMS)의 핵심 요소
   - ISO 27001과의 연계성 및 차이점
   - 인증 프로세스 및 요구사항

2. **엔터프라이즈 AI 거버넌스 프레임워크**
   - AI 정책 및 전략 수립
   - 리스크 관리 체계 구축
   - 윤리적 AI 원칙 적용

3. **실제 도입 사례**
   - 금융권 AI 거버넌스 구축 사례
   - 제조업 AI 품질 관리 체계
   - 공공기관 AI 윤리 가이드라인

4. **Q&A 세션**

## 이런 분들께 추천합니다

- AI 도입을 계획하거나 진행 중인 기업의 의사결정권자
- IT/보안 담당자 및 CISO
- AI 프로젝트 매니저
- 규제 준수 및 리스크 관리 담당자
        `
    },
    {
        id: 2,
        title: "멀티 에이전트 시스템으로 비즈니스 프로세스 자동화하기",
        description: "LangGraph와 CrewAI를 활용하여 복잡한 비즈니스 워크플로우를 자동화하는 멀티 에이전트 시스템 구축 방법을 소개합니다.",
        date: "2026년 1월 27일",
        time: "오후 3:00 - 4:30 (KST)",
        duration: "90분",
        speaker: {
            name: "박민수",
            role: "AgentForge 리드 엔지니어",
            company: "AiNex"
        },
        category: "Technical",
        type: "upcoming",
        registeredCount: 189,
        tags: ["멀티 에이전트", "LangGraph", "자동화"],
        content: `
## 웨비나 소개

단일 AI 모델로는 해결하기 어려운 복잡한 비즈니스 문제들이 있습니다. 멀티 에이전트 시스템은 
여러 AI 에이전트가 협업하여 복잡한 작업을 효율적으로 수행할 수 있게 해줍니다.

## 주요 내용

1. **멀티 에이전트 시스템 개요**
   - 단일 에이전트 vs 멀티 에이전트
   - 에이전트 간 협업 패턴
   - 활용 사례 및 장점

2. **LangGraph 딥다이브**
   - 상태 기반 워크플로우 설계
   - 조건부 분기 및 루프 처리
   - 에러 핸들링 전략

3. **CrewAI를 활용한 팀 에이전트 구축**
   - 역할 기반 에이전트 설계
   - 태스크 분배 및 조율
   - 도구(Tools) 통합

4. **실습 데모: 문서 분석 에이전트 팀 구축**

## 사전 준비사항

- Python 기본 지식
- LLM API 사용 경험 (선택)
        `
    },
    {
        id: 3,
        title: "RAG 시스템 성능 최적화: 실전 가이드",
        description: "검색 증강 생성(RAG) 시스템의 정확도와 성능을 향상시키는 고급 기법들을 실습과 함께 알아봅니다.",
        date: "2026년 2월 3일",
        time: "오후 2:00 - 4:00 (KST)",
        duration: "120분",
        speaker: {
            name: "이서연",
            role: "AI Research Lead",
            company: "AiNex"
        },
        category: "Technical",
        type: "upcoming",
        registeredCount: 312,
        tags: ["RAG", "벡터 DB", "성능 최적화"],
        content: `
## 웨비나 소개

RAG(Retrieval-Augmented Generation)는 기업 데이터를 활용한 AI 서비스 구축의 핵심 기술입니다.
이 웨비나에서는 RAG 시스템의 성능을 극대화하기 위한 실전 기법들을 상세히 다룹니다.

## 주요 내용

1. **RAG 아키텍처 심화**
   - 청킹 전략 최적화
   - 임베딩 모델 선택 가이드
   - 하이브리드 검색 구현

2. **벡터 데이터베이스 선택과 최적화**
   - PostgreSQL + pgvector
   - Qdrant / ChromaDB
   - 인덱싱 전략

3. **Reranking과 후처리**
   - Cross-encoder 활용
   - MMR(Maximal Marginal Relevance)
   - 컨텍스트 압축

4. **평가와 모니터링**
   - RAG 평가 메트릭
   - A/B 테스트 설계
   - 운영 모니터링 구축
        `
    },
    // Recorded Webinars
    {
        id: 4,
        title: "온프레미스 LLM 구축: Ollama와 함께하는 데이터 주권 확보",
        description: "민감한 데이터를 외부에 노출하지 않으면서 LLM을 활용하는 온프레미스 구축 전략을 소개합니다.",
        date: "2025년 12월 18일",
        time: "녹화본",
        duration: "75분",
        speaker: {
            name: "최준혁",
            role: "인프라 아키텍트",
            company: "AiNex"
        },
        category: "Security",
        type: "recorded",
        viewCount: 1247,
        tags: ["온프레미스", "Ollama", "데이터 보안"],
        content: `
## 웨비나 소개

데이터 주권과 보안이 중요한 기업에서는 클라우드 기반 LLM API 사용이 어려울 수 있습니다.
Ollama를 활용한 온프레미스 LLM 구축으로 데이터 보안을 확보하면서도 AI의 이점을 누리는 방법을 알아봅니다.

## 주요 내용

1. **온프레미스 LLM의 필요성**
   - 데이터 주권 이슈
   - 규제 요구사항
   - 비용 최적화

2. **Ollama 설치 및 설정**
   - 하드웨어 요구사항
   - 모델 선택 가이드
   - GPU 최적화

3. **프로덕션 환경 구축**
   - 고가용성 설계
   - 로드 밸런싱
   - 모니터링 및 로깅

4. **보안 강화**
   - 네트워크 격리
   - 접근 제어
   - 감사 로깅
        `
    },
    {
        id: 5,
        title: "AI 보안 위협과 대응: Prompt Injection부터 Model Extraction까지",
        description: "AI 시스템을 대상으로 하는 다양한 보안 위협과 이에 대한 방어 전략을 A3 Security의 26년 보안 노하우와 함께 알아봅니다.",
        date: "2025년 12월 4일",
        time: "녹화본",
        duration: "90분",
        speaker: {
            name: "한재호",
            role: "보안 컨설팅 총괄",
            company: "A3 Security"
        },
        category: "Security",
        type: "recorded",
        viewCount: 2891,
        tags: ["AI 보안", "Prompt Injection", "취약점"],
        content: `
## 웨비나 소개

AI 시스템의 도입이 늘어나면서 새로운 형태의 보안 위협도 등장하고 있습니다.
A3 Security의 26년 보안 전문성을 바탕으로 AI 특화 보안 위협과 대응 방안을 상세히 다룹니다.

## 주요 내용

1. **AI 보안 위협 유형**
   - Prompt Injection (직접/간접)
   - Jailbreaking
   - Model Extraction
   - Data Poisoning

2. **방어 전략**
   - 입력 검증 및 필터링
   - 출력 모니터링
   - 샌드박싱
   - Rate Limiting

3. **사례 연구**
   - 실제 공격 사례 분석
   - 취약점 진단 방법론
   - 모의 해킹 시나리오

4. **보안 체계 구축**
   - AI 보안 정책 수립
   - 보안 테스트 자동화
   - 지속적 모니터링
        `
    },
    {
        id: 6,
        title: "AiNex 5단계 컨설팅 프레임워크 소개",
        description: "성공적인 AI 전환을 위한 AiNex만의 체계적인 5단계 컨설팅 방법론을 상세히 소개합니다.",
        date: "2025년 11월 20일",
        time: "녹화본",
        duration: "60분",
        speaker: {
            name: "김정호",
            role: "AI 거버넌스 총괄",
            company: "AiNex"
        },
        category: "Consulting",
        type: "recorded",
        viewCount: 1856,
        tags: ["컨설팅", "AI 전환", "방법론"],
        content: `
## 웨비나 소개

AI 도입은 기술만의 문제가 아닙니다. 전략, 조직, 프로세스, 문화까지 종합적인 변화가 필요합니다.
AiNex의 5단계 컨설팅 프레임워크로 체계적인 AI 전환을 달성하는 방법을 알아봅니다.

## 주요 내용

1. **현황 진단 (Assessment)**
   - AI 성숙도 평가
   - 데이터 인프라 점검
   - 조직 역량 분석

2. **전략 수립 (Strategy)**
   - AI 비전 및 목표 설정
   - 우선순위 도출
   - 로드맵 수립

3. **아키텍처 설계 (Architecture)**
   - 기술 스택 선정
   - 데이터 파이프라인 설계
   - 보안 아키텍처

4. **파일럿 구현 (Pilot)**
   - PoC 프로젝트 수행
   - 성과 측정
   - 교훈 도출

5. **확산 및 최적화 (Scale)**
   - 전사 확산 계획
   - 변화 관리
   - 지속적 개선
        `
    },
    {
        id: 7,
        title: "금융권 AI 도입 사례: 리스크 관리부터 고객 서비스까지",
        description: "국내 주요 금융기관의 AI 도입 성공 사례를 통해 금융 산업에 특화된 AI 활용 전략을 공유합니다.",
        date: "2025년 11월 6일",
        time: "녹화본",
        duration: "80분",
        speaker: {
            name: "정다은",
            role: "금융 산업 컨설턴트",
            company: "AiNex"
        },
        category: "Case Study",
        type: "recorded",
        viewCount: 2134,
        tags: ["금융", "사례 연구", "AI 활용"],
        content: `
## 웨비나 소개

금융 산업은 AI 도입이 가장 활발한 분야 중 하나입니다.
국내 주요 금융기관의 실제 사례를 통해 금융권 AI 도입의 성공 요인과 주의점을 살펴봅니다.

## 주요 내용

1. **금융권 AI 트렌드**
   - 글로벌 동향
   - 국내 현황
   - 규제 환경

2. **활용 사례: 리스크 관리**
   - 신용 평가 모델
   - 이상 거래 탐지
   - 자금세탁방지(AML)

3. **활용 사례: 고객 서비스**
   - AI 챗봇/상담원
   - 개인화 추천
   - 문서 자동화

4. **도입 시 고려사항**
   - 금융 규제 준수
   - 설명가능한 AI
   - 모델 거버넌스
        `
    },
    {
        id: 8,
        title: "AgentForge 플랫폼 데모: 첫 에이전트 구축하기",
        description: "AgentForge 플랫폼을 활용하여 실제로 AI 에이전트를 구축하는 과정을 라이브 데모로 진행합니다.",
        date: "2025년 10월 23일",
        time: "녹화본",
        duration: "45분",
        speaker: {
            name: "박민수",
            role: "AgentForge 리드 엔지니어",
            company: "AiNex"
        },
        category: "Technical",
        type: "recorded",
        viewCount: 3567,
        tags: ["AgentForge", "데모", "튜토리얼"],
        content: `
## 웨비나 소개

AgentForge 플랫폼의 핵심 기능을 라이브 데모를 통해 직접 확인하실 수 있습니다.
처음부터 끝까지 실제 에이전트를 구축하는 과정을 함께 진행합니다.

## 주요 내용

1. **AgentForge 소개**
   - 플랫폼 아키텍처
   - 주요 기능
   - 지원 모델

2. **환경 설정**
   - 계정 생성 및 설정
   - API 키 관리
   - 프로젝트 생성

3. **에이전트 구축 데모**
   - 프롬프트 설계
   - 도구 연결
   - 테스트 및 디버깅

4. **배포와 모니터링**
   - API 엔드포인트 생성
   - 사용량 모니터링
   - 로그 분석
        `
    }
];

const categories = [
    { id: 'All', label: '전체' },
    { id: 'Governance', label: 'AI 거버넌스' },
    { id: 'Technical', label: '기술' },
    { id: 'Security', label: '보안' },
    { id: 'Consulting', label: '컨설팅' },
    { id: 'Case Study', label: '사례 연구' },
];

// Modal Component
const WebinarModal = ({ 
    webinar, 
    isOpen, 
    onClose 
}: { 
    webinar: Webinar | null; 
    isOpen: boolean; 
    onClose: () => void;
}) => {
    const [isRegistered, setIsRegistered] = useState(false);
    
    if (!webinar) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f1012] border border-white/10 rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 z-10 bg-[#0f1012]/95 backdrop-blur-sm border-b border-white/10 p-6">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                    webinar.type === 'upcoming' 
                                        ? 'bg-green-500/20 text-green-400' 
                                        : 'bg-blue-500/20 text-blue-400'
                                }`}>
                                    {webinar.type === 'upcoming' ? '예정됨' : '녹화본'}
                                </span>
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">
                                    {webinar.category}
                                </span>
                            </div>
                            
                            <h2 className="text-2xl font-bold mb-2">{webinar.title}</h2>
                            <p className="text-gray-400">{webinar.description}</p>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Info Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="p-4 rounded-xl bg-white/5">
                                    <Calendar className="w-5 h-5 text-blue-400 mb-2" />
                                    <p className="text-sm text-gray-400">날짜</p>
                                    <p className="font-medium">{webinar.date}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <Clock className="w-5 h-5 text-green-400 mb-2" />
                                    <p className="text-sm text-gray-400">시간</p>
                                    <p className="font-medium">{webinar.time}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <Video className="w-5 h-5 text-purple-400 mb-2" />
                                    <p className="text-sm text-gray-400">소요 시간</p>
                                    <p className="font-medium">{webinar.duration}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <Users className="w-5 h-5 text-yellow-400 mb-2" />
                                    <p className="text-sm text-gray-400">
                                        {webinar.type === 'upcoming' ? '등록자' : '조회수'}
                                    </p>
                                    <p className="font-medium">
                                        {webinar.type === 'upcoming' 
                                            ? `${webinar.registeredCount}명` 
                                            : `${webinar.viewCount?.toLocaleString()}회`}
                                    </p>
                                </div>
                            </div>

                            {/* Speaker Info */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 mb-8">
                                <h3 className="text-lg font-bold mb-4">발표자</h3>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                                        {webinar.speaker.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">{webinar.speaker.name}</p>
                                        <p className="text-gray-400">{webinar.speaker.role}</p>
                                        <p className="text-sm text-blue-400">{webinar.speaker.company}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {webinar.tags.map((tag) => (
                                    <span 
                                        key={tag}
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Content */}
                            {webinar.content && (
                                <div className="prose prose-invert max-w-none">
                                    <div className="space-y-4 text-gray-300">
                                        {webinar.content.split('\n').map((line, i) => {
                                            if (line.startsWith('## ')) {
                                                return (
                                                    <h3 key={i} className="text-xl font-bold text-white mt-8 mb-4">
                                                        {line.replace('## ', '')}
                                                    </h3>
                                                );
                                            }
                                            if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                                                return (
                                                    <p key={i} className="font-semibold text-white mt-4">
                                                        {line}
                                                    </p>
                                                );
                                            }
                                            if (line.startsWith('   - ')) {
                                                return (
                                                    <p key={i} className="ml-6 text-gray-400">
                                                        • {line.replace('   - ', '')}
                                                    </p>
                                                );
                                            }
                                            if (line.trim()) {
                                                return <p key={i}>{line}</p>;
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* CTA Button */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                {webinar.type === 'upcoming' ? (
                                    isRegistered ? (
                                        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                            <CheckCircle className="w-6 h-6 text-green-400" />
                                            <div>
                                                <p className="font-semibold text-green-400">등록이 완료되었습니다!</p>
                                                <p className="text-sm text-gray-400">웨비나 시작 전 이메일로 알림을 보내드립니다.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => setIsRegistered(true)}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-semibold transition-all flex items-center justify-center gap-2"
                                        >
                                            <Bell className="w-5 h-5" />
                                            웨비나 등록하기
                                        </button>
                                    )
                                ) : (
                                    <button
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 font-semibold transition-all flex items-center justify-center gap-2"
                                    >
                                        <Play className="w-5 h-5" />
                                        녹화본 시청하기
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Webinar Card Component
const WebinarCard = ({ 
    webinar, 
    onClick,
    featured = false 
}: { 
    webinar: Webinar; 
    onClick: () => void;
    featured?: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`group cursor-pointer rounded-2xl border transition-all overflow-hidden ${
                featured 
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:border-blue-400/50' 
                    : 'bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-white/10'
            }`}
            onClick={onClick}
        >
            {/* Thumbnail Area */}
            <div className={`relative ${featured ? 'h-48' : 'h-40'} bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center`}>
                <Video className={`${featured ? 'w-16 h-16' : 'w-12 h-12'} text-white/20`} />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        webinar.type === 'upcoming' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-blue-500/90 text-white'
                    }`}>
                        {webinar.type === 'upcoming' ? '예정됨' : '녹화본'}
                    </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-black/60 text-white">
                        {webinar.duration}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-purple-500/20 text-purple-400">
                        {webinar.category}
                    </span>
                    {featured && (
                        <span className="px-2 py-1 text-xs font-medium rounded bg-yellow-500/20 text-yellow-400 flex items-center gap-1">
                            <Star className="w-3 h-3" fill="currentColor" /> Featured
                        </span>
                    )}
                </div>

                <h3 className={`font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 ${
                    featured ? 'text-xl' : 'text-lg'
                }`}>
                    {webinar.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {webinar.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {webinar.date}
                    </span>
                    {webinar.type === 'upcoming' && webinar.registeredCount && (
                        <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {webinar.registeredCount}명 등록
                        </span>
                    )}
                    {webinar.type === 'recorded' && webinar.viewCount && (
                        <span className="flex items-center gap-1">
                            <Play className="w-4 h-4" />
                            {webinar.viewCount.toLocaleString()}회 조회
                        </span>
                    )}
                </div>

                {/* Speaker */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                            {webinar.speaker.name[0]}
                        </div>
                        <div>
                            <p className="text-sm font-medium">{webinar.speaker.name}</p>
                            <p className="text-xs text-gray-500">{webinar.speaker.company}</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </motion.div>
    );
};

const WebinarsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'recorded'>('all');
    const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredWebinars = useMemo(() => {
        return webinars.filter(webinar => {
            const matchesCategory = activeCategory === 'All' || webinar.category === activeCategory;
            const matchesType = activeTab === 'all' || webinar.type === activeTab;
            return matchesCategory && matchesType;
        });
    }, [activeCategory, activeTab]);

    const totalCount = webinars.length;
    const upcomingCount = webinars.filter(w => w.type === 'upcoming').length;
    const recordedCount = webinars.filter(w => w.type === 'recorded').length;

    const handleWebinarClick = (webinar: Webinar) => {
        setSelectedWebinar(webinar);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6 border border-purple-500/30">
                        <Video className="w-4 h-4" />
                        Webinars & Events
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        웨비나 & 이벤트
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        AI 전문가들이 전하는 인사이트와 실전 노하우를 확인하세요.
                        라이브 웨비나에 참여하거나 녹화본을 시청하실 수 있습니다.
                    </p>
                </motion.div>
            </section>

            {/* Tabs */}
            <section className="container mx-auto px-4 mb-8">
                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                            activeTab === 'all'
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                    >
                        <Video className="w-4 h-4" />
                        전체 보기
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                            {totalCount}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                            activeTab === 'upcoming'
                                ? 'bg-green-600 text-white shadow-lg shadow-green-900/40'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                    >
                        <Bell className="w-4 h-4" />
                        예정된 웨비나
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                            {upcomingCount}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab('recorded')}
                        className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                            activeTab === 'recorded'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                    >
                        <Play className="w-4 h-4" />
                        녹화본 다시보기
                        <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                            {recordedCount}
                        </span>
                    </button>
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-4 mb-12">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                activeCategory === category.id
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/40'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Webinar Grid */}
            <section className="container mx-auto px-4 mb-20">
                {filteredWebinars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredWebinars.map((webinar, index) => (
                            <WebinarCard
                                key={webinar.id}
                                webinar={webinar}
                                onClick={() => handleWebinarClick(webinar)}
                                featured={index === 0 && activeTab === 'upcoming'}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Video className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                        <p className="text-xl text-gray-500">
                            해당 카테고리에 {activeTab === 'all' ? '' : activeTab === 'upcoming' ? '예정된 ' : '녹화된 '}웨비나가 없습니다.
                        </p>
                    </div>
                )}
            </section>

            {/* Newsletter CTA */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 text-center"
                >
                    <Bookmark className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        웨비나 알림 받기
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        새로운 웨비나 일정과 AI 인사이트를 이메일로 받아보세요.
                        월 2회 발송되며, 언제든 구독을 취소할 수 있습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="이메일 주소 입력"
                            className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none"
                        />
                        <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 font-medium transition-colors whitespace-nowrap">
                            구독하기
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Modal */}
            <WebinarModal
                webinar={selectedWebinar}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default WebinarsPage;

