"use client";
import { useState } from "react";
import Link from "next/link";

type FileKey = "about" | "education";

export default function AboutSection() {
  const [activeFile, setActiveFile] = useState<FileKey>("about");

  const files: Record<FileKey, React.ReactNode> = {
    about: (
      <span className="font-sans leading-relaxed">
        A practical developer who enjoys building real systems,
        thinks in terms of architecture, and focuses on solving real problems rather than just writing code.
      </span>
    ),

    education: (
      <div className="space-y-4 leading-relaxed">
        <div>
          <p className="font-semibold">
            Science & Mathematics Program
          </p>
          <p className="text-xs opacity-70">
            Angthong Pitthamaroj Witthayakhom School
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Computer Engineering Student
          </p>
          <p className="text-xs opacity-70">
            Rangsit University
          </p>
          <p className="text-xs">
            Expected Graduation: 2027
          </p>
          <p className="text-xs">
            GPA: 3.46 / 4.0
          </p>
        </div>
      </div>
    ),
  };

  return (
    <section className="text-sm mx-10 md:mx-20">
      {/* Tabs */}
      <div className="flex gap-2 mb-2 text-xs">
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
                  : "bg-transparent border-primary/40 text-gray-400 hover:-translate-y-1 hover:shadow-lg"
                }
              `}
            >
              {key}.txt
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-b-lg border border-primary bg-bg/90">
        <div className="whitespace-pre-wrap">
          {files[activeFile]}
          <span className="inline-block align-middle w-2 h-[1em] ml-0.5 bg-primary animate-blink" />
        </div>

      </div>

      <Link href="/about" className="inline-block mt-4 px-4 py-2">
        Read More →
      </Link>
    </section>
  );
}