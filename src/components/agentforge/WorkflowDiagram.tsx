'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, Cpu, Layers, Database, MessageSquare } from 'lucide-react';

const WorkflowDiagram = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-[#0f1115] to-[#0a0b0d] border border-white/5 overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Central Flow Container */}
            <div className="relative z-10 flex flex-col items-center gap-12">

                {/* Level 1: User Input */}
                <Node
                    icon={<User className="w-6 h-6 text-blue-400" />}
                    label="User Input"
                    subLabel="Web UI / API"
                    delay={0}
                />

                {/* Connection Line 1 */}
                <AnimatedLine height={40} delay={0.5} />

                {/* Level 2: API Gateway */}
                <Node
                    icon={<Server className="w-6 h-6 text-purple-400" />}
                    label="FastAPI Gateway"
                    subLabel="Auth & Routing"
                    delay={1}
                />

                {/* Connection Line 2 */}
                <AnimatedLine height={40} delay={1.5} />

                {/* Level 3: Orchestrator */}
                <Node
                    icon={<Cpu className="w-6 h-6 text-emerald-400" />}
                    label="Orchestrator"
                    subLabel="Task Router"
                    delay={2}
                    isPulsing
                />

                {/* Connection Line 3 (Split) */}
                <div className="relative h-12 w-full flex justify-center">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                        className="w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent absolute top-0"
                    />
                    {/* Horizontal Beam */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '80%', opacity: 1 }}
                        transition={{ duration: 0.8, delay: 3 }}
                        className="h-0.5 bg-white/10 absolute bottom-0"
                    />
                </div>

                {/* Level 4: Multi-Agent Frameworks (Parallel) */}
                <div className="grid grid-cols-3 gap-8 w-full max-w-3xl">
                    <FrameworkNode
                        name="LangGraph"
                        role="Control Loop"
                        color="blue"
                        delay={3.5}
                    />
                    <FrameworkNode
                        name="CrewAI"
                        role="Role-Playing"
                        color="purple"
                        delay={3.7}
                    />
                    <FrameworkNode
                        name="AutoGen"
                        role="Brainstorming"
                        color="green"
                        delay={3.9}
                    />
                </div>

                {/* Rejoin Lines */}
                <div className="relative h-12 w-full max-w-3xl flex justify-center">
                    {/* Connecting lines from frameworks to center */}
                    <div className="absolute top-0 left-[16%] w-0.5 h-full bg-gradient-to-b from-blue-500/20 to-transparent transform -skew-x-[20deg]" />
                    <div className="absolute top-0 right-[16%] w-0.5 h-full bg-gradient-to-b from-green-500/20 to-transparent transform skew-x-[20deg]" />
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/20 to-transparent -translate-x-1/2" />
                </div>

                {/* Level 5: Skills & RAG */}
                <div className="w-full max-w-2xl p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex justify-between items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                    <motion.div
                        animate={{ x: [-20, 400] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                    />

                    <div className="relative z-10 flex items-center gap-4">
                        <Layers className="w-8 h-8 text-blue-400" />
                        <div className="text-left">
                            <div className="font-bold text-lg">Integrated Skills</div>
                            <div className="text-sm text-gray-400">Web Search, Code Execution, API Calls</div>
                        </div>
                    </div>

                    <div className="h-8 w-px bg-white/10" />

                    <div className="relative z-10 flex items-center gap-4">
                        <div className="text-right">
                            <div className="font-bold text-lg">RAG System</div>
                            <div className="text-sm text-gray-400">Vector DB + Graph Memory</div>
                        </div>
                        <Database className="w-8 h-8 text-purple-400" />
                    </div>
                </div>

                {/* Connection Line 4 */}
                <AnimatedLine height={40} delay={4.5} />

                {/* Level 6: LLM & Output */}
                <Node
                    icon={<MessageSquare className="w-6 h-6 text-white" />}
                    label="Local LLM (Ollama)"
                    subLabel="Final Inference"
                    delay={5}
                    isFinal
                />

            </div>
        </div>
    );
};

// Helper Components

const Node = ({ icon, label, subLabel, delay, isPulsing, isFinal }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`relative flex flex-col items-center justify-center w-48 p-4 rounded-xl border backdrop-blur-md
            ${isFinal
                ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'
                : 'bg-[#1a1c22] border-white/10 shadow-lg'
            }
        `}
    >
        {isPulsing && (
            <span className="absolute -inset-1 rounded-xl bg-emerald-500/20 animate-pulse z-0" />
        )}
        <div className={`relative z-10 mb-2 p-3 rounded-full bg-white/5 ${isFinal ? 'text-white' : ''}`}>
            {icon}
        </div>
        <div className="relative z-10 text-center">
            <div className="font-bold text-white mb-1">{label}</div>
            <div className="text-xs text-gray-400">{subLabel}</div>
        </div>

        {/* Connecting Dot */}
        {!isFinal && (
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: delay + 0.5 }}
                className="absolute -bottom-1.5 w-3 h-3 rounded-full bg-white/20 border border-[#0a0b0d]"
            />
        )}
    </motion.div>
);

const AnimatedLine = ({ height, delay }: { height: number, delay: number }) => (
    <div className="relative w-0.5 bg-white/10" style={{ height }}>
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 0.5, delay }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500"
        />
    </div>
);

const FrameworkNode = ({ name, role, color, delay }: any) => {
    const colorClasses: { [key: string]: string } = {
        blue: 'text-blue-400 border-blue-500/20 hover:border-blue-500/50 bg-blue-500/5',
        purple: 'text-purple-400 border-purple-500/20 hover:border-purple-500/50 bg-purple-500/5',
        green: 'text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/5'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${colorClasses[color]}`}
        >
            <div className="font-bold text-lg mb-1">{name}</div>
            <div className="text-xs opacity-70 uppercase tracking-wider">{role}</div>
        </motion.div>
    );
};

export default WorkflowDiagram;
