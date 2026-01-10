'use client';

import { motion } from 'framer-motion';
import { aiAgents } from '@/config/site';

const agentColors: Record<string, string> = {
  'strategy-agent': 'quantum-blue',
  'analysis-agent': 'cosmic-purple',
  'governance-agent': 'neon-emerald',
  'implementation-agent': 'amber',
  'monitoring-agent': 'rose',
};

const connections = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
];

export function AgentMesh() {
  return (
    <section className="section-container py-24 mesh-gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">5개 전문 AI 에이전트</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          각 분야에 특화된 AI 에이전트들이 유기적으로 협업하여 최적의 AI 전환 전략을 도출합니다.
        </p>
      </motion.div>

      {/* Agent Network Visualization */}
      <div className="relative max-w-5xl mx-auto">
        {/* Connection Lines (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ minHeight: '500px' }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(79, 145, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(79, 145, 255, 0.3)" />
            </linearGradient>
          </defs>
          {connections.map((conn, idx) => (
            <motion.line
              key={idx}
              x1={`${20 + (conn.from % 3) * 30}%`}
              y1={`${25 + Math.floor(conn.from / 3) * 50}%`}
              x2={`${20 + (conn.to % 3) * 30}%`}
              y2={`${25 + Math.floor(conn.to / 3) * 50}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            />
          ))}
        </svg>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-3 gap-8" style={{ minHeight: '500px' }}>
          {aiAgents.map((agent, index) => {
            const colorKey = agent.id || `agent-${index}`;
            const color = agentColors[colorKey] || 'quantum-blue';

            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className={`glass-card p-6 relative ${index === 2 ? 'md:col-start-2' : ''}`}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-2xl bg-${color}-500/20 blur-xl
                             opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center
                             bg-${color}-500/10 border border-${color}-500/30`}
                >
                  <span className="text-3xl">{agent.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{agent.description}</p>

                {/* Capabilities */}
                <div className="space-y-2">
                  {agent.capabilities.slice(0, 3).map((cap, capIdx) => (
                    <div
                      key={capIdx}
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
                      {cap}
                    </div>
                  ))}
                </div>

                {/* Stage Badge */}
                <div
                  className={`absolute top-4 right-4 px-2 py-1 rounded text-xs
                             bg-${color}-500/20 text-${color}-400`}
                >
                  Stage {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Human-in-the-Loop Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl glass-card">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div className="text-left">
            <div className="font-semibold">Human-in-the-Loop</div>
            <div className="text-sm text-slate-400">
              각 단계마다 전문가 검토 및 승인 프로세스 포함
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
