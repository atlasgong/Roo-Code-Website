"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What is Roo Code?",
        answer: "Roo Code (formerly Roo Cline) is an AI-powered autonomous coding agent integrated directly into your code editor. It assists with tasks such as reading and writing files, executing terminal commands, automating browser actions, and integrating with various AI models.",
    },
    {
        question: "What's the difference between Roo Code and Cline?",
        answer: "some long answer here",
    },
    {
        question: "What features does Roo Code offer that Cline doesn't yet?",
        answer: "sajdhssadasjdsakj",
    },
    {
        question: "How does pricing work?",
        answer: "sajdhssadasjdsakj",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-section" className="border-t border-border py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-24 max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            ease: [0.21, 0.45, 0.27, 0.9],
                        }}
                    >
                        <h2 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">Frequently Asked Questions</h2>
                        <p className="mt-6 text-lg text-muted-foreground">Everything you need to know about RooCode and how it can transform your development workflow.</p>
                    </motion.div>
                </div>

                <div className="mx-auto max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.21, 0.45, 0.27, 0.9],
                                }}
                            >
                                <div className="group relative rounded-lg border border-border/50 bg-background/30 backdrop-blur-xl transition-all duration-300 hover:border-border">
                                    <button onClick={() => toggleFAQ(index)} className="flex w-full items-center justify-between p-6 text-left" aria-expanded={openIndex === index}>
                                        <h3 className="text-lg font-medium text-foreground/90">{faq.question}</h3>
                                        <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200", openIndex === index ? "rotate-180" : "")} />
                                    </button>
                                    <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === index ? "max-h-96 pb-6" : "max-h-0")}>
                                        <div className="px-6 text-muted-foreground">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
