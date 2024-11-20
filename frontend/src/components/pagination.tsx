"use client";
import { FC } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  pageCount: number;
  className?: string;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({ direction, href, isDisabled }) => {
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
      <a
          href={href}
          className={`hover:bg-primary ${disabledClassName}`}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : 0}
      >
        <Button
            className="hover:bg-primary"
            disabled={isDisabled}
            variant="outline"
        >
          {isLeft ? "«" : "»"}
        </Button>
      </a>
  );
};

export function PaginationComponent({ pageCount, className }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Function to generate page numbers
  const pageNumbers = Array.from({length: pageCount}, (_, i) => i + 1);

  return (
      <Pagination className={cn(className)}>
        <PaginationContent>
          <PaginationItem>
            <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
            />
          </PaginationItem>
          {pageNumbers.map(number => (
              <PaginationItem key={number}>
                <a href={createPageURL(number)} className="p-2 hover:bg-light font-semibold text-primary">
                  {number}
                </a>
              </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationArrow
                direction="right"
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= pageCount}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
  );
}
