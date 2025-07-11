import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Prompt Collection & Understanding",
    description:
      "Collects job title and job description from the user to deeply understand the role before generating content.",
    tags: ["Input", "LLM Prompt", "Job Context"],
    time: "Step 1",
  },
  {
    title: "LLM-Powered Generation",
    description:
      "Uses the Mixtral Large Language Model to craft personalized, high-quality cold emails that resonate with recruiters.",
    tags: ["LLM", "Mixtral", "Cold Email"],
    button: "Generate with AI",
    time: "Step 2",
  },
  {
    title: "Tone & Format Adaptability",
    subTitle: "Customizable Output",
    description:
      "Emails can be tailored to different tones (formal, friendly, bold) and structures (short, detailed, bullet-based).",
    details: ["Tone: Friendly", "Format: Concise", "CTA: Embedded"],
    time: "Step 3",
  },
  {
    title: "Live Preview & Editing",
    subTitle: "Realtime Editor",
    location: "Editor Component",
    connections: "Preview, Edit & Copy functionality available.",
  },
  {
    title: "📬 Instant Outreach Guidance",
    description:
      "Get suggestions for subject lines, LinkedIn outreach intros, and next follow-up strategy all in one dashboard.",
  },
];

const EverythingInOnePlace = () => {
  return (
    <div className="bg-transparent text-white py-16 overflow-hidden">
      <div className="mb-12 px-4 md:px-12 lg:px-20 max-w-6xl">

<motion.h1
  className="text-5xl font-bold mb-4 text-left"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  Your AI-Powered Cold Email Assistant
</motion.h1>

<motion.p
  className="text-gray-300 text-left"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }}
>
  Generate personalized, high-converting cold emails using job descriptions, role titles, and advanced LLM intelligence.
  Integrated with Mixtral API, this tool helps you craft smart, role-specific outreach with just a few clicks—
  complete with subject lines, tone control, and real-time editing.
</motion.p>
      </div>

      <div className="px-[8vw] -mx-[2vw]">
        <div className="flex justify-center gap-6">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="w-[320px] bg-[#111] p-6 rounded-xl border border-gray-700 shrink-0 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold mb-2">{card.title}</h2>

                {card.subTitle && (
                  <p className="text-cyan-400 text-sm mb-1">{card.subTitle}</p>
                )}

                <p className="text-gray-300 whitespace-pre-line text-sm mb-2">
                  {card.description}
                </p>

                {card.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 px-2 py-1 rounded text-xs whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {card.details && (
                  <div className="text-gray-400 text-xs space-y-1 mb-2">
                    {card.details.map((detail, i) => (
                      <div key={i}>{detail}</div>
                    ))}
                  </div>
                )}

                {card.location && (
                  <div className="text-purple-400 text-sm">{card.location}</div>
                )}
                {card.connections && (
                  <div className="text-gray-400 text-xs">
                    {card.connections}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mt-4 text-xs">
                {card.button && (
                  <button className="text-purple-300 border border-purple-500 px-3 py-1 rounded">
                    {card.button}
                  </button>
                )}
                {card.time && (
                  <span className="text-gray-400">{card.time}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EverythingInOnePlace;
