import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [systemTime, setSystemTime] = useState("");
    const [terminalLogs, setTerminalLogs] = useState([
        "[SYS] Neural link established for Kenton Crosby...",
        "[NET] Initializing developer credentials & portfolio modules...",
        "[READY] Ready to receive transmission or contract inquiries..."
    ]);
    const [commandInput, setCommandInput] = useState("");
    const [projects] = useState([
        {
            id: 1,
            title: "NEO-PORTFOLIO v1.0",
            tech: "React // Tailwind CSS // Vite",
            desc: "futuristic portfolio not sure if I like it yet",
            status: "ONLINE"
        },
        {
            id: 2,
            title: "CYBER-STOREFRONT",
            tech: "JavaScript // Node.js // REST APIs",
            desc: "E-commerce interface built with responsive data feeds, secure state management, and custom neon layouts.",
            status: "DEPLOYED"
        },
        {
            id: 3,
            title: "SYNTH-TASK MANAGER",
            tech: "React Hooks // LocalStorage",
            desc: "Mission directive dashboard tracking project milestones, task statuses, and real-time operator notes.",
            status: "ACTIVE"
        }
    ]);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            const millis = Math.floor(now.getMilliseconds() / 10);

            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12;

            setSystemTime(`${hours}:${minutes}:${seconds}:${millis} ${ampm}`);
        };
        updateClock();
        const interval = setInterval(updateClock, 70);
        return () => clearInterval(interval);
    }, []);

    const handleTerminalSubmit = (e) => {
        e.preventDefault();
        if (!commandInput.trim()) return;

        let response = "[OK] Command executed successfully.";
        const cmd = commandInput.trim().toLowerCase();

        if (cmd === "hire" || cmd === "contact") {
            window.location.href = "/contact";
        } else if (cmd === "skills") {
            response = "[SYS] Stack: JavaScript, React, HTML5, CSS3, Tailwind, Git.";
        } else if (cmd === "help") {
            response = "[INFO] Available commands: 'hire', 'skills', 'clear', 'help', 'contact'";
        } else if (cmd === "clear") {
            setTerminalLogs(["[SYS] Terminal cache flushed."]);
            setCommandInput("");
            return;
        }

        setTerminalLogs((prev) => [`> ${commandInput}`, response, ...prev.slice(0, 4)]);
        setCommandInput("");
    };

    return (
        <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between font-mono selection:bg-cyan-400 selection:text-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

            <header className="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-400 animate-ping rounded-full shadow-[0_0_10px_#22d3ee]" />
                        <span className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-500 text-sm md:text-base">
                            KENTON_CROSBY // DEV_PORTFOLIO
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            SYS_TIME: <strong className="text-cyan-400">{systemTime}</strong>
                        </span>

                        <Link
                            to="/contact"
                            className="px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition">
                            CONTACT
                        </Link>
                        <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                            ● AVAILABLE FOR HIRE
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl w-full mx-auto px-6 py-10 z-10 flex-1 space-y-6">
                <div className="relative rounded-xl border border-cyan-500/30 bg-slate-950/60 p-6 md:p-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] text-cyan-500/50 tracking-widest uppercase">
                            [SYS_ID: KC-026]
                        </span>
                       
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs mb-3">
                        <span>⚡ STATUS: WEB DEVELOPER READY</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                        KENTON CROSBY
                    </h1>
                    <p className="text-xs md:text-sm text-slate-400 max-w-2xl leading-relaxed">
                        Brand-new front-end web developer building clean, responsive, and
                        high-performance digital architectures. Specializing in modern JavaScript,
                        React, and immersive UI/UX experiences.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-4 py-2 rounded-lg text-xs transition shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                            INITIATE CONTACT_
                        </Link>
                        <a
                            href="#projects"
                            className="bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 font-bold px-4 py-2 rounded-lg text-xs transition">
                            VIEW PROJECTS ↓
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="projects">
                    <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                                <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                                    // DEPLOYED BUILDS
                                </h2>
                                <span className="text-[11px] text-slate-500">3 MODULES ACTIVE</span>
                            </div>
                            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                                {projects.map((proj) => (
                                    <div
                                        key={proj.id}
                                        className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-lg group hover:border-cyan-500/40 transition">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs font-bold text-slate-200">
                                                {proj.title}
                                            </span>
                                            <span className="text-[10px] text-emerald-400 font-mono">
                                                [{proj.status}]
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-slate-400 mb-2">
                                            {proj.desc}
                                        </p>
                                        <span className="text-[10px] text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                                            {proj.tech}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-pink-500/20 bg-slate-950/60 p-6 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-2">
                                <h2 className="text-xs uppercase tracking-widest text-pink-400 font-bold">
                                    // INTERACTIVE TERMINAL
                                </h2>
                                <span className="text-[10px] text-pink-500/70 animate-pulse">
                                    ● READY
                                </span>
                            </div>
                            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 space-y-2 mb-4 h-44 overflow-y-auto text-[11px] text-slate-300 font-mono">
                                {terminalLogs.map((log, index) => (
                                    <div
                                        key={index}
                                        className={`${log.startsWith(">") ? "text-cyan-300" : "text-slate-400"}`}>
                                        {log}
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleTerminalSubmit} className="flex gap-2">
                                <input
                                    type="text"
                                    value={commandInput}
                                    onChange={(e) => setCommandInput(e.target.value)}
                                    placeholder="Type 'hire', 'skills', or 'help'..."
                                    className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-pink-500 transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-pink-600 hover:bg-pink-500 text-white font-bold px-3 py-2 rounded-lg text-xs transition shadow-[0_0_12px_rgba(244,114,182,0.4)] cursor-pointer">
                                    EXEC
                                </button>
                            </form>
                        </div>
                        <div className="mt-6 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-500">
                            <span>STACK: REACT // TAILWIND</span>
                            <span className="text-cyan-400">DEV: KENTON CROSBY</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-cyan-500/20 bg-slate-950/80 py-4 text-center text-[10px] text-slate-500 tracking-widest">
                DESIGNED & BUILT BY AKEEM CROSBY // 2026
            </footer>
        </div>
    );
}

export default Home; 
