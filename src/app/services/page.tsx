'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, BarChart3, Binary, LayoutTemplate } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AX Consulting & SaaS Services
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            AI 전환을 위한 전문 컨설팅 서비스와 합리적인 SaaS 요금제를 만나보세요.
          </p>
        </motion.div>
      </section>

      {/* AX Consulting Services */}
      <section id="consulting" className="container mx-auto px-4 mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
          <h2 className="text-3xl font-bold text-center">AX Consulting Services</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SaaS Pricing */}
      <section id="saas" className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
          <h2 className="text-3xl font-bold text-center">SaaS Subscription Plans</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm flex flex-col ${
                plan.popular
                  ? 'bg-purple-500/10 border-purple-500/50'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-500 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-sm text-gray-400">{plan.period}</span>}
                </div>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-purple-400' : 'text-blue-400'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const consultingServices = [
  {
    title: 'AI 성숙도 진단',
    icon: <BarChart3 className="w-6 h-6" />,
    features: [
      '4대 영역 평가 (전략/조직/데이터/프로세스)',
      'CMMI 기반 5단계 성숙도 모델',
      'Gap 분석 및 개선 권고',
    ],
  },
  {
    title: 'AI 전략 수립',
    icon: <LayoutTemplate className="w-6 h-6" />,
    features: [
      'AI 비전 및 목표 정의',
      '전략 로드맵 수립',
      '시나리오 분석 (보수적/균형/적극적)',
    ],
  },
  {
    title: 'Use Case 발굴',
    icon: <Binary className="w-6 h-6" />,
    features: [
      '120+ 산업별 AI 적용 템플릿',
      '가치-실행 용이성 매트릭스',
      '우선순위 결정 지원',
    ],
  },
  {
    title: 'ROI/리스크 분석',
    icon: <Shield className="w-6 h-6" />,
    features: [
      'NPV, IRR, Payback Period 계산',
      'TCO 분석',
      '4대 리스크 영역 평가',
    ],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/월',
    features: [
      '프로젝트 3개',
      '기본 컨설팅 기능',
      '기본 보고서',
      '커뮤니티 지원',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/월',
    features: [
      '프로젝트 무제한',
      '모든 컨설팅 기능',
      'ISO 표준 통합',
      '우선 지원',
      'API 접근',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$2,999',
    period: '/월',
    features: [
      '프로젝트 무제한',
      '모든 기능 포함',
      '전용 인프라',
      '전담 지원',
      '커스터마이징',
    ],
    popular: false,
  },
  {
    name: 'Custom',
    price: '협의',
    period: '',
    features: [
      '무제한 용량',
      '전용 인프라 구축',
      'SLA 보장',
      '온사이트 지원',
    ],
    popular: false,
  },
];

export default ServicesPage;
