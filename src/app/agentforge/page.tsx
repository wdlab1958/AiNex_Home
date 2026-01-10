import type { Metadata } from 'next';
import WorkflowDiagram from '@/components/agentforge/WorkflowDiagram';

export const metadata: Metadata = {
  title: 'AgentForge Platform',
  description: 'LangGraph, CrewAI, AutoGen을 조합한 하이브리드 멀티 에이전트 AI 플랫폼',
};

const features = [
  {
    title: 'RAG & Reranker',
    description: '하이브리드 검색으로 15-20% 정확도 향상',
    items: ['Vector + BM25 + MMR', 'ko-reranker 통합', '대용량 문서 처리'],
    icon: '🔍',
  },
  {
    title: '3-Layer Memory',
    description: '지능적인 대화 맥락 유지',
    items: ['Short-Term Memory', 'Medium-Term Memory', 'Long-Term Memory'],
    icon: '🧠',
  },
  {
    title: 'Tax RAG System',
    description: '계층적 지식 그래프 기반 검색',
    items: ['Multi-hop Retrieval', '법령 참조 추적', '세무 도메인 특화'],
    icon: '📜',
  },
  {
    title: 'Prompt Management',
    description: 'Git-style 버전 관리',
    items: ['변경 이력 추적', '즉시 롤백', 'Jinja2 템플릿'],
    icon: '📝',
  },
  {
    title: 'Local LLM',
    description: '완전 오프라인 AI 추론',
    items: ['Ollama 기반', 'VPC 격리', 'AES-256 암호화'],
    icon: '🔒',
  },
  {
    title: '84개 API',
    description: 'Production Ready 엔드포인트',
    items: ['RESTful API', 'Swagger 문서', 'WebSocket 지원'],
    icon: '⚡',
  },
];

const frameworks = [
  {
    name: 'LangGraph',
    role: '워크플로우 제어',
    description: '복잡한 제어 루프와 상태 관리를 담당합니다.',
    color: 'quantum-blue',
  },
  {
    name: 'CrewAI',
    role: '역할 기반 협업',
    description: '명확한 역할 분담으로 팀 협업을 구현합니다.',
    color: 'cosmic-purple',
  },
  {
    name: 'AutoGen',
    role: '브레인스토밍',
    description: '자유로운 대화와 동적 조정을 담당합니다.',
    color: 'neon-emerald',
  },
];

export default function AgentForgePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-container py-20 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-cosmic-purple-500/20
                        border border-cosmic-purple-500/30 text-cosmic-purple-400 text-sm mb-6">
          Multi-Agent AI Platform
        </div>
        <h1 className="hero-title mb-6">
          <span className="gradient-text">AgentForge</span>
          <br />
          멀티 에이전트 AI 플랫폼
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
          LangGraph, CrewAI, AutoGen을 조합한 하이브리드 플랫폼으로
          84개 API 엔드포인트와 함께 Production Ready 상태입니다.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contact?type=demo" className="btn-glow">
            데모 신청
          </a>
          <a href="http://localhost:8001/docs" target="_blank" rel="noopener noreferrer" className="btn-outline">
            API 문서
          </a>
        </div>
      </section>

      {/* Multi-Agent Frameworks */}
      <section id="multi-agent" className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-4">멀티 에이전트 프레임워크</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          세 가지 프레임워크의 강점을 결합한 하이브리드 아키텍처
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((fw) => (
            <div key={fw.name} className="glass-card p-8 card-hover">
              <h3 className={`text-2xl font-bold text-${fw.color}-400 mb-2`}>
                {fw.name}
              </h3>
              <div className="text-sm text-slate-400 mb-4">{fw.role}</div>
              <p className="text-slate-300">{fw.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="section-container py-20 mesh-gradient">
        <h2 className="text-3xl font-bold text-center mb-4">핵심 기능</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          엔터프라이즈급 기능으로 구성된 Production Ready 플랫폼
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-6 card-hover">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item, i) => (
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

      {/* Architecture */}
      <section className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-4">아키텍처</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          보안과 확장성을 고려한 엔터프라이즈급 아키텍처
        </p>

        <WorkflowDiagram />
      </section>

      {/* API Stats */}
      <section className="section-container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">API 엔드포인트 현황</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {[
            { name: 'Core', count: 12 },
            { name: 'RAG', count: 8 },
            { name: 'Memory', count: 11 },
            { name: 'Prompts', count: 9 },
            { name: 'Training', count: 8 },
            { name: 'Dataset', count: 6 },
            { name: 'Reranker', count: 4 },
            { name: 'Tax RAG', count: 6 },
            { name: 'Cache', count: 3 },
            { name: 'Settings', count: 4 },
            { name: 'Others', count: 13 },
          ].map((api) => (
            <div key={api.name} className="glass-card p-4 text-center">
              <div className="text-2xl font-bold text-quantum-blue-400">{api.count}</div>
              <div className="text-sm text-slate-400">{api.name}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-block glass-card px-8 py-4">
            <span className="text-4xl font-bold gradient-text">84</span>
            <span className="text-slate-400 ml-2">Total API Endpoints</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-20">
        <div className="glass-card p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">AgentForge로 시작하세요</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            API 문서와 데모를 통해 AgentForge의 모든 기능을 체험해 보세요.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact?type=demo" className="btn-glow">
              무료 데모 신청
            </a>
            <a href="http://localhost:8001/docs" target="_blank" rel="noopener noreferrer" className="btn-outline">
              API 문서 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
