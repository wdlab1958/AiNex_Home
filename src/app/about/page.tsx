import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사 소개',
  description: 'WDLAB@2023-2026는 26년 전통의 정보보호 컨설팅 전문기업입니다.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="hero-title gradient-text mb-6">
            26년 보안 전문성,
            <br />
            AI 전환의 새로운 패러다임
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            WDLAB@2023-2026는 2000년 설립 이후 26년간 대한민국 정보보호 산업을 선도해 왔습니다.
            이제 AI 전환(AX) 시대를 맞아 새로운 도전을 시작합니다.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">회사 연혁</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              { year: '2000', event: 'WDLAB@2023-2026 설립' },
              { year: '2005', event: '정보보안 컨설팅 사업 본격화' },
              { year: '2010', event: '금융권 보안 컨설팅 시장 진출' },
              { year: '2015', event: '공공기관 보안 진단 사업 확대' },
              { year: '2020', event: 'AI 보안 연구 개발 시작' },
              { year: '2024', event: 'AiNex 플랫폼 개발 착수' },
              { year: '2026', event: 'AiNex & AgentForge 정식 출시' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-20 flex-shrink-0">
                  <span className="text-quantum-blue-400 font-bold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 glass-card p-4">
                  <p className="text-white">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container py-20 mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-quantum-blue-400 mb-4">Mission</h3>
              <p className="text-slate-300">
                기업의 AI 전환을 안전하고 체계적으로 지원하여,
                데이터 주권 시대에 신뢰할 수 있는 AI 파트너가 됩니다.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-cosmic-purple-400 mb-4">Vision</h3>
              <p className="text-slate-300">
                ISO 국제 표준과 멀티 에이전트 기술을 결합하여,
                아시아 최고의 AI 컨설팅 플랫폼 기업으로 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
