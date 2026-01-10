'use client';

import { motion } from 'framer-motion';
import { isoStandards } from '@/config/site';

const standardIcons = ['📋', '🔧', '📊', '🏛️'];

const standardColors = [
  { bg: 'quantum-blue', ring: 'quantum-blue' },
  { bg: 'cosmic-purple', ring: 'cosmic-purple' },
  { bg: 'neon-emerald', ring: 'neon-emerald' },
  { bg: 'amber', ring: 'amber' },
];

export function ISOStandards() {
  return (
    <section className="section-container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-neon-emerald/10 border border-neon-emerald/30 mb-6">
          <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
          <span className="text-sm text-neon-emerald">국제 표준 인증</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">ISO 4개 표준 완전 통합</h2>
        <p className="text-slate-400 max-w-3xl mx-auto">
          AI 거버넌스의 글로벌 스탠다드를 완벽하게 준수하여 체계적이고 신뢰할 수 있는 AI 전환을 보장합니다.
        </p>
      </motion.div>

      {/* Standards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {isoStandards.map((standard, index) => {
          const color = standardColors[index % standardColors.length];

          return (
            <motion.div
              key={standard.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 card-hover group"
            >
              {/* Standard Code Badge */}
              <div
                className={`inline-block px-3 py-1 rounded-lg text-sm font-mono mb-4
                           bg-${color.bg}-500/10 text-${color.bg}-400 border border-${color.ring}-500/30`}
              >
                ISO {standard.code}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center
                           bg-${color.bg}-500/10 group-hover:bg-${color.bg}-500/20 transition-colors`}
              >
                <span className="text-3xl">{standardIcons[index]}</span>
              </div>

              {/* Content */}
              <h3 className="font-semibold mb-2">{standard.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{standard.description}</p>

              {/* Key Points */}
              <div className="space-y-2">
                {standard.coverage.slice(0, 2).map((point: string, pointIdx: number) => (
                  <div
                    key={pointIdx}
                    className="flex items-start gap-2 text-xs text-slate-500"
                  >
                    <span className={`w-1 h-1 rounded-full bg-${color.bg}-400 mt-1.5 flex-shrink-0`} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Integration Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Standards Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {isoStandards.map((standard, index) => (
              <motion.div
                key={standard.code}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`w-20 h-20 rounded-full flex items-center justify-center
                           bg-${standardColors[index].bg}-500/10 border-2 border-${standardColors[index].ring}-500/30`}
              >
                <div className="text-center">
                  <div className="text-xs text-slate-400">ISO</div>
                  <div className="font-mono font-bold">{standard.code}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="h-1 bg-gradient-primary rounded"
            />
            <svg
              className="w-6 h-6 text-quantum-blue-400 -ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center lg:text-left"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto lg:mx-0">
              <span className="text-4xl">🛡️</span>
            </div>
            <div className="font-bold text-xl mb-2">통합 거버넌스 프레임워크</div>
            <div className="text-sm text-slate-400 max-w-xs">
              4개 표준의 핵심 요구사항을 하나로 통합하여 효율적인 AI 거버넌스 체계 구축
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: '📋',
            title: '체계적 관리',
            description: '국제 표준 기반의 일관된 AI 관리 체계',
          },
          {
            icon: '✅',
            title: '규정 준수',
            description: '글로벌 AI 규제 요구사항 선제 대응',
          },
          {
            icon: '🔍',
            title: '투명한 추적',
            description: 'AI 의사결정 과정의 완전한 감사 추적',
          },
        ].map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30"
          >
            <div className="text-3xl">{benefit.icon}</div>
            <div>
              <div className="font-semibold mb-1">{benefit.title}</div>
              <div className="text-sm text-slate-400">{benefit.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
