'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-quantum-blue-500/10 border border-quantum-blue-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
            <span className="text-sm text-quantum-blue-400">
              26년 보안 전문성 + AI 기술력
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-title lg:text-hero-lg mb-6"
          >
            <span className="text-white">AI 전환의</span>
            <br />
            <span className="gradient-text">새로운 패러다임</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            데이터 주권 시대의 안전한 AI 전환,
            <br className="hidden sm:block" />
            당신의 멀티 에이전트 파트너 <span className="text-white font-semibold">A3 AiNex</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link href="/contact?type=demo" className="btn-glow text-lg px-8 py-4">
              무료 데모 신청
            </Link>
            <Link href="/ainex" className="btn-outline text-lg px-8 py-4">
              서비스 소개 보기
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-neon-emerald">✓</span>
              ISO 4개 표준 완전 통합
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-emerald">✓</span>
              84개 API 엔드포인트
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neon-emerald">✓</span>
              Local LLM 기반 데이터 보안
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
