"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RxSun ,  RxMoon } from "react-icons/rx";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" disabled className="h-9 w-9">
                <RxSun className="h-4 w-4" />
            </Button>
        );
    }

    return (
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="h-9 w-9" aria-label="Toggle theme">
            {theme === "dark" ? <RxSun className="h-4 w-4 transition-all" /> : <RxMoon className="h-4 w-4 transition-all" />}
        </Button>
    );
}
