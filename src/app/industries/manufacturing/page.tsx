'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Cog, Activity, Eye, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ManufacturingPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm mb-6 border border-orange-500/30">
                        Manufacturing Solutions
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                            제조업 (Manufacturing)
                        </span>
                        <br />
                        스마트 팩토리 및 AX 전략
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        단순 자동화를 넘어, 데이터 기반의 의사결정이 가능한 지능형 공장으로의 전환을 지원합니다.
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
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-3xl -z-10 group-hover:from-white/10 transition-colors" />
                            <div className="grid md:grid-cols-12 gap-8 p-8 md:p-12 items-start">
                                <div className="md:col-span-4">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${section.color}`}>
                                        <section.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                    <h3 className="text-lg text-gray-300 font-medium mb-4">{section.englishTitle}</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-gray-500 to-transparent rounded-full" />
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
                                            <Activity className="w-5 h-5 text-blue-400" />
                                            주요 내용 및 기능
                                        </h4>
                                        <ul className="grid gap-4">
                                            {section.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                                    <span className="leading-relaxed">{detail}</span>
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

            {/* AX Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="rounded-3xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">AX (AI Transformation) 구축</h2>
                            <p className="text-xl text-indigo-200">제조 경쟁력 강화를 위한 AI 기술의 전면적 도입 및 내재화</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: '자율 운영', desc: 'AI가 공정 변수를 스스로 제어하여 최적의 생산 상태 유지', icon: '🤖' },
                                { title: '공급망 최적화', desc: '수요 예측 정확도 향상 및 재고 관리 자동화', icon: '📦' },
                                { title: '안전 관리', desc: '지능형 CCTV 등을 활용한 작업자 안전 사고 예방', icon: '🛡️' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center pt-8 border-t border-white/10">
                            <p className="text-gray-300 mb-6 font-medium">
                                기존의 디지털 전환(DX)을 넘어, AI를 통해 스스로 학습하고 최적화하는 시스템을 구축하세요.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg hover:shadow-indigo-500/25">
                                AX 컨설팅 문의하기 <ArrowRight className="w-4 h-4" />
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
        title: '스마트 팩토리 최적화',
        englishTitle: 'Smart Factory Optimization',
        icon: Factory,
        color: 'from-orange-500 to-red-500',
        core: '단순 자동화를 넘어, 데이터 기반의 의사결정이 가능한 지능형 공장으로의 전환을 목표로 합니다.',
        details: [
            '생산 공정에서 발생하는 모든 데이터(4M: Man, Machine, Material, Method)를 실시간으로 수집·분석하여 공정 효율을 극대화합니다.',
            '에너지 관리 시스템(EMS)을 도입하여 에너지 소비 패턴을 분석하고 비용을 절감합니다.',
            '생산 계획의 유연성을 확보하여 다품종 소량 생산에 신속하게 대응할 수 있는 체계를 구축합니다.'
        ]
    },
    {
        title: '설비 예지 보전',
        englishTitle: 'Predictive Maintenance',
        icon: Cog,
        color: 'from-cyan-500 to-blue-500',
        core: '설비가 고장 나기 전에 징후를 파악하여 선제적으로 대응함으로써 가동 중단(Downtime)을 방지합니다.',
        details: [
            'IoT 센서를 통해 설비의 진동, 온도, 소음, 전력량 등을 실시간 모니터링합니다.',
            'AI 알고리즘이 정상 패턴을 학습하고, 이상 징후 발생 시 즉각적으로 경고를 보냅니다.',
            '설비 수명을 연장하고, 불필요한 부품 교체를 줄여 유지보수 비용을 획기적으로 절감합니다.'
        ]
    },
    {
        title: '품질 관리 자동화',
        englishTitle: 'Quality Control & Defect Reduction',
        icon: Eye,
        color: 'from-purple-500 to-pink-500',
        core: '육안 검사의 한계를 극복하고 전수 검사 체계를 구축하여 완벽한 품질을 보장합니다.',
        details: [
            '고성능 AI 비전 검사(Machine Vision) 기술을 도입하여 제품의 미세한 스크래치, 이물질 등 결함을 초고속으로 판독합니다.',
            '불량 발생 원인을 데이터 기반으로 역추적(Root Cause Analysis)하여 공정 개선에 활용합니다.',
            '근본적인 불량률을 감소시키고, 생산되는 제품의 품질 균일성을 확보합니다.'
        ]
    }
];

export default ManufacturingPage;
