import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav aria-label="Breadcrumb" className="bg-light-alt py-3">
        <Container>
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {items.map((item, i) => (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-text-muted" />
                )}
                {i === items.length - 1 ? (
                  <span className="font-medium text-text-primary">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-text-secondary transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </nav>
    </>
  );
}
