import { useState } from "react";
import { Link } from "react-router-dom";
import CopyEmailButton from "./CopyEmailButton";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("[ERROR] All fields are required for transmission.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio Transmission from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:kentonc1990@gmail.com?subject=${subject}&body=${body}`;
        setStatus("[TRANSMISSION SENT] Opening secure comm channel...");
    };

    return (
        <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between font-mono selection:bg-cyan-400 selection:text-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

            <header className="border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-400 animate-ping rounded-full shadow-[0_0_10px_#22d3ee]" />
                        <span className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-pink-500 text-sm md:text-base">
                            KENTON_CROSBY // SECURE_COMM
                        </span>
                       
                    
                    </div>
                    <Link
                        to="/"
                        className="text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 px-3 py-1.5 rounded-lg bg-slate-900 transition">
                        ← BACK TO HOME
                    </Link>
                    
                </div>
            </header>

            <main className="max-w-2xl w-full mx-auto px-6 py-12 z-10 flex-1">
                <div className="rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)] relative">
                    <div className="absolute top-4 right-6 text-[10px] text-cyan-500/50 tracking-widest uppercase">
                        [FREQ: SECURE-01]
                    </div>

                    <div className="mb-6 space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                            <span>⚡ DIRECT TRANSMISSION CHANNEL</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            Initialize Contact
                        </h1>
                        <p className="text-xs md:text-sm text-slate-400">
                            Fill out the telemetry form below to dispatch an encrypted message
                            straight to my inbox. Or copy my email address below.
                        </p>
                    </div>
                    <div className= "mb-6 ">
                        <CopyEmailButton />
                    </div>
                    {status && (
                        <div className="mb-6 p-3 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                            {status}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
                                // OPERATOR NAME
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter your name or handle..."
                                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
                                // RETURN ADDRESS (EMAIL)
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="name@example.com"
                                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
                                // TRANSMISSION CONTENT
                            </label>
                            <textarea
                                rows="4"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Type your project inquiry or contract message here..."
                                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl text-xs transition shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer">
                            TRANSMIT MESSAGE →
                        </button>
                    </form>
                </div>
            </main>

            <footer className="border-t border-cyan-500/20 bg-slate-950/80 py-4 text-center text-[10px] text-slate-500 tracking-widest">
                SECURE CHANNEL // KENTON CROSBY
            </footer>
        </div>
    );
}

export default Contact;
