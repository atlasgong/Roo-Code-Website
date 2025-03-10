import { NavBar } from "@/components/chromes/nav-bar";
import { Footer } from "@/components/chromes/footer";
import { getGitHubStars, getVSCodeDownloads } from "@/lib/stats";
import { MDXContent } from "./mdx-content";

export const metadata = {
    title: "RooCode | Privacy Policy",
    description: "Learn how RooCode protects your privacy and handles your data.",
};

export default async function PrivacyPolicy() {
    const [stars, downloads] = await Promise.all([getGitHubStars(), getVSCodeDownloads()]);

    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <NavBar stars={stars} downloads={downloads} />
            <main className="flex-1">
                <div className="relative overflow-hidden py-16 sm:py-24">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.015] via-transparent to-purple-500/[0.015]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/[0.01] to-transparent" />
                    </div>
                    <div className="absolute left-1/2 top-0 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-blue-500/[0.015] blur-[200px]" />

                    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl">Privacy Policy</h1>
                            <p className="mt-6 text-center text-lg text-muted-foreground">Last updated: March 10, 2025</p>

                            <div className="mt-12 px-5">
                                <MDXContent />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
