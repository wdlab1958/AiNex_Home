'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Target } from 'lucide-react';

const AiNexDivisionPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-quantum-blue-500/20 text-quantum-blue-400 text-sm mb-6 border border-quantum-blue-500/30">
                        AiNex Business Unit
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                            A3 AiNex 사업부
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        데이터 주권 시대, 기업의 안전하고 성공적인 AI 전환을 이끄는 WDLAB@2023-2026의 핵심 조직입니다.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Identity */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            AiNex 사업부는 26년간 축적된 WDLAB@2023-2026의 정보보호 노하우와 최신 AI 기술을 결합하여 탄생했습니다.
                            단순한 AI 도입을 넘어, 보안과 거버넌스가 내재화된 '신뢰할 수 있는 AI(Trustworthy AI)' 생태계를 구축하는 것을 목표로 합니다.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Shield className="w-8 h-8 text-emerald-400 mb-3" />
                                <h3 className="font-bold mb-1">Security DNA</h3>
                                <p className="text-sm text-gray-400">보안 컨설팅 1위 기업의 유전자를 계승한 안전한 설계</p>
                            </div>
                            <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Brain className="w-8 h-8 text-blue-400 mb-3" />
                                <h3 className="font-bold mb-1">AI Expertise</h3>
                                <p className="text-sm text-gray-400">LLM 및 멀티 에이전트 기술 전문 연구 조직 보유</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                        {/* Abstract Tech Visual */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <Target className="w-16 h-16 text-white mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                            <p className="text-gray-300 max-w-md">"Enabling Safe & Intelligent Enterprise Transformation"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Focus Areas */}
            <section className="container mx-auto px-4 mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Core Focus Areas</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Brain className="w-10 h-10 text-purple-400" />,
                            title: "Multi-Agent Systems",
                            desc: "복잡한 비즈니스 문제를 해결하는 자율 협업 에이전트 시스템(AgentForge) 개발"
                        },
                        {
                            icon: <Shield className="w-10 h-10 text-emerald-400" />,
                            title: "AI Governance (ISO 42001)",
                            desc: "국제 표준 기반의 AI 경영 시스템 컨설팅 및 규제 준수 가이드 제공"
                        },
                        {
                            icon: <Globe className="w-10 h-10 text-blue-400" />,
                            title: "Sovereign AI Cloud",
                            desc: "기업 내부 데이터 유출 걱정 없는 온프레미스/프라이빗 클라우드 LLM 구축"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-default"
                            whileHover={{ y: -5 }}
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AiNexDivisionPage;
