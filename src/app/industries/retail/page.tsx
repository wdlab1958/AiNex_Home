'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Truck, Users, ArrowRight, Zap, CheckCircle2, Box, MapPin, Smartphone } from 'lucide-react';
import Link from 'next/link';

const RetailPage = () => {
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
                        Retail & Logistics Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                            유통/물류 (Retail & Logistics)
                        </span>
                        <br />
                        지능형 공급망 & AX 전략
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        속도와 정확성이 생명인 유통/물류 산업에서 데이터 기반의 지능형 공급망(Smart SCM) 전환을 지원합니다.
                    </p>
                </motion.div>
            </section>

            {/* Strategies Grid */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid gap-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent rounded-3xl -z-10 group-hover:from-purple-900/20 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
                                </div>

                                <div className="md:col-span-8">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-3">
                                            <Zap className="w-5 h-5 text-yellow-400" />
                                            핵심 가치 (Core)
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed text-lg bg-black/30 p-4 rounded-xl border border-white/5">
                                            {section.core}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                            주요 기능 및 세부 내용
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                                                    <div>
                                                        <span className="font-semibold text-white">{detail.title}:</span>{' '}
                                                        <span className="leading-relaxed">{detail.desc}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* AX Strategy Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">유통/물류 AX 구축을 위한 핵심 고려사항</h2>
                            <p className="text-xl text-gray-400">Key Implementation Strategy</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Box className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">전사적 데이터 통합</h3>
                                <p className="text-gray-400 text-sm">
                                    제조사, 유통사, 물류사의 이질적인 데이터를 통합하여 공급망 전체를 실시간으로 모니터링하는 관제 타워(Control Tower)가 필수적입니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                                    <Smartphone className="w-6 h-6 text-pink-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">온-오프라인 통합 (OMO)</h3>
                                <p className="text-gray-400 text-sm">
                                    온라인 데이터와 오프라인 매장 데이터를 결합하여 끊김 없는(Seamless) 고객 경험을 제공해야 합니다.
                                </p>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                                    <Users className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">현장 인력과의 협업</h3>
                                <p className="text-gray-400 text-sm">
                                    배송 기사나 물류 센터 직원을 위해 직관적인 UX/UI를 설계하고, 시스템 수용성을 높이기 위한 변화 관리(Change Management)를 수행해야 합니다.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-lg hover:shadow-purple-500/25">
                                유통/물류 AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const sections = [
    {
        title: '수요 예측 및 재고 최적화',
        englishTitle: 'Demand Forecasting & Inventory Optimization',
        icon: TrendingUp,
        color: 'from-blue-500 to-purple-500',
        core: '과거 판매량뿐만 아니라 외부 변수까지 통합 분석하여 예측 정확도를 극대화하고, 재고 비용과 기회비용을 동시에 최소화합니다.',
        details: [
            {
                title: '멀티 모달 수요 예측',
                desc: '날씨, 트렌드 등 비정형 데이터를 통합 분석하여 정밀 예측하고, 채찍 효과(Bullwhip Effect)를 방지합니다.'
            },
            {
                title: '동적 재고 관리 (Dynamic Inventory)',
                desc: '물류 센터와 매장별 최적 재고량을 AI가 산출하여 자동 발주(Auto-Replenishment)를 실행합니다.'
            }
        ]
    },
    {
        title: '고객 행동 분석 및 초개인화 마케팅',
        englishTitle: 'Hyper-personalization',
        icon: ShoppingCart,
        color: 'from-pink-500 to-rose-500',
        core: "고객의 실시간 행동을 분석하여 '지금 이 순간' 가장 필요한 상품을 제안하는 'N=1 마케팅'을 구현합니다.",
        details: [
            {
                title: '실시간 행동 기반 추천',
                desc: '체류 시간, 클릭 패턴 등을 분석하여 이탈 전 맞춤형 쿠폰이나 상품을 팝업으로 제안합니다.'
            },
            {
                title: '생성형 AI 마케팅 콘텐츠',
                desc: '고객 선호도에 맞춰 AI가 개인화된 광고 문구와 이미지를 자동 생성하여 클릭률과 전환율을 높입니다.'
            }
        ]
    },
    {
        title: '물류 경로 최적화 및 배송 효율화',
        englishTitle: 'Route Optimization & Delivery Efficiency',
        icon: Truck,
        color: 'from-indigo-500 to-blue-500',
        core: '물류 센터부터 라스트 마일 배송까지 전 과정을 자동화하고 최적화하여 배송 속도는 높이고 운영 비용은 낮춥니다.',
        details: [
            {
                title: '동적 경로 최적화 (Dynamic Routing)',
                desc: '교통, 날씨, 물량 등을 고려하여 AI가 가장 효율적인 배송 순서와 경로를 실시간 갱신합니다.'
            },
            {
                title: '스마트 물류 센터 (Smart Fulfillment)',
                desc: '디지털 트윈 시뮬레이션으로 동선을 최적화하고, 물류 로봇(AGV/AMR) 협업으로 피킹 효율을 높입니다.'
            }
        ]
    }
];

export default RetailPage;
