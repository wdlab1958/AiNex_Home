'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Bell, Calendar, ArrowRight, Video, X } from 'lucide-react';

// Types
interface PressRelease {
    id: number;
    category: string;
    date: string;
    title: string;
    summary: string;
    content: string;
}

interface Notice {
    id: number;
    title: string;
    date: string;
    content: string;
}

interface ModalData {
    type: 'press' | 'notice';
    item: PressRelease | Notice;
}

// Modal Component
const DetailModal = ({ 
    isOpen, 
    onClose, 
    data 
}: { 
    isOpen: boolean; 
    onClose: () => void; 
    data: ModalData | null;
}) => {
    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!data) return null;

    const isPressRelease = data.type === 'press';
    const item = data.item;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    
                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl bg-[#111] border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className={`px-6 py-4 border-b border-white/10 ${isPressRelease ? 'bg-gradient-to-r from-blue-600/20 to-transparent' : 'bg-gradient-to-r from-purple-600/20 to-transparent'}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {isPressRelease ? (
                                        <Newspaper className="w-5 h-5 text-blue-400" />
                                    ) : (
                                        <Bell className="w-5 h-5 text-purple-400" />
                                    )}
                                    <span className={`text-sm font-medium ${isPressRelease ? 'text-blue-400' : 'text-purple-400'}`}>
                                        {isPressRelease ? '보도자료' : '공지사항'}
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                {isPressRelease && 'category' in item && (
                                    <span className={`px-2 py-1 rounded ${isPressRelease ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                                        {(item as PressRelease).category}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {item.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold mb-6 leading-tight">
                                {item.title}
                            </h2>

                            {/* Content */}
                            <div className="prose prose-invert prose-sm max-w-none">
                                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                    {item.content}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                            <div className="flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                                >
                                    닫기
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const NewsPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<ModalData | null>(null);

    const openPressModal = (press: PressRelease) => {
        setModalData({ type: 'press', item: press });
        setModalOpen(true);
    };

    const openNoticeModal = (notice: Notice) => {
        setModalData({ type: 'notice', item: notice });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalData(null);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Modal */}
            <DetailModal isOpen={modalOpen} onClose={closeModal} data={modalData} />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6 border border-blue-500/30">
                        Newsroom
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            AiNex News & Updates
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        A3 Security와 AiNex의 최신 소식, 보도자료, 그리고 기술 업데이트를 만나보세요.
                    </p>
                </motion.div>
            </section>

            {/* Press Releases */}
            <section className="container mx-auto px-4 mb-24">
                <div className="flex items-center gap-3 mb-8">
                    <Newspaper className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold">보도자료 (Press Release)</h2>
                </div>
                <div className="grid gap-6">
                    {pressReleases.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => openPressModal(news)}
                            className="group p-6 rounded-xl bg-[#111] border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">{news.category}</span>
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {news.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-400">{news.summary}</p>
                                </div>
                                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Announcements & Updates */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Bell className="w-6 h-6 text-purple-400" />
                            <h2 className="text-2xl font-bold">공지사항 (Notices)</h2>
                        </div>
                        <div className="space-y-4">
                            {notices.map((notice) => (
                                <div 
                                    key={notice.id} 
                                    onClick={() => openNoticeModal(notice)}
                                    className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-medium group-hover:text-purple-400 transition-colors">{notice.title}</span>
                                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{notice.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Video className="w-6 h-6 text-red-400" />
                            <h2 className="text-2xl font-bold">최신 영상 (Media)</h2>
                        </div>
                        <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                            {isPlaying ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
                                    title="AiNex Launch Seminar"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            ) : (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute inset-0 w-full h-full bg-black/60 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center z-10"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 mb-4 group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                    </div>
                                    <p className="font-semibold text-white">AiNex 런칭 세미나 하이라이트</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Press Release Data with detailed content
const pressReleases: PressRelease[] = [
    {
        id: 1,
        category: 'Product Launch',
        date: '2026.01.05',
        title: 'A3 Security, AI 컨설팅 자동화 플랫폼 \'AiNex\' 정식 출시',
        summary: '26년 보안 노하우와 LLM 기술을 결합한 기업용 AI 전환 솔루션 선보여...',
        content: `A3 Security(대표 한재호)는 26년간 축적한 보안 컨설팅 노하우와 최신 LLM(대규모 언어 모델) 기술을 결합한 기업용 AI 전환 솔루션 'AiNex'를 정식 출시했다고 5일 밝혔다.

AiNex는 기업의 AI 도입부터 운영까지 전 과정을 지원하는 통합 플랫폼으로, ISO/IEC 42001 기반의 AI 거버넌스 체계 구축, 맞춤형 AI 에이전트 개발, 그리고 지속적인 모니터링 및 최적화 서비스를 제공한다.

특히 AiNex의 핵심 기술인 'AgentForge'는 코드 작성 없이도 복잡한 업무 자동화 에이전트를 구축할 수 있는 노코드/로우코드 플랫폼으로, 기업의 기존 시스템과 원활하게 연동되어 빠른 도입이 가능하다.

A3 Security 한재호 대표는 "AiNex는 단순한 AI 도구가 아닌, 기업의 AI 전환을 안전하고 효과적으로 이끄는 파트너"라며 "26년간 쌓아온 보안 전문성을 바탕으로 신뢰할 수 있는 AI 솔루션을 제공하겠다"고 말했다.

AiNex는 금융, 의료, 제조 등 다양한 산업군을 대상으로 서비스를 시작하며, 올해 상반기 중 해외 시장 진출도 계획하고 있다.`
    },
    {
        id: 2,
        category: 'Partnership',
        date: '2025.12.20',
        title: 'A3 Security - 글로벌 클라우드 기업과 전략적 파트너십 체결',
        summary: 'Sovereign AI 구축을 위한 하이브리드 클라우드 인프라 협력 강화...',
        content: `A3 Security(대표 한재호)가 글로벌 클라우드 서비스 기업과 전략적 파트너십을 체결하고, Sovereign AI 구축을 위한 하이브리드 클라우드 인프라 협력을 강화한다고 20일 발표했다.

이번 파트너십을 통해 양사는 다음과 같은 영역에서 협력한다:

■ 하이브리드 클라우드 인프라 구축
- 온프레미스와 클라우드를 연계한 최적의 AI 인프라 설계
- 데이터 주권을 보장하는 Sovereign AI 환경 구축
- 고성능 GPU 클러스터 기반의 AI 워크로드 지원

■ 보안 및 컴플라이언스
- ISO/IEC 42001 준수 AI 시스템 구축
- 실시간 보안 모니터링 및 위협 대응
- 산업별 규제 대응 지원

■ 공동 솔루션 개발
- 산업별 특화 AI 솔루션 공동 개발
- 클라우드 네이티브 AI 애플리케이션 개발 지원
- 기술 교육 및 인력 양성 프로그램 운영

A3 Security 한재호 대표는 "이번 파트너십을 통해 기업들이 데이터 주권을 유지하면서도 글로벌 수준의 AI 인프라를 활용할 수 있게 되었다"며 "앞으로도 고객의 AI 전환을 위한 최적의 환경을 제공하겠다"고 밝혔다.`
    },
    {
        id: 3,
        category: 'Award',
        date: '2025.11.15',
        title: 'AgentForge, 2025 대한민국 AI 대상 \'올해의 혁신 플랫폼\' 수상',
        summary: '멀티 에이전트 협업 기술의 혁신성을 인정받아 대상 수상 영예 안아...',
        content: `A3 Security의 AI 에이전트 개발 플랫폼 'AgentForge'가 '2025 대한민국 AI 대상'에서 '올해의 혁신 플랫폼' 부문 대상을 수상했다.

과학기술정보통신부가 주최하고 한국정보통신산업협회가 주관한 이번 시상식에서 AgentForge는 다음과 같은 혁신성을 인정받았다:

■ 멀티 에이전트 협업 기술
AgentForge는 여러 AI 에이전트가 협력하여 복잡한 업무를 처리하는 'Agent Mesh' 아키텍처를 적용했다. 이를 통해 단일 에이전트로는 해결하기 어려운 복합적인 업무도 효율적으로 자동화할 수 있다.

■ 노코드/로우코드 접근성
개발자가 아닌 현업 담당자도 직관적인 인터페이스를 통해 AI 에이전트를 설계하고 배포할 수 있어, AI 기술의 민주화에 기여했다는 평가를 받았다.

■ 엔터프라이즈급 보안
26년 보안 전문 기업의 노하우가 담긴 보안 체계로, 기업 환경에서 안심하고 사용할 수 있는 AI 플랫폼을 구현했다.

심사위원단은 "AgentForge는 AI 에이전트 기술의 새로운 패러다임을 제시했다"며 "특히 보안과 사용성을 모두 갖춘 점이 높이 평가되었다"고 선정 이유를 밝혔다.

A3 Security 한재호 대표는 "이번 수상은 AgentForge의 기술력과 비전을 인정받은 것"이라며 "앞으로도 기업의 AI 혁신을 선도하는 플랫폼으로 발전시켜 나가겠다"고 소감을 전했다.`
    }
];

// Notice Data with detailed content
const notices: Notice[] = [
    { 
        id: 1,
        title: '[안내] AiNex 서비스 정기 점검 안내 (1/12)', 
        date: '2026.01.08',
        content: `안녕하세요, A3 Security입니다.

AiNex 서비스의 안정적인 운영을 위한 정기 점검이 아래와 같이 진행될 예정입니다.

■ 점검 일시
2026년 1월 12일 (일) 02:00 ~ 06:00 (4시간)

■ 점검 내용
- 서버 인프라 업그레이드
- 보안 패치 적용
- 데이터베이스 최적화
- AgentForge 엔진 업데이트

■ 영향 범위
- AiNex 플랫폼 전체 서비스 일시 중단
- AgentForge 에이전트 실행 일시 중단
- API 서비스 일시 중단

■ 유의 사항
- 점검 시작 전 진행 중인 작업을 저장해 주세요
- 예약된 에이전트 실행은 점검 완료 후 순차 처리됩니다
- 점검 완료 후 정상 서비스 안내 공지 예정

서비스 이용에 불편을 드려 죄송합니다.
더 나은 서비스로 보답하겠습니다.

감사합니다.`
    },
    { 
        id: 2,
        title: '개인정보처리방침 변경 안내', 
        date: '2026.01.02',
        content: `안녕하세요, A3 Security입니다.

개인정보보호법 개정 및 서비스 개선에 따라 개인정보처리방침이 아래와 같이 변경됩니다.

■ 시행일: 2026년 2월 1일

■ 주요 변경 내용

1. 개인정보 수집 항목 추가
- AI 서비스 품질 향상을 위한 서비스 이용 로그
- 에이전트 사용 패턴 분석 데이터 (비식별화 처리)

2. 개인정보 보유 기간 변경
- 서비스 이용 기록: 3년 → 5년 (관계 법령 준수)
- 마케팅 동의 정보: 1년 → 동의 철회 시까지

3. 개인정보 제3자 제공 추가
- 클라우드 인프라 파트너사 (서비스 운영 목적)
- 보안 모니터링 협력사 (보안 강화 목적)

4. 국외 이전 조항 신설
- 글로벌 서비스 확대에 따른 국외 데이터 이전 안내

■ 문의처
- 이메일: privacy@a3security.com
- 전화: 02-1234-5678 (평일 09:00-18:00)

변경된 개인정보처리방침에 동의하지 않으시는 경우, 
서비스 이용을 중단하고 회원 탈퇴를 요청하실 수 있습니다.

감사합니다.`
    },
    { 
        id: 3,
        title: '2026년 상반기 AI 컨설턴트 공개 채용', 
        date: '2025.12.28',
        content: `A3 Security와 함께 AI의 미래를 만들어갈 인재를 찾습니다.

■ 모집 분야 및 인원

1. AI 컨설턴트 (0명)
- AI 전략 수립 및 로드맵 설계
- ISO/IEC 42001 기반 거버넌스 컨설팅
- 산업별 AI 도입 전략 자문

2. AI 솔루션 아키텍트 (0명)
- AI 시스템 아키텍처 설계
- MLOps 파이프라인 구축
- 하이브리드 클라우드 AI 인프라 설계

3. AI 보안 전문가 (0명)
- AI 시스템 보안 진단 및 취약점 분석
- AI 모델 보안 및 프라이버시 보호
- AI Act, GDPR 등 규제 대응

■ 지원 자격
- 관련 분야 경력 3년 이상
- AI/ML 프로젝트 수행 경험 보유자
- 국내외 출장 가능자

■ 우대 사항
- ISO/IEC 42001, 27001 인증 경험
- 대형 SI 프로젝트 PM/PL 경험
- 영어 커뮤니케이션 가능자

■ 전형 절차
서류 전형 → 1차 면접(실무) → 2차 면접(임원) → 최종 합격

■ 지원 기간
2025.12.28 ~ 2026.01.31

■ 지원 방법
careers@a3security.com으로 이력서 및 자기소개서 제출

함께 성장할 여러분의 많은 지원 바랍니다!`
    },
];

export default NewsPage;
