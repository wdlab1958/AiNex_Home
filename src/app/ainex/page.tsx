import type { Metadata } from 'next';
import { consultingStages, aiAgents, isoStandards } from '@/config/site';

export const metadata: Metadata = {
  title: 'AiNex Platform',
  description: 'AI 컨설팅 자동화 플랫폼 - 5단계 프레임워크와 ISO 표준 기반 거버넌스',
};

export default function AiNexPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container py-20 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-quantum-blue-500/20
                        border border-quantum-blue-500/30 text-quantum-blue-400 text-sm mb-6">
          AI Consulting Platform
        </div>
        <h1 className="hero-title mb-6">
          <span className="gradient-text">AiNex</span>
          <br />
          AI 컨설팅 자동화 플랫폼
        </h1>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-8">
          5단계 컨설팅 프레임워크와 ISO 국제 표준 기반 거버넌스로 기업의 AI 전환을 체계적으로 지원합니다.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contact?type=demo" className="btn-glow">
            데모 신청
          </a>
          <a href="#framework" className="btn-outline">
            자세히 보기
          </a>
        </div>
      </section>

      {/* 5-Stage Framework */}
      <section id="framework" className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-4">5단계 컨설팅 프레임워크</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          전략 수립부터 운영 최적화까지, 체계적인 AI 도입 여정을 안내합니다.
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {consultingStages.map((stage, index) => (
            <div key={stage.id} className="glass-card p-6 card-hover">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-quantum-blue-500/20
                               flex items-center justify-center text-quantum-blue-400 font-bold">
                  {stage.id}
                </span>
                <span className="text-sm text-slate-400">{stage.name}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{stage.description}</p>
              <div className="space-y-1">
                {stage.activities.slice(0, 3).map((activity, i) => (
                  <div key={i} className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-quantum-blue-500 rounded-full" />
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Agents */}
      <section id="agents" className="section-container py-20 mesh-gradient">
        <h2 className="text-3xl font-bold text-center mb-4">AI 에이전트</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          5개의 전문 AI 에이전트가 협업하여 컨설팅을 자동화합니다.
        </p>

        <div className="grid md:grid-cols-5 gap-6">
          {aiAgents.map((agent) => (
            <div key={agent.id} className="glass-card p-6 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary
                            flex items-center justify-center">
                <span className="text-2xl">
                  {agent.icon === 'Compass' && '🧭'}
                  {agent.icon === 'Pencil' && '📐'}
                  {agent.icon === 'TrendingUp' && '📊'}
                  {agent.icon === 'Shield' && '🛡️'}
                  {agent.icon === 'FileText' && '📄'}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{agent.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{agent.role}</p>
              <div className="space-y-1">
                {agent.capabilities.slice(0, 3).map((cap, i) => (
                  <span key={i} className="inline-block text-xs bg-slate-800
                                           px-2 py-1 rounded mr-1 mb-1">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ISO Standards */}
      <section id="governance" className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-4">ISO 표준 거버넌스</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          4개의 국제 표준을 완전 통합하여 체계적인 AI 거버넌스를 제공합니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isoStandards.map((iso) => (
            <div key={iso.id} className="glass-card p-6 card-hover">
              <div className="text-sm text-quantum-blue-400 font-mono mb-2">
                {iso.code}
              </div>
              <h3 className="text-lg font-semibold mb-2">{iso.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{iso.description}</p>
              <div className="space-y-2">
                {iso.coverage.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="text-neon-emerald">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-20">
        <div className="glass-card p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">AiNex로 AI 전환을 시작하세요</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            무료 데모를 통해 AiNex 플랫폼의 모든 기능을 체험해 보세요.
          </p>
          <a href="/contact?type=demo" className="btn-glow">
            무료 데모 신청
          </a>
        </div>
      </section>
    </div>
  );
}
