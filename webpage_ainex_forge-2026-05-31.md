# webpage_ainex_forge 엔지니어링 감사 보고서

작성일: 2026-05-31
대상: Brian
경로: /home/ubuntu-02/ai_project/webpage_ainex_forge

## 개요 (범위 + 한계)

본 보고서는 webpage_ainex_forge 단일 프로젝트에 대한 읽기 전용 정적 검사와 빌드/타입체크 실행 결과를 근거로 작성되었다. 모든 명령은 `timeout`(300~600초)으로 시간 제한하여 수행하였으며, data/ 및 .git/ 디렉터리는 검사 대상에서 제외하였다. 장시간 구동 서버(`next dev`/`next start`)는 실행하지 않았으므로, 런타임 동작·브라우저 렌더링·3D(Three.js) 화면은 실측하지 않았다(추정 영역으로 남음).

스택 (확인):
- Next.js 14.2.20 (App Router), React 18.3, TypeScript 5.6 (strict)
- Tailwind CSS 3.4, framer-motion, @react-three/fiber + drei + three, zustand, react-hook-form + zod, next-intl
- 엔트리포인트: src/app/layout.tsx, src/app/page.tsx, App Router 기반 40개 정적 라우트
- 스크립트: `dev`(포트 3001), `build`, `start`, `lint`(next lint), `type-check`(tsc --noEmit)
- CI: .github/workflows/deploy.yml — GitHub Pages 배포. `GITHUB_ACTIONS=true`일 때 next.config.js가 `output: 'export'`, `basePath: '/AiNex_Home'`로 정적 내보내기 수행
- 테스트: 테스트 프레임워크·테스트 파일 부재 (확인). 단위/통합 테스트 없음
- 환경: Node v22.22.2 / npm 10.9.7 설치됨. node_modules 설치 완료(next, tsc, eslint 바이너리 존재 확인)

## 실행·테스트 결과

| 항목 | 명령 | 결과 | 비고 |
|------|------|------|------|
| 타입체크 | `npx tsc --noEmit` | 통과 (exit 0) | 확인 |
| 빌드(로컬) | `npm run build` | 성공, 정적 페이지 40/40 생성 (exit 0) | 확인. 경고 없음 |
| 빌드(CI/export) | `GITHUB_ACTIONS=true npx next build` | 성공, out/ 생성 (exit 0) | 확인. 경고 발생(아래 참조) |
| 린트 | `npx next lint` | 실행 불가 — 대화형 설정 프롬프트로 차단 | 확인. ESLint 설정 파일 부재 |
| 단위테스트 | — | 해당 없음 | 테스트 없음 |

- 빌드 시 First Load JS 공유 87.3 kB, 루트(/) 140 kB. 첫 회 빌드에서 "Retrying 1/3" 1회 관측되었으나 후속 빌드에서 재현되지 않음 → 외부 폰트 패칭 등 일시적 네트워크 사유로 추정(빌드 결과에는 영향 없음).

## 발견된 문제점 (확인 vs 추정, 심각도)

1. [확인 / 중] 브랜드 스크럽 누락 1건.
   - src/app/resources/whitepapers/page.tsx:221, 화이트페이퍼 PDF 생성 문자열 템플릿 내 `WDLAB@2023-2026 - AINEX RESEARCH`가 잔존. 화면 레이아웃이 아닌 다운로드 PDF 본문에 노출되는 텍스트라 grep 외 검출이 어려웠던 것으로 보임. (조치함)
   - 그 외 `WDLAB@2023-2026`/`WDLAB@2023-2026`/변형(wdlab 등) 잔존 없음(확인). WDLAB@2023-2026 치환 40여 건 정상, 깨진 이중 치환·문장 파손 흔적 없음(확인).

2. [확인 / 중] ESLint 미설정.
   - .eslintrc* 파일 부재. `next lint`가 비대화형 환경에서 설정 프롬프트를 띄우며 종료(exit 1). 정적 린트가 사실상 수행되지 않음. CI에는 lint 단계가 없어 배포는 막지 않으나, 코드 품질 게이트가 부재함.

3. [확인 / 저] 정적 export 모드와 next.config.js 설정 비호환.
   - CI export 빌드 시 경고: `redirects`·`headers`가 `output: 'export'`에서 적용되지 않음. 즉 next.config.js의 보안 헤더(X-Frame-Options 등)와 `/home`→`/`, `/agentforge/docs`→`localhost:8001/docs` 리다이렉트가 GitHub Pages 배포본에는 미적용됨. 보안 헤더는 GitHub Pages 자체에서 제어 불가하므로 정적 호스팅의 구조적 한계.

4. [확인 / 저] `/agentforge/docs` 리다이렉트 대상이 `http://localhost:8001/docs`.
   - next.config.js redirects에 하드코딩된 로컬호스트 주소. 로컬 개발 외 환경(프로덕션/Pages)에서는 무의미하거나 깨진 링크가 됨. export 모드에서는 어차피 미적용(문제 2와 연계).

5. [추정 / 저] 런타임 미검증 영역.
   - Three.js 파티클 배경, framer-motion 애니메이션, react-hook-form 기반 contact 폼 제출 동작은 서버 미구동으로 실측하지 못함. 빌드·타입체크 통과는 컴파일 정합성만 보장하며 런타임 정상을 보장하지 않음.

## 조치한 내용

1. [확인] src/app/resources/whitepapers/page.tsx:221의 `WDLAB@2023-2026` → `WDLAB@2023-2026`로 치환. PDF 박스 정렬을 고려해 들여쓰기 폭을 조정. 저위험·검증 가능한 문자열 리터럴 1건 변경.
   - 재검증: `grep -iE "a3[ _-]?sec|wdlab" src/` 결과 0건(확인), `tsc --noEmit` 재통과(exit 0, 확인), `npm run build` 재성공(40/40, exit 0, 확인).

## 미해결·위험 항목

- ESLint 설정 추가(문제 2): 설정 파일 신규 생성은 다수 규칙이 한꺼번에 활성화되며 광범위한 경고/수정을 유발할 수 있어, "저위험·검증 가능한 변경만 적용" 원칙에 따라 본 감사에서는 적용하지 않음. 권고: `.eslintrc.json`에 `{ "extends": "next/core-web-vitals" }`를 추가하고 결과를 별도 검토 후 반영.
- localhost:8001 리다이렉트(문제 4): 외부 문서 서비스의 실제 운영 URL을 알아야 올바르게 수정 가능하므로 정보 부족으로 미조치. 권고: 환경변수 기반 URL로 대체.
- 정적 export의 헤더/리다이렉트 미적용(문제 3): 호스팅 방식 결정이 필요한 설계 사안이라 단순 코드 수정 범위를 벗어남. 권고만 제시(보안 헤더가 필수면 Pages 대신 헤더 제어 가능한 호스팅 고려).
- 테스트 부재: 자동화 회귀 검증 수단 없음. 본 감사의 "정상" 판정은 빌드/타입체크 범위에 한정됨.

## 종합 판단

빌드 가능·실행 가능 여부: 로컬 빌드와 CI(export) 빌드 모두 성공(확인), tsc 통과(확인). 따라서 빌드/배포 파이프라인 관점에서 runnable로 판단한다. 단, 런타임 화면 동작은 미검증(추정)이며, 정적 린트는 미설정으로 수행 불가하다. 브랜드 스크럽은 잔존 1건을 발견·수정하여 현재 잔존 0건이며 레이아웃 파손 흔적도 확인되지 않았다. 발견된 문제 총 5건(확인 4, 추정 1) 중 저위험 1건을 조치·재검증 완료했고, 나머지는 정보 부족 또는 설계 결정 사안으로 권고에 그쳤다.
