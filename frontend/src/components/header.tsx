import type { NavLink } from "@/types";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

interface HeaderProps {
  data: {
    logoText: string;
    navItems: NavLink[];
    cta: NavLink;
  };
}

export function Header({ data }: Readonly<HeaderProps>) {
    if (!data) return null;
    const { logoText, navItems, cta, logo } = data;
    return (
        <header className="container flex items-center justify-between gap-10 py-6 border-b border-gray-300 bg-white shadow-sm">
            <Link href="/" className="flex items-center gap-3">
                <svg viewBox="0 0 238 238" fill="none" className="size-6 text-primary" aria-hidden="true">
                    {/* SVG path data omitted for brevity */}
                </svg>
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <span className="font-heading text-xl font-bold">{logoText}</span>
            </Link>
            <div className="flex items-center gap-10">
                <nav className="hidden items-center gap-10 md:flex justify-end">
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
                            key={item.text}
                            target={item.isExternal ? "_blank" : "_self"}
                        >
                            {item.text}
                        </Link>
                    ))}
                </nav>
                {cta && (
                    <div className="hidden items-center gap-2 md:flex">
                        <Button asChild>
                            <Link
                                href={cta.href}
                                className="cursor-pointer"
                                target={cta.isExternal ? "_blank" : "_self"}
                            >
                                {cta.text}
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
            <MobileNavbar />
        </header>
    );
}
