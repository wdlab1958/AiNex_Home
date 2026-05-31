# A3-AiNex & AgentForge Integrated Homepage

WDLAB@2023-2026의 **AiNex(AI Consulting Assistant)**와 **AgentForge(Multi-Agent Platform)**를 소개하는 통합 홈페이지 프로젝트입니다. 이 웹사이트는 기업의 AI 전환(AX)을 지원하고, 안전한 로컬 LLM 기반의 멀티 에이전트 서비스를 시각적으로 매력적인 인터페이스로 소개합니다.

> **Last Updated**: 2026-01-10  
> **Editor**: Brian Lee

## 🌟 주요 특징 (Key Features)

### 1. AiNex Platform
- **AI 컨설팅 자동화**: 기업의 AI 도입을 위한 5단계 컨설팅 방법론(Vision, Design, Build, Scale, Operate) 제공
- **ISO 국제 표준 준수**: ISO 42001(AIMS), 23053(ML), 24030(AI평가), 38500(IT Gov) 기반의 거버넌스 프레임워크
- **전문가 에이전트**: Strategy, Design, ROI, Risk, Report 등 5개 전문 에이전트 협업

### 2. AgentForge Platform
- **멀티 에이전트 프레임워크**: LangGraph(제어), CrewAI(협업), AutoGen(브레인스토밍)의 하이브리드 아키텍처
- **Production Ready**: 84개 API 엔드포인트 제공
- **고급 RAG 시스템**: Hybrid Search, Reranker, Tax RAG System(법률 특화)

### 3. Core Values
- **Data Sovereignty**: Local LLM (Ollama) 기반으로 데이터의 외부 유출 원천 차단
- **Futuristic Design**: 'Futuristic Cybernetic' 테마 및 다이내믹한 UI/UX

### 4. Industry AX Solutions
6대 핵심 산업별 특화된 AI 전환 전략 및 솔루션 페이지 제공:
- **제조업**: 예지 보전, 스마트 팩토리, 품질 관리
- **금융업**: FDS, 초개인화, RegTech
- **의료/헬스케어**: CDSS, 질병 예측, HIPAA
- **유통/물류**: 수요 예측, 재고 최적화, SCM
- **공공기관**: 데이터 기반 행정, 민원 챗봇, 온프레미스 보안
- **IT 서비스**: AIOps, Copilot, 기술 문서 자동화

## 🛠 기술 스택 (Tech Stack)

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Config
- Port: `3001` (Default)
- Node Engine: `>=18.17.0`

## 🚀 시작하기 (Getting Started)

### 1. 설치 (Installation)
```bash
npm install
# or
yarn install
```

### 2. 실행 (Development)
```bash
npm run dev
```
브라우저에서 `http://localhost:3001`으로 접속하여 확인합니다.

### 3. 빌드 및 배포 (Build & Start)
```bash
npm run build
npm start
```

## 📜 스크립트 (Scripts)
| Command | Description |
|---------|-------------|
| `dev` | 개발 모드 실행 (`next dev -p 3001`) |
| `build` | 프로덕션 빌드 (`next build`) |
| `start` | 프로덕션 서버 실행 (`next start -p 3001`) |
| `lint` | 린트 검사 (`next lint`) |
| `type-check` | 타입 검사 (`tsc --noEmit`) |

## 📂 프로젝트 구조 (Structure)

```
src/
├── app/                          # Next.js App Router Pages
│   ├── page.tsx                  # 메인 홈페이지
│   ├── layout.tsx                # 공통 레이아웃
│   │
│   ├── about/                    # 회사 소개
│   │   ├── page.tsx              # WDLAB@2023-2026 소개
│   │   ├── ainex-division/       # AiNex 사업부 소개
│   │   └── news/                 # 뉴스 & 공지사항 (모달 지원)
│   │
│   ├── ainex/                    # AiNex 플랫폼
│   │   ├── page.tsx              # 플랫폼 개요
│   │   ├── framework/            # 5단계 컨설팅 프레임워크
│   │   ├── agents/               # AI 에이전트 소개
│   │   └── governance/           # ISO 기반 거버넌스
│   │
│   ├── agentforge/               # AgentForge 플랫폼
│   │   ├── page.tsx              # 플랫폼 개요
│   │   ├── multi-agent/          # 멀티 에이전트 시스템
│   │   └── features/             # 핵심 기능
│   │
│   ├── services/                 # 서비스
│   │   ├── page.tsx              # 서비스 개요
│   │   ├── consulting/           # AI 컨설팅
│   │   ├── implementation/       # 구축 서비스
│   │   ├── support/              # 기술 지원
│   │   └── pricing/              # 요금제
│   │
│   ├── industries/               # 산업별 솔루션
│   │   ├── page.tsx              # 산업 개요 및 매트릭스
│   │   ├── manufacturing/        # 제조업
│   │   ├── finance/              # 금융업
│   │   ├── healthcare/           # 의료/헬스케어
│   │   ├── retail/               # 유통/물류
│   │   ├── public/               # 공공기관 (리다이렉트)
│   │   ├── public-sector/        # 공공기관
│   │   └── it-service/           # IT 서비스
│   │
│   ├── resources/                # 리소스 센터
│   │   ├── page.tsx              # 리소스 개요
│   │   ├── whitepapers/          # 백서 (모달 & PDF 다운로드)
│   │   ├── webinars/             # 웨비나 (등록 & 녹화본)
│   │   └── faq/                  # FAQ (카테고리별 필터)
│   │
│   ├── blog/                     # 기술 블로그
│   │   └── page.tsx              # 블로그 (카테고리, 검색, 모달, 구독)
│   │
│   ├── cases/                    # 고객 사례
│   │   └── page.tsx              # 성공 사례 소개
│   │
│   ├── partners/                 # 파트너십
│   │   └── page.tsx              # 파트너 소개 & 문의 모달
│   │
│   ├── careers/                  # 채용 정보
│   │   └── page.tsx              # 채용 공고
│   │
│   ├── contact/                  # 문의하기
│   │   └── page.tsx              # 문의 양식
│   │
│   └── legal/                    # 법률/약관
│       ├── terms/                # 이용약관
│       ├── privacy/              # 개인정보처리방침
│       ├── cookies/              # 쿠키 정책
│       └── ai-act/               # AI 기본법 준수
│
├── components/                   # React 컴포넌트
│   ├── agentforge/
│   │   └── WorkflowDiagram.tsx   # 워크플로우 다이어그램
│   ├── layout/
│   │   ├── Header.tsx            # 헤더 & 네비게이션
│   │   ├── Footer.tsx            # 푸터
│   │   └── GlobalBackground.tsx  # 글로벌 배경
│   ├── sections/                 # 섹션 컴포넌트
│   │   ├── AgentMesh.tsx         # 에이전트 메쉬 섹션
│   │   ├── CTASection.tsx        # CTA 섹션
│   │   ├── HeroSection.tsx       # 히어로 섹션
│   │   ├── ISOStandards.tsx      # ISO 표준 섹션
│   │   ├── PlatformOverview.tsx  # 플랫폼 개요 섹션
│   │   ├── Statistics.tsx        # 통계 섹션
│   │   └── ValueProposition.tsx  # 가치 제안 섹션
│   └── three/
│       └── ParticleBackground.tsx # 파티클 배경
│
├── config/                       # 설정 파일
│   └── site.ts                   # 사이트 설정 (회사 정보 등)
│
├── lib/                          # 유틸리티
│   └── utils.ts                  # 공통 유틸리티 함수
│
├── styles/                       # 스타일
│   └── globals.css               # 전역 스타일
│
└── types/                        # TypeScript 타입 정의
    └── index.ts                  # 타입 정의
```

## 📄 페이지별 기능 상세

### 🏠 메인 페이지 (`/`)
- Hero 섹션: 회사 소개 및 주요 메시지
- ISO 표준 섹션: 국제 표준 준수 안내
- CTA 섹션: 연락처 정보 (support@ainex.ai, 02-6952-2511)

### 📰 뉴스 & 공지 (`/about/news`)
- **보도자료**: 최신 언론 보도 (모달로 상세 내용 확인)
- **공지사항**: 회사 공지 (모달로 상세 내용 확인)

### 📝 블로그 (`/blog`)
- **카테고리 필터**: AI Trends, Engineering, Security, Case Studies, Culture
- **검색 기능**: 제목/내용 검색
- **게시물 모달**: 클릭 시 전체 내용 표시
- **뉴스레터 구독**: 이메일 등록 기능

### 📚 리소스 센터

#### 백서 (`/resources/whitepapers`)
- **10개의 기술 백서** 제공
- 모달로 상세 내용 확인 (목차, 요약, 핵심 내용)
- PDF 다운로드 기능

#### 웨비나 (`/resources/webinars`)
- **8개의 웨비나** 등록
  - 예정된 웨비나: 3개 (등록 기능)
  - 녹화본: 5개 (시청 기능)
- 카테고리 필터: AI 거버넌스, 기술, 보안, 컨설팅, 사례 연구
- 모달로 상세 정보 및 발표자 소개

#### FAQ (`/resources/faq`)
- **22개의 FAQ** 등록
- 카테고리별 필터: General(5), Pricing(5), Technical(7), Security(5)
- 검색 기능
- 아코디언 UI

### 🤝 파트너십 (`/partners`)
- 파트너사 소개
- **파트너십 문의 모달**: 회사명, 담당자, 연락처, 문의 유형, 메시지 입력

### 💼 서비스 (`/services`)
- 컨설팅, 구축, 지원 서비스 소개
- 요금제 안내 (Starter, Professional, Enterprise)

## 🏢 회사 정보 (Company Info)

| 항목 | 내용 |
|------|------|
| 회사명 | WDLAB@2023-2026 Co.,Ltd. |
| 대표 | 한재호 |
| 설립 | 2000년 (26년 업력) |
| 이메일 | support@ainex.ai |
| 전화 | 02-6952-2511 (대표전화) |
| 주소 | 서울특별시 영등포구 선유로9가 10 문래SK V1 1710호 |

## 📝 라이선스 (License)

This project is proprietary software of WDLAB@2023-2026 Co.,Ltd.

Planning & Design ; Brian Lee / AI TF TEAM LEADER

© 2026 WDLAB@2023-2026 Co.,Ltd. All rights reserved.
