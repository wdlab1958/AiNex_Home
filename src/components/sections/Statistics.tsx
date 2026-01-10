'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    value: 26,
    suffix: '년+',
    label: '보안 전문성',
    description: 'A3 Security 설립 이래 축적된 보안 노하우',
    icon: '🛡️',
  },
  {
    value: 84,
    suffix: '개',
    label: 'API 엔드포인트',
    description: 'AgentForge 플랫폼 제공 API',
    icon: '🔗',
  },
  {
    value: 80,
    suffix: '%',
    label: '비용 절감',
    description: '기존 컨설팅 대비 비용 절감 효과',
    icon: '💰',
  },
  {
    value: 5,
    suffix: '단계',
    label: '컨설팅 프레임워크',
    description: '체계적인 AI 전환 컨설팅 프로세스',
    icon: '📊',
  },
];

const additionalMetrics = [
  { label: '전문 AI 에이전트', value: '5개', color: 'quantum-blue' },
  { label: 'ISO 표준 통합', value: '4개', color: 'cosmic-purple' },
  { label: '멀티 에이전트 프레임워크', value: '3종', color: 'neon-emerald' },
  { label: '메모리 레이어', value: '3-Layer', color: 'amber' },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const interval = duration / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, interval);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {displayValue}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="section-container py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">숫자로 보는 A3 AiNex</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            검증된 전문성과 혁신적인 기술력으로 기업의 AI 전환을 이끕니다.
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center card-hover"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-lg font-semibold mt-4 mb-2">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`text-3xl font-bold mb-2 text-${metric.color}-400`}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {[
              'Local LLM 완전 지원',
              '데이터 외부 전송 제로',
              'On-Premise 배포 가능',
              'Enterprise 보안 인증',
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-emerald" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
