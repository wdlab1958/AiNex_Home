'use client';

import { motion } from 'framer-motion';

const values = [
  {
    icon: '🔒',
    title: '데이터 주권 100% 보장',
    description: 'Local LLM 기반으로 데이터가 외부로 나가지 않습니다.',
    highlight: 'Ollama 기반 완전 오프라인',
  },
  {
    icon: '📋',
    title: 'ISO 표준 완전 준수',
    description: '4개 국제 표준을 통합하여 체계적인 AI 거버넌스를 제공합니다.',
    highlight: '42001, 23053, 24030, 38500',
  },
  {
    icon: '💰',
    title: '비용 80% 이상 절감',
    description: '기존 컨설팅 대비 80% 이상 비용을 절감합니다.',
    highlight: '수일 내 결과 도출',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ValueProposition() {
  return (
    <section className="section-container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">왜 A3 AiNex인가?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          26년 보안 전문성과 최신 AI 기술을 결합한 차별화된 가치
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card p-8 text-center card-hover"
          >
            <div className="text-5xl mb-6">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-slate-400 mb-4">{value.description}</p>
            <div className="inline-block px-4 py-2 rounded-full bg-quantum-blue-500/10
                          text-quantum-blue-400 text-sm">
              {value.highlight}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
