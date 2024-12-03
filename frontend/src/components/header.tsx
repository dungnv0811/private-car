import type { NavLink } from "@/types";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

interface HeaderProps {
    data: {
        logoText: string;
        logo: string;
        navItems: NavLink[];
        cta: NavLink;
    };
}

export function Header({ data }: Readonly<HeaderProps>) {
    if (!data) return null;
    const { logoText, navItems, cta, logo } = data;
    return (
        <header className="container flex items-center justify-between gap-10 py-4 border-b border-gray-300 bg-white shadow-sm">
            <Link href="/" className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <span className="font-heading text-xl font-bold">{logoText}</span>
            </Link>
            <div className="flex items-center gap-10">
                <nav className="hidden items-center gap-10 md:flex justify-end">
                    {navItems &&
                        navItems.map((item) => (
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
            <MobileNavbar>
                <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
                    <nav className="flex flex-col gap-1 pt-2">
                        {navItems &&
                            navItems.map((item) => (
                                <Link
                                    key={item.text}
                                    href={item.href}
                                    className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
                                >
                                    {item.text}
                                </Link>
                            ))}

                        {cta && (
                            <Button asChild size="lg" className="mt-2 w-full">
                                <Link
                                    href={cta.href}
                                    className="cursor-pointer"
                                    target={cta.isExternal ? "_blank" : "_self"}
                                >
                                    {cta.text}
                                </Link>
                            </Button>
                        )}
                    </nav>
                </div>
            </MobileNavbar>
        </header>
    );
}
