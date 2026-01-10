'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section-container py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-radial from-quantum-blue-500/20 via-cosmic-purple-500/10 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-neon-emerald/10 border border-neon-emerald/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
          <span className="text-sm text-neon-emerald">지금 바로 시작하세요</span>
        </motion.div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">AI 전환의</span>
          <br />
          <span className="gradient-text">새로운 시작</span>
        </h2>

        {/* Description */}
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
          26년 보안 전문성과 최신 AI 기술력으로 귀사의 안전하고 성공적인 AI 전환을 함께 합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
            href="/contact?type=demo"
            className="btn-glow text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
          >
            <span>무료 데모 신청</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="btn-outline text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
          >
            <span>상담 문의</span>
          </Link>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>데이터 주권 100% 보장</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>수일 내 결과 도출</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>전문 컨설턴트 상담</span>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-slate-400 mb-1">이메일</div>
              <a
                href="mailto:support@ainex.ai"
                className="text-white hover:text-quantum-blue-400 transition-colors"
              >
                support@ainex.ai
              </a>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <div className="text-sm text-slate-400 mb-1">전화</div>
              <a
                href="tel:02-6952-2511"
                className="text-white hover:text-quantum-blue-400 transition-colors"
              >
                02-6952-2511 (대표전화)
              </a>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-sm text-slate-400 mb-1">본사</div>
              <span className="text-white">서울특별시 영등포구 선유로9가 10 문래SK V1 1710호</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
