import { useState } from "react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "kentonc1990@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-2.5 p-2 bg-slate-950/80 border border-cyan-500/30 rounded-xl max-w-full  font-mono backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)]">
      <span className="text-xs text-cyan-400 tracking-wide">{email}</span>
      <button
        onClick={handleCopy}
        className="ml-auto px-3 py-1.5 text-xs font-bold text-black bg-cyan-500 rounded-lg hover:bg-cyan-400 transition shadow-[0_0_10px_rgba(34,211,238,0.4)] cursor-pointer"
      >
        {copied ? "[COPIED!]" : "COPY_EMAIL"}
      </button>
    </div>
  );
}