'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Handshake, Globe, ArrowRight, Shield, Cpu, Building, X, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Partnership Inquiry Modal Component
const PartnershipModal = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnerType: '',
        message: '',
        agreePrivacy: false,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 실제 구현에서는 API 호출
        console.log('Partnership inquiry submitted:', formData);
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setIsSubmitted(false);
        setFormData({
            companyName: '',
            contactName: '',
            email: '',
            phone: '',
            partnerType: '',
            message: '',
            agreePrivacy: false,
        });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                    onClick={handleClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#111] border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Handshake className="w-5 h-5 text-purple-400" />
                                    <span className="text-lg font-semibold text-white">파트너십 문의</span>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                            {isSubmitted ? (
                                // Success Message
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">문의가 접수되었습니다!</h3>
                                    <p className="text-gray-400 mb-8">
                                        빠른 시일 내에 담당자가 연락드리겠습니다.<br />
                                        파트너십에 관심 가져주셔서 감사합니다.
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
                                    >
                                        확인
                                    </button>
                                </motion.div>
                            ) : (
                                // Form
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                회사명 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.companyName}
                                                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                         transition-colors"
                                                placeholder="(주)회사명"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                담당자명 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.contactName}
                                                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                         transition-colors"
                                                placeholder="홍길동"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                이메일 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                         transition-colors"
                                                placeholder="partner@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                연락처
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                         focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                         transition-colors"
                                                placeholder="02-1234-5678"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            파트너십 유형 <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.partnerType}
                                            onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                     focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                     transition-colors"
                                        >
                                            <option value="" className="bg-[#111]">선택하세요</option>
                                            <option value="technology" className="bg-[#111]">Technology Partner</option>
                                            <option value="consulting" className="bg-[#111]">Consulting Partner</option>
                                            <option value="solution" className="bg-[#111]">Solution Partner</option>
                                            <option value="other" className="bg-[#111]">기타</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            문의 내용 <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                                                     focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500
                                                     transition-colors h-32 resize-none"
                                            placeholder="파트너십에 대한 제안 내용을 입력해 주세요."
                                        />
                                    </div>

                                    <div>
                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                required
                                                checked={formData.agreePrivacy}
                                                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                                                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 
                                                         checked:bg-purple-600 checked:border-purple-600
                                                         focus:ring-purple-500 focus:ring-offset-0"
                                            />
                                            <span className="text-sm text-gray-400">
                                                개인정보 수집 및 이용에 동의합니다. (필수)
                                                <a href="/legal/privacy" className="text-purple-400 ml-1 hover:underline">
                                                    자세히 보기
                                                </a>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl 
                                                     bg-gradient-to-r from-purple-600 to-blue-600 
                                                     hover:from-purple-700 hover:to-blue-700 
                                                     transition-all font-semibold"
                                        >
                                            <Send className="w-5 h-5" />
                                            파트너십 문의 제출
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const PartnersPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0b0d] text-white pt-24 pb-16">
            {/* Partnership Modal */}
            <PartnershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm mb-6 border border-purple-500/30">
                        Partnership Ecosystem
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                            Grow Together with AiNex
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        WDLAB@2023-2026와 함께 안전한 AI 생태계를 만들어갈 파트너를 찾습니다. 기술, 컨설팅, 솔루션 등 다양한 분야에서 협력을 기다립니다.
                    </p>
                </motion.div>
            </section>

            {/* Partnership Programs */}
            <section className="container mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Partner Programs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                        <Cpu className="w-12 h-12 text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Technology Partners</h3>
                        <p className="text-gray-400 mb-6">
                            LLM, Cloud, 보안 기술 등 AiNex 플랫폼과 상호 운용성을 검증하고 기술적 시너지를 창출합니다.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                            <li>API 연동 및 통합 지원</li>
                            <li>공동 기술 마케팅</li>
                            <li>베타 테스트 참여 기회</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                        <Handshake className="w-12 h-12 text-purple-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Consulting Partners</h3>
                        <p className="text-gray-400 mb-6">
                            AiNex 플랫폼을 활용하여 고객사에게 최적의 AI 전환 전략과 컨설팅 서비스를 제공합니다.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                            <li>파트너 전용 요금제</li>
                            <li>컨설팅 방법론 교육</li>
                            <li>세일즈 리드 공유</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                        <Building className="w-12 h-12 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-bold mb-4">Solution Partners</h3>
                        <p className="text-gray-400 mb-6">
                            특정 산업 분야에 특화된 AI 솔루션을 AiNex와 결합하여 고객에게 통합 가치를 전달합니다.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                            <li>Co-Selling 기회</li>
                            <li>산업별 레퍼런스 공유</li>
                            <li>솔루션 인증 마크</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Partners (Logos placeholder) */}
            <section className="container mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Strategic Partners</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-24 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                            <span className="text-lg font-bold text-gray-600">PARTNER LOGO</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-12 rounded-3xl border border-white/10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">파트너가 되어 비즈니스를 확장하세요</h2>
                    <p className="text-gray-300 mb-8">
                        성공적인 파트너십을 위한 모든 지원이 준비되어 있습니다.<br />
                        지금 바로 파트너십을 문의하세요.
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-colors"
                    >
                        파트너십 문의하기 <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PartnersPage;
