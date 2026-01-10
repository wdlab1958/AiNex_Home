'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart, TrendingUp, Users, Target, Factory, Building2, ShoppingBag, X, CheckCircle, Clock, Award, Lightbulb, Settings, ChartBar } from 'lucide-react';
import Link from 'next/link';

// 케이스 스터디 상세 데이터
const caseStudies = [
    {
        id: 'manufacturing',
        category: 'Manufacturing',
        title: '스마트 팩토리 예지보전 시스템 구축',
        client: 'Global Auto Parts Co.',
        industry: '자동차 부품 제조',
        duration: '6개월',
        description: 'IoT 센서 데이터와 AiNex RAG를 결합하여 설비 고장을 48시간 전에 예측, 다운타임을 획기적으로 감소시켰습니다.',
        metrics: [
            { label: '다운타임 감소', value: '35%' },
            { label: '유지보수 비용 절감', value: '20%' }
        ],
        icon: <Factory className="w-8 h-8 text-blue-400" />,
        fullContent: {
            challenge: '기존의 정기 점검 방식으로는 예상치 못한 설비 고장으로 인한 생산 중단이 빈번하게 발생했습니다. 연간 약 120시간의 계획되지 않은 다운타임으로 인해 상당한 생산성 손실이 발생하고 있었으며, 긴급 유지보수 비용도 지속적으로 증가하는 상황이었습니다.',
            solution: [
                '2,000개 이상의 IoT 센서에서 수집되는 진동, 온도, 전류 데이터를 실시간으로 분석',
                'AiNex의 RAG 시스템을 활용하여 과거 고장 이력과 정비 매뉴얼을 학습',
                '멀티 에이전트 협업을 통한 복합적 이상 징후 감지 및 원인 분석',
                '정비 담당자를 위한 직관적인 대시보드 및 알림 시스템 구축',
                'ISO 42001 기반의 AI 거버넌스 체계 수립'
            ],
            results: [
                { metric: '다운타임 감소', value: '35%', description: '연간 42시간 감소' },
                { metric: '유지보수 비용', value: '20% 절감', description: '연간 8억원 절감' },
                { metric: '예측 정확도', value: '94.2%', description: '48시간 전 고장 예측' },
                { metric: 'OEE 향상', value: '+12%', description: '설비 종합 효율 개선' }
            ],
            technologies: ['AiNex RAG', 'AgentForge', 'IoT Integration', 'Real-time Analytics', 'Predictive ML'],
            testimonial: {
                quote: '기존에는 설비가 멈춰야 문제를 알 수 있었지만, 이제는 이상 징후를 미리 감지하여 계획된 정비가 가능해졌습니다. 생산 효율이 크게 개선되었습니다.',
                author: '박준혁 생산기술팀장',
                company: 'Global Auto Parts Co.'
            },
            timeline: [
                { phase: '1단계', title: '현황 분석 및 설계', duration: '1개월' },
                { phase: '2단계', title: '데이터 수집 체계 구축', duration: '1.5개월' },
                { phase: '3단계', title: 'AI 모델 개발 및 학습', duration: '2개월' },
                { phase: '4단계', title: '시스템 통합 및 테스트', duration: '1개월' },
                { phase: '5단계', title: '운영 및 최적화', duration: '0.5개월' }
            ]
        }
    },
    {
        id: 'finance',
        category: 'Finance',
        title: 'AI 기반 이상거래 탐지 및 규제 준수',
        client: 'Leading Fintech Bank',
        industry: '금융 서비스',
        duration: '8개월',
        description: '복잡한 금융 규제 문서를 실시간으로 분석하고, 이상 거래 패턴을 탐지하여 컴플라이언스 리스크를 최소화했습니다.',
        metrics: [
            { label: '이상 탐지 정확도', value: '98.5%' },
            { label: '규제 대응 시간', value: '-60%' }
        ],
        icon: <Building2 className="w-8 h-8 text-emerald-400" />,
        fullContent: {
            challenge: '금융 규제가 빠르게 변화하는 환경에서 수천 페이지에 달하는 규제 문서를 적시에 분석하고 적용하는 것이 큰 부담이었습니다. 또한 기존 룰 기반 FDS(Fraud Detection System)는 새로운 유형의 이상거래를 탐지하지 못하는 한계가 있었습니다.',
            solution: [
                'AiNex RAG를 활용한 금융 규제 문서(금융위, 금감원, 국제기준) 자동 분석',
                '거래 패턴 분석을 위한 Graph Neural Network 기반 이상 탐지 모델 개발',
                'Risk 에이전트와 Report 에이전트 협업을 통한 자동 컴플라이언스 리포팅',
                '온프레미스 배포로 고객 금융 정보의 완벽한 보안 보장',
                'ISO 27001 및 금융보안원 기준 준수'
            ],
            results: [
                { metric: '탐지 정확도', value: '98.5%', description: 'False Positive 70% 감소' },
                { metric: '규제 대응 시간', value: '60% 단축', description: '평균 2주 → 5일' },
                { metric: '사기 피해 방지', value: '120억원', description: '연간 피해 방지액' },
                { metric: '업무 효율화', value: '40%', description: '컴플라이언스 인력 효율화' }
            ],
            technologies: ['AiNex RAG', 'AgentForge', 'Graph Neural Network', 'On-premise LLM', 'Real-time Streaming'],
            testimonial: {
                quote: '규제 변경 사항을 AI가 먼저 파악하고 영향도 분석까지 제공해주니, 컴플라이언스 업무의 품질이 크게 향상되었습니다. 특히 데이터가 외부로 나가지 않는다는 점이 경영진 승인의 결정적 요인이었습니다.',
                author: '최현우 준법감시팀장',
                company: 'Leading Fintech Bank'
            },
            timeline: [
                { phase: '1단계', title: 'PoC 및 보안 검토', duration: '2개월' },
                { phase: '2단계', title: '온프레미스 인프라 구축', duration: '1.5개월' },
                { phase: '3단계', title: 'RAG 시스템 및 FDS 개발', duration: '2.5개월' },
                { phase: '4단계', title: '통합 테스트 및 보안 인증', duration: '1.5개월' },
                { phase: '5단계', title: '운영 전환 및 모니터링', duration: '0.5개월' }
            ]
        }
    },
    {
        id: 'retail',
        category: 'Retail',
        title: '초개인화 추천 엔진 및 재고 최적화',
        client: 'Major E-commerce Platform',
        industry: '이커머스 / 유통',
        duration: '5개월',
        description: '고객 행동 데이터 분석을 통해 개인화된 상품을 추천하고, 수요 예측 정확도를 높여 재고 비용을 절감했습니다.',
        metrics: [
            { label: '구매 전환율', value: '+15%' },
            { label: '재고 폐기율', value: '-25%' }
        ],
        icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
        fullContent: {
            challenge: '수백만 SKU(Stock Keeping Unit)와 다양한 고객층을 가진 대형 이커머스 플랫폼에서 효과적인 개인화 추천과 정확한 수요 예측이 어려웠습니다. 기존 협업 필터링 방식의 추천 시스템은 콜드 스타트 문제와 낮은 정확도로 인해 고객 만족도가 떨어지고 있었습니다.',
            solution: [
                '고객 행동 로그, 리뷰, 상품 정보를 통합한 멀티모달 RAG 시스템 구축',
                'Strategy 에이전트를 활용한 고객 세그먼트별 맞춤 마케팅 전략 수립',
                '시계열 예측 모델과 외부 변수(날씨, 이벤트, 트렌드)를 결합한 수요 예측',
                '실시간 재고 현황 연동 및 자동 발주 시스템 구축',
                'A/B 테스트 기반의 지속적 모델 개선 프로세스'
            ],
            results: [
                { metric: '구매 전환율', value: '+15%', description: '추천 클릭 대비 구매' },
                { metric: '재고 폐기율', value: '-25%', description: '연간 15억원 절감' },
                { metric: '수요 예측 정확도', value: '89%', description: 'MAPE 기준' },
                { metric: '고객 만족도', value: '+22%', description: 'NPS 점수 향상' }
            ],
            technologies: ['AiNex RAG', 'AgentForge', 'Recommendation Engine', 'Time-series Forecasting', 'Real-time Analytics'],
            testimonial: {
                quote: '단순한 추천을 넘어서 고객이 왜 이 상품을 좋아할지 설명까지 제공하니 신뢰도가 크게 올라갔습니다. 재고 관리도 AI가 알아서 해주니 운영 부담이 많이 줄었습니다.',
                author: '정수민 MD팀 이사',
                company: 'Major E-commerce Platform'
            },
            timeline: [
                { phase: '1단계', title: '데이터 분석 및 설계', duration: '1개월' },
                { phase: '2단계', title: '추천 엔진 개발', duration: '1.5개월' },
                { phase: '3단계', title: '수요 예측 모델 개발', duration: '1.5개월' },
                { phase: '4단계', title: 'A/B 테스트 및 최적화', duration: '0.5개월' },
                { phase: '5단계', title: '전체 적용 및 모니터링', duration: '0.5개월' }
            ]
        }
    }
];

// 케이스 스터디 모달 컴포넌트
const CaseModal = ({ 
    isOpen, 
    onClose, 
    caseStudy 
}: { 
    isOpen: boolean; 
    onClose: () => void; 
    caseStudy: typeof caseStudies[0] | null 
}) => {
    if (!isOpen || !caseStudy) return null;

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
                    className="bg-[#0f1117] border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 헤더 */}
                    <div className="sticky top-0 bg-[#0f1117] border-b border-white/10 p-6 flex items-start justify-between z-10">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                                {caseStudy.icon}
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500/80 bg-emerald-500/10 px-3 py-1 rounded-full">
                                    {caseStudy.category}
                                </span>
                                <h2 className="text-2xl font-bold mt-2">{caseStudy.title}</h2>
                                <p className="text-gray-400 mt-1">{caseStudy.client}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* 프로젝트 개요 */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 bg-white/5 rounded-xl text-center">
                                <div className="text-sm text-gray-400 mb-1">산업</div>
                                <div className="font-semibold text-white">{caseStudy.industry}</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl text-center">
                                <div className="text-sm text-gray-400 mb-1">프로젝트 기간</div>
                                <div className="font-semibold text-white">{caseStudy.duration}</div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-xl text-center">
                                <div className="text-sm text-gray-400 mb-1">고객사</div>
                                <div className="font-semibold text-white">{caseStudy.client}</div>
                            </div>
                        </div>

                        {/* 도전 과제 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-red-400" />
                                도전 과제 (Challenge)
                            </h3>
                            <p className="text-gray-300 leading-relaxed bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
                                {caseStudy.fullContent.challenge}
                            </p>
                        </div>

                        {/* 솔루션 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-400" />
                                솔루션 (Solution)
                            </h3>
                            <div className="space-y-3">
                                {caseStudy.fullContent.solution.map((item, index) => (
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

                        {/* 성과 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <ChartBar className="w-5 h-5 text-emerald-400" />
                                주요 성과 (Results)
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {caseStudy.fullContent.results.map((result, index) => (
                                    <div 
                                        key={index}
                                        className="p-4 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl text-center"
                                    >
                                        <div className="text-2xl font-bold text-emerald-400 mb-1">{result.value}</div>
                                        <div className="text-sm font-medium text-white mb-1">{result.metric}</div>
                                        <div className="text-xs text-gray-400">{result.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 프로젝트 타임라인 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                프로젝트 타임라인
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.fullContent.timeline.map((phase, index) => (
                                    <div 
                                        key={index}
                                        className="flex-1 min-w-[150px] p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                                    >
                                        <div className="text-xs text-blue-400 font-bold mb-1">{phase.phase}</div>
                                        <div className="text-sm text-white font-medium mb-1">{phase.title}</div>
                                        <div className="text-xs text-gray-400">{phase.duration}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 사용 기술 */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-purple-400" />
                                적용 기술
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {caseStudy.fullContent.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 고객 후기 */}
                        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-yellow-400" />
                                고객 후기
                            </h3>
                            <div className="relative">
                                <div className="text-yellow-400 text-5xl font-serif leading-none opacity-30 absolute -top-2 -left-2">"</div>
                                <p className="text-gray-300 italic text-lg leading-relaxed pl-6 mb-4">
                                    {caseStudy.fullContent.testimonial.quote}
                                </p>
                                <div className="pl-6">
                                    <div className="font-bold text-white">{caseStudy.fullContent.testimonial.author}</div>
                                    <div className="text-sm text-emerald-400">{caseStudy.fullContent.testimonial.company}</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="/contact"
                                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
                            >
                                유사 프로젝트 상담하기 <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button
                                onClick={onClose}
                                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-medium"
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const CasesPage = () => {
    const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCaseClick = (caseStudy: typeof caseStudies[0]) => {
        setSelectedCase(caseStudy);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* 모달 */}
            <CaseModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                caseStudy={selectedCase}
            />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm mb-6 border border-emerald-500/30">
                        Customer Success Stories
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                            Real Results, Real Impact
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        AiNex를 통해 비즈니스 혁신을 이룬 고객들의 성공 사례를 소개합니다.
                    </p>
                </motion.div>
            </section>

            {/* Featured Case Studies */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((caseStudy, index) => (
                        <CaseCard
                            key={caseStudy.id}
                            category={caseStudy.category}
                            title={caseStudy.title}
                            client={caseStudy.client}
                            description={caseStudy.description}
                            metrics={caseStudy.metrics}
                            icon={caseStudy.icon}
                            delay={index * 0.1}
                            onClick={() => handleCaseClick(caseStudy)}
                        />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mx-auto px-4 mb-24 bg-white/5 rounded-3xl p-12 py-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Client Voice</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <Testimonial
                        quote="AiNex 도입 후, 우리 팀은 반복적인 데이터 분석 업무에서 해방되어, 창의적인 전략 수립에 집중할 수 있게 되었습니다. 진정한 의미의 AX를 경험했습니다."
                        author="김철수 CTO"
                        company="Tech Innovation Inc."
                    />
                    <Testimonial
                        quote="AI 도입을 망설였지만, AiNex의 체계적인 컨설팅과 안전한 플랫폼 덕분에 보안 우려 없이 성공적으로 전환할 수 있었습니다."
                        author="이영희 본부장"
                        company="Future Finance Group"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">다음 성공 사례의 주인공이 되어보세요</h2>
                    <p className="text-gray-300 mb-8">
                        여러분의 비즈니스 과제를 AiNex가 해결해 드립니다.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-bold hover:opacity-90 transition-opacity">
                        상담 문의하기 <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

const CaseCard = ({ category, title, client, description, metrics, icon, delay, onClick }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        onClick={onClick}
        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all cursor-pointer h-full flex flex-col"
    >
        <div className="mb-6 flex justify-between items-start">
            <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white group-hover:text-emerald-400 transition-colors">
                {icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500/80 bg-emerald-500/10 px-3 py-1 rounded-full">
                {category}
            </span>
        </div>

        <div className="mb-4">
            <div className="text-sm text-gray-400 mb-1">{client}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            {metrics.map((m: any, i: number) => (
                <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                    <div className="text-xs text-gray-500">{m.label}</div>
                </div>
            ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center text-sm text-emerald-400 group-hover:text-emerald-300 transition-colors">
            <span>자세히 보기</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
    </motion.div>
);

const Testimonial = ({ quote, author, company }: any) => (
    <div className="text-center md:text-left">
        <div className="text-yellow-400 text-6xl font-serif leading-none mb-4 opacity-30">"</div>
        <p className="text-lg md:text-xl text-gray-300 italic mb-6 leading-relaxed relative z-10 -mt-8">
            {quote}
        </p>
        <div>
            <div className="font-bold text-white">{author}</div>
            <div className="text-sm text-emerald-400">{company}</div>
        </div>
    </div>
);

export default CasesPage;
