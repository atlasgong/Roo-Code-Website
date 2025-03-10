"use client";

import PrivacyContent from "./privacy-policy.mdx";

export function MDXContent() {
    return (
        <div className="prose prose-invert max-w-none">
            <PrivacyContent />
        </div>
    );
}
