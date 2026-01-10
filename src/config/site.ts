import type { NavConfig, SEOData } from '@/types';

// ========================================
// Site Configuration
// ========================================
export const siteConfig = {
  name: 'A3 AiNex',
  fullName: 'A3 Security Co.,Ltd. - AiNex & AgentForge',
  description: '데이터 주권 시대의 안전한 AI 전환, 당신의 멀티 에이전트 파트너',
  url: 'https://ainex.a3sc.co.kr',
  ogImage: '/images/og-image.png',

  company: {
    name: 'A3 Security Co.,Ltd.',
    nameKo: 'A3 Security',
    founded: 2000,
    experience: 26,
    address: '서울특별시 영등포구 선유로9가 10 문래SK V1 1710호',
    phone: '02-6952-2511',
    email: 'support@ainex.ai',
  },

  social: {
    github: 'https://github.com/a3security',
    linkedin: 'https://linkedin.com/company/a3security',
    youtube: 'https://youtube.com/@a3security',
  },

  links: {
    mainSite: 'https://www.a3security.com',
    docs: '/resources/docs',
    blog: '/blog',
    demo: '/contact?type=demo',
    contact: '/contact',
  },
};

// ========================================
// Navigation Configuration
// ========================================
export const navConfig: NavConfig = {
  mainNav: [
    {
      label: '회사 소개',
      href: '/about',
      children: [
        { label: 'A3 Security 소개', href: '/about' },
        { label: 'AiNex 사업부', href: '/about/ainex-division' },
        { label: '뉴스 & 공지', href: '/about/news' },
      ],
    },
    {
      label: 'AiNex',
      href: '/ainex',
      badge: 'NEW',
      children: [
        { label: '플랫폼 개요', href: '/ainex' },
        { label: '5단계 프레임워크', href: '/ainex#framework' },
        { label: 'ISO 표준 거버넌스', href: '/ainex#governance' },
        { label: 'AI 에이전트', href: '/ainex#agents' },
      ],
    },
    {
      label: 'AgentForge',
      href: '/agentforge',
      children: [
        { label: '플랫폼 개요', href: '/agentforge' },
        { label: '멀티 에이전트', href: '/agentforge/multi-agent' },
        { label: '핵심 기능', href: '/agentforge/features' },
        { label: 'API 문서', href: 'http://localhost:8001/docs', isExternal: true },
      ],
    },
    {
      label: '서비스',
      href: '/services',
      children: [
        { label: 'AX 컨설팅', href: '/services/consulting' },
        { label: '플랫폼 구축', href: '/services/implementation' },
        { label: 'SaaS 구독', href: '/services/pricing' },
        { label: '교육 & 지원', href: '/services/support' },
      ],
    },
    {
      label: '산업별 솔루션',
      href: '/industries',
      children: [
        { label: '제조업', href: '/industries/manufacturing' },
        { label: '금융업', href: '/industries/finance' },
        { label: '의료/헬스케어', href: '/industries/healthcare' },
        { label: '유통/물류', href: '/industries/retail' },
        { label: '공공기관', href: '/industries/public' },
      ],
    },
    {
      label: '리소스',
      href: '/resources',
      children: [
        { label: '기술 블로그', href: '/blog' },
        { label: '백서 & 리포트', href: '/resources/whitepapers' },
        { label: '웨비나', href: '/resources/webinars' },
        { label: 'FAQ', href: '/resources/faq' },
      ],
    },
  ],
  footerNav: {
    company: [
      { label: '회사 소개', href: '/about' },
      { label: '채용 안내', href: '/careers' },
      { label: '뉴스룸', href: '/about/news' },
      { label: '파트너십', href: '/partners' },
    ],
    products: [
      { label: 'AiNex Platform', href: '/ainex' },
      { label: 'AgentForge', href: '/agentforge' },
      { label: '고객 사례', href: '/cases' },
    ],
    resources: [
      { label: '기술 블로그', href: '/blog' },
      { label: 'API 문서', href: 'http://localhost:8001/docs' },
      { label: '백서', href: '/resources/whitepapers' },
      { label: 'FAQ', href: '/resources/faq' },
    ],
    legal: [
      { label: '이용약관', href: '/legal/terms' },
      { label: '개인정보처리방침', href: '/legal/privacy' },
      { label: '쿠키 정책', href: '/legal/cookies' },
      { label: 'AI 기본법', href: '/legal/ai-act' },
    ],
  },
};

// ========================================
// Default SEO Configuration
// ========================================
export const defaultSEO: SEOData = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'AI 컨설팅',
    'AI 전환',
    'AX',
    '멀티 에이전트',
    'LangGraph',
    'CrewAI',
    'AutoGen',
    'ISO 42001',
    'AI 거버넌스',
    '로컬 LLM',
    '데이터 보안',
    'RAG',
    'A3 Security',
  ],
  ogImage: siteConfig.ogImage,
};

// ========================================
// Statistics
// ========================================
export const statistics = [
  { id: 'years', value: 26, label: '년', suffix: '+', description: '보안 컨설팅 역사' },
  { id: 'cost', value: 80, label: '%', suffix: '+', description: '비용 절감 효과' },
  { id: 'apis', value: 84, label: '개', suffix: '', description: 'API 엔드포인트' },
  { id: 'iso', value: 4, label: '개', suffix: '', description: 'ISO 표준 통합' },
];

// ========================================
// Consulting Stages
// ========================================
export const consultingStages = [
  {
    id: 1,
    name: 'Strategy',
    title: 'AI 비전 및 전략 수립',
    description: '고객사의 AI 도입 목표와 전사적 방향 정의',
    activities: ['AI 성숙도 진단', '기회 발굴', '전략 로드맵 수립'],
    deliverables: ['성숙도 진단 보고서', '기회 분석 리포트', '전략 로드맵'],
    icon: 'Compass',
  },
  {
    id: 2,
    name: 'Design',
    title: 'Use Case 및 설계 정의',
    description: '우선순위 높은 과제에 대한 구체적인 AI 시스템/솔루션 설계',
    activities: ['요건 정의', '아키텍처 설계', '거버넌스 설계'],
    deliverables: ['상세 요건 정의서', '아키텍처 설계서', '거버넌스 가이드'],
    icon: 'Pencil',
  },
  {
    id: 3,
    name: 'Build',
    title: '플랫폼 및 솔루션 구축',
    description: 'AI 플랫폼 구축 및 개별 AI 솔루션 검증(PoC) 및 개발/통합',
    activities: ['PoC 수행', '플랫폼 구축', '솔루션 개발'],
    deliverables: ['PoC 결과 보고서', '플랫폼 구축 완료', '솔루션 통합'],
    icon: 'Wrench',
  },
  {
    id: 4,
    name: 'Scale',
    title: '파일럿 및 확산',
    description: '개발된 솔루션의 현업 적용 및 전사적 확산',
    activities: ['파일럿 운영', '변화 관리', '전사 확산'],
    deliverables: ['파일럿 결과 보고서', '확산 계획서', '교육 자료'],
    icon: 'Rocket',
  },
  {
    id: 5,
    name: 'Operate',
    title: '운영, 모니터링 및 개선',
    description: '구축된 AI 시스템의 지속적 가치 창출을 위한 관리 및 개선',
    activities: ['모니터링', '지속 개선', '거버넌스 관리'],
    deliverables: ['모니터링 대시보드', '개선 로드맵', '거버넌스 리포트'],
    icon: 'LineChart',
  },
];

// ========================================
// ISO Standards
// ========================================
export const isoStandards = [
  {
    id: 'iso42001',
    code: 'ISO/IEC 42001',
    name: 'AI 관리 시스템',
    description: 'AI 시스템의 책임감 있는 개발 및 운영을 위한 관리 체계',
    coverage: ['AI 정책 관리', 'AIMS 체크리스트', '리스크 관리'],
  },
  {
    id: 'iso23053',
    code: 'ISO/IEC 23053',
    name: 'ML 프레임워크',
    description: '머신러닝 기반 AI 시스템의 구조와 프로세스 정의',
    coverage: ['ML 파이프라인', '생명주기 관리', '품질 보증'],
  },
  {
    id: 'iso24030',
    code: 'ISO/IEC 24030',
    name: 'AI 역량 평가',
    description: 'AI 시스템 및 조직의 역량을 평가하는 프레임워크',
    coverage: ['성숙도 진단', '공정성 메트릭', '위험 평가'],
  },
  {
    id: 'iso38500',
    code: 'ISO/IEC 38500',
    name: 'IT 거버넌스',
    description: 'IT 자원의 효과적 활용을 위한 거버넌스 프레임워크',
    coverage: ['EDM 사이클', '6대 원칙', '경영진 대시보드'],
  },
];

// ========================================
// AI Agents
// ========================================
export const aiAgents = [
  {
    id: 'strategy',
    name: 'Strategy Analyst',
    role: '전략 분석 에이전트',
    description: 'AI 전략 분석 및 성숙도 진단을 담당합니다.',
    icon: 'Compass',
    capabilities: ['성숙도 진단', '기회 발굴', '전략 수립', 'Gap 분석'],
    platform: 'ainex' as const,
  },
  {
    id: 'designer',
    name: 'Use Case Designer',
    role: '설계 에이전트',
    description: 'Use Case 설계 및 아키텍처 정의를 담당합니다.',
    icon: 'Pencil',
    capabilities: ['요건 정의', '아키텍처 설계', '기술 스택 선정', 'MVP 정의'],
    platform: 'ainex' as const,
  },
  {
    id: 'roi',
    name: 'ROI Analyst',
    role: 'ROI 분석 에이전트',
    description: '투자 효과 분석 및 비용 산정을 담당합니다.',
    icon: 'TrendingUp',
    capabilities: ['TCO 분석', 'NPV/IRR 계산', '비용 절감 분석', '시나리오 분석'],
    platform: 'ainex' as const,
  },
  {
    id: 'risk',
    name: 'Risk Assessor',
    role: '리스크 평가 에이전트',
    description: '리스크 평가 및 완화 전략을 담당합니다.',
    icon: 'Shield',
    capabilities: ['기술 리스크', '조직 리스크', '비즈니스 리스크', '완화 전략'],
    platform: 'ainex' as const,
  },
  {
    id: 'report',
    name: 'Report Generator',
    role: '보고서 생성 에이전트',
    description: '컨설팅 보고서 자동 생성을 담당합니다.',
    icon: 'FileText',
    capabilities: ['Executive Summary', '상세 보고서', '시각화 차트', '프레젠테이션'],
    platform: 'ainex' as const,
  },
];
