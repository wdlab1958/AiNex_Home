'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navConfig, siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (href: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveDropdown(href);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setTimeoutId(id);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-nebula-navy/90 backdrop-blur-lg border-b border-slate-800'
          : 'bg-transparent'
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-xl font-bold">A3</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">AiNex</div>
              <div className="text-xs text-slate-400">by A3 Security</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navConfig.mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.href)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'hover:bg-slate-800/50 hover:text-white',
                    activeDropdown === item.href ? 'text-white' : 'text-slate-300',
                    'flex items-center gap-1 group'
                  )}
                  onClick={(e) => {
                    // Allow navigation for parent items
                    if (activeDropdown === item.href) {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.5 text-xs bg-quantum-blue-500 rounded animate-pulse">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.href ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div
                    className="absolute top-full left-0 pt-2 w-64 z-50"
                    onMouseEnter={() => handleMouseEnter(item.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="glass-card shadow-2xl overflow-hidden border border-slate-700/50 rounded-xl backdrop-blur-xl bg-[#0a0b0d]/95"
                      style={{
                        animation: 'fadeIn 0.2s ease-out'
                      }}
                    >
                      <div className="p-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={child.isExternal ? "_blank" : undefined}
                            className="group flex items-center justify-between px-4 py-3 text-sm text-slate-300 rounded-lg
                                     hover:bg-quantum-blue-600 hover:text-white
                                     active:bg-quantum-blue-700 active:scale-[0.98]
                                     transition-all duration-200 cursor-pointer pointer-events-auto"
                            onClick={() => {
                              setTimeout(() => setActiveDropdown(null), 50);
                            }}
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-200">{child.label}</span>
                            <svg
                              className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cyan-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-300
                       hover:text-white transition-colors"
            >
              문의하기
            </Link>
            <Link href="/contact?type=demo" className="btn-glow text-sm">
              데모 신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="space-y-2">
              {navConfig.mainNav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-slate-300
                             hover:bg-slate-800/50 hover:text-white rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs bg-quantum-blue-500 rounded">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {/* Mobile Submenu items */}
                  {item.children && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          - {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <Link
                  href="/contact?type=demo"
                  className="block w-full btn-glow text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  데모 신청
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
