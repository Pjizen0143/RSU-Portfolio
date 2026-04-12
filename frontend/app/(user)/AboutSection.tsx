"use client";
import { useState } from "react";

type FileKey = "about" | "education";

export default function AboutSection() {
  const [activeFile, setActiveFile] = useState<FileKey>("about");

  const files: Record<FileKey, string> = {
    about: `lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum dignissimos error quis! Quam explicabo alias voluptates, tempora nemo ipsam rerum corrupti, voluptas veritatis consectetur ut. Voluptates ea beatae saepe!`,
    education: `Computer Engineering Student - Rangsit University\nExpected Graduation: 2027\nGPA: 3.46/4.0`,
  };

  return (
    <section className="text-sm font-bold mx-20">
      <div className="flex gap-2 mb-2 font-mono text-xs">
        {(Object.keys(files) as FileKey[]).map((key) => {
          const isActive = activeFile === key;

          return (
            <button
              key={key}
              onClick={() => setActiveFile(key)}
              className={`
          px-3 py-1 rounded-t-lg border transition-all duration-200 cursor-pointer

          ${isActive
                  ? "bg-bg border-primary border-b-transparent translate-y-0.5 shadow-md"
                  : "bg-transparent border-primary/40 text-gray-400  hover:-translate-y-1 hover:shadow-lg"
                }
        `}
            >
              {key}.txt
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-b-lg font-mono border border-primary bg-bg/90 whitespace-pre-wrap">
        {files[activeFile]}
        <span className="inline-block align-middle w-2 h-[1em] ml-0.5 bg-primary animate-[blink_1s_step-end_infinite]" />
      </div>

      <a href="/about" className="inline-block mt-4 px-4 py-2">
        Read More →
      </a>
    </section>
  );
}