'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const platforms = {
  ainex: {
    title: 'AiNex Platform',
    subtitle: 'AI 컨설팅 자동화 플랫폼',
    description: '5단계 컨설팅 프레임워크와 ISO 표준 기반 거버넌스로 기업의 AI 전환을 체계적으로 지원합니다.',
    features: [
      '5단계 컨설팅 프레임워크',
      '5개 전문 AI 에이전트',
      'ISO 4개 표준 통합',
      'Human-in-the-Loop',
      '자동 보고서 생성',
    ],
    cta: '/ainex',
    color: 'quantum-blue',
  },
  agentforge: {
    title: 'AgentForge Platform',
    subtitle: '멀티 에이전트 AI 플랫폼',
    description: 'LangGraph, CrewAI, AutoGen을 조합한 하이브리드 플랫폼으로 84개 API 엔드포인트를 제공합니다.',
    features: [
      'LangGraph + CrewAI + AutoGen',
      '84개 API 엔드포인트',
      'RAG & Reranker 통합',
      '3-Layer Memory System',
      'Local LLM 기반 보안',
    ],
    cta: '/agentforge',
    color: 'cosmic-purple',
  },
};

export function PlatformOverview() {
  const [activeTab, setActiveTab] = useState<'ainex' | 'agentforge'>('ainex');
  const platform = platforms[activeTab];

  return (
    <section className="section-container py-24 mesh-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">플랫폼 소개</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          두 가지 강력한 플랫폼으로 AI 전환의 모든 단계를 지원합니다.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-xl bg-slate-800/50">
          <button
            onClick={() => setActiveTab('ainex')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'ainex'
                ? 'bg-gradient-primary text-white shadow-glow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AiNex Platform
          </button>
          <button
            onClick={() => setActiveTab('agentforge')}
            className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'agentforge'
                ? 'bg-gradient-primary text-white shadow-glow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AgentForge Platform
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4
                              bg-${platform.color}-500/20 text-${platform.color}-400`}>
                  {platform.subtitle}
                </div>
                <h3 className="text-2xl font-bold mb-4">{platform.title}</h3>
                <p className="text-slate-400 mb-6">{platform.description}</p>
                <Link href={platform.cta} className="btn-glow inline-block">
                  자세히 보기
                </Link>
              </div>

              <div className="space-y-3">
                {platform.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30"
                  >
                    <span className="text-neon-emerald">✓</span>
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
