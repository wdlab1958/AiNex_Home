import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기',
  description: '데모 신청, 견적 문의, 파트너십 문의를 접수하세요.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-center mb-6">
            <span className="gradient-text">문의하기</span>
          </h1>
          <p className="text-xl text-slate-400 text-center mb-12">
            AI 전환에 대한 모든 문의를 환영합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: '데모 신청',
                description: 'AiNex & AgentForge 플랫폼 데모',
                icon: '🎯',
              },
              {
                title: '견적 문의',
                description: '맞춤형 서비스 견적 요청',
                icon: '📋',
              },
              {
                title: '파트너십',
                description: '비즈니스 파트너십 제안',
                icon: '🤝',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 text-center card-hover">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6">문의 양식</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                             rounded-lg focus:border-quantum-blue-500 focus:outline-none
                             transition-colors"
                    placeholder="홍길동"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                             rounded-lg focus:border-quantum-blue-500 focus:outline-none
                             transition-colors"
                    placeholder="example@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                             rounded-lg focus:border-quantum-blue-500 focus:outline-none
                             transition-colors"
                    placeholder="(주)회사명"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">연락처</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                             rounded-lg focus:border-quantum-blue-500 focus:outline-none
                             transition-colors"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                           rounded-lg focus:border-quantum-blue-500 focus:outline-none
                           transition-colors"
                  required
                >
                  <option value="">선택하세요</option>
                  <option value="demo">데모 신청</option>
                  <option value="quote">견적 문의</option>
                  <option value="partnership">파트너십 문의</option>
                  <option value="other">기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  관심 플랫폼
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>AiNex</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>AgentForge</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  문의 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700
                           rounded-lg focus:border-quantum-blue-500 focus:outline-none
                           transition-colors h-32 resize-none"
                  placeholder="문의 내용을 입력하세요."
                  required
                />
              </div>

              <div>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded" required />
                  <span className="text-sm text-slate-400">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                    <a href="/legal/privacy" className="text-quantum-blue-400 ml-1">
                      자세히 보기
                    </a>
                  </span>
                </label>
              </div>

              <button type="submit" className="w-full btn-glow py-4">
                문의하기
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold mb-1">이메일</h3>
              <p className="text-slate-400">support@ainex.ai</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-semibold mb-1">전화</h3>
              <p className="text-slate-400">02-6952-2511 (대표전화)</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">주소</h3>
              <p className="text-slate-400">서울특별시 영등포구 선유로9가 10 문래SK V1 1710호</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
