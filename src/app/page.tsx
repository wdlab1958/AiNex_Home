import { HeroSection } from '@/components/sections/HeroSection';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { AgentMesh } from '@/components/sections/AgentMesh';
import { ISOStandards } from '@/components/sections/ISOStandards';
import { Statistics } from '@/components/sections/Statistics';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Platform Overview (AiNex & AgentForge) */}
      <PlatformOverview />

      {/* AI Agent Mesh Visualization */}
      <AgentMesh />

      {/* ISO Standards Governance */}
      <ISOStandards />

      {/* Statistics */}
      <Statistics />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
