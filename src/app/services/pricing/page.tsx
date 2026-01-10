'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight, Zap, Shield, Rocket, Building } from 'lucide-react';
import Link from 'next/link';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);

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
                        Simple, Transparent Pricing
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                            Choose the Right Plan
                        </span>
                        <br />
                        for Your AI Journey
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        데이터 주권이 보장되는 안전한 AI 컨설팅 및 플랫폼 서비스를 합리적인 가격으로 만나보세요.
                    </p>

                    {/* Billing Toggle (Visual only for now) */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-14 h-7 rounded-full bg-white/10 relative transition-colors hover:bg-white/20"
                        >
                            <div className={`absolute top-1 w-5 h-5 rounded-full bg-blue-500 transition-all ${isAnnual ? 'left-8' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                            Yearly <span className="text-emerald-400 text-xs ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Starter */}
                    <PricingCard
                        title="Starter"
                        price="$299"
                        description="초기 AI 도입을 위한 기본 패키지"
                        features={[
                            "프로젝트 3개",
                            "기본 컨설팅 기능",
                            "기본 보고서 생성",
                            "커뮤니티 지원"
                        ]}
                        icon={<Zap className="w-6 h-6 text-blue-400" />}
                        delay={0}
                    />

                    {/* Professional */}
                    <PricingCard
                        title="Professional"
                        price="$999"
                        description="성장하는 팀을 위한 표준 패키지"
                        isPopular
                        features={[
                            "프로젝트 무제한",
                            "모든 컨설팅 기능",
                            "ISO 표준 거버넌스 통합",
                            "API 접근 권한",
                            "우선 기술 지원"
                        ]}
                        icon={<Rocket className="w-6 h-6 text-purple-400" />}
                        delay={0.1}
                    />

                    {/* Enterprise */}
                    <PricingCard
                        title="Enterprise"
                        price="$2,999"
                        description="대규모 조직을 위한 엔터프라이즈 솔루션"
                        features={[
                            "모든 Professional 기능",
                            "전용 인프라 (VPC)",
                            "커스터마이징 지원",
                            "전담 매니저 배정",
                            "SLA 보장"
                        ]}
                        icon={<Shield className="w-6 h-6 text-emerald-400" />}
                        delay={0.2}
                    />

                    {/* Custom */}
                    <PricingCard
                        title="Custom"
                        price="협의"
                        description="특수 요구사항 및 온프레미스 구축"
                        features={[
                            "구축형(On-Premise) 지원",
                            "White-Labeling",
                            "전용 보안 감사",
                            "온사이트 교육 및 지원"
                        ]}
                        icon={<Building className="w-6 h-6 text-orange-400" />}
                        isCustom
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Feature Comparison Link */}
            <section className="container mx-auto px-4 text-center mb-20">
                <Link href="/contact" className="text-gray-400 hover:text-white underline decoration-gray-500 hover:decoration-white underline-offset-4 transition-all">
                    제안서 및 상세 기능 비교표 요청하기
                </Link>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <FaqItem
                        question="데이터는 어디에 저장되나요?"
                        answer="AiNex는 데이터 주권을 최우선으로 합니다. 모든 데이터는 고객사의 로컬 환경(On-Premise) 또는 격리된 프라이빗 클라우드(VPC)에 저장되며, 외부로 유출되지 않습니다."
                    />
                    <FaqItem
                        question="ISO 인증 컨설팅도 포함되어 있나요?"
                        answer="Professional 플랜 이상부터 ISO 42001, 23053 등 국제 표준에 기반한 거버넌스 체크리스트와 가이드를 제공하여 인증 준비를 지원합니다."
                    />
                    <FaqItem
                        question="사용자 수 제한이 있나요?"
                        answer="기본적으로 프로젝트 단위 과금이며, 사용자 수는 제한이 없습니다. 다만 동시 접속 트래픽에 따라 인프라 비용이 달라질 수 있습니다."
                    />
                </div>
            </section>
        </div>
    );
};

const PricingCard = ({ title, price, description, features, isPopular, isCustom, icon, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={`relative flex flex-col p-8 rounded-2xl border ${isPopular ? 'bg-gradient-to-b from-blue-900/20 to-purple-900/20 border-blue-500/50' : 'bg-white/5 border-white/10'} h-full hover:border-blue-500/30 transition-colors`}
    >
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold uppercase tracking-wider">
                Most Popular
            </div>
        )}

        <div className="mb-6">
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 min-h-[40px]">{description}</p>
        </div>

        <div className="mb-8">
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{price}</span>
                {!isCustom && <span className="text-gray-400">/mo</span>}
            </div>
        </div>

        <div className="flex-grow mb-8 space-y-3">
            {features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>

        <Link
            href={isCustom ? "/contact" : "/contact?type=demo"}
            className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all ${isPopular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
        >
            {isCustom ? "Contact Sales" : "Get Started"}
        </Link>
    </motion.div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="font-bold text-lg mb-2">{question}</h3>
        <p className="text-gray-400">{answer}</p>
    </div>
);

export default PricingPage;
