import type { ReactNode } from "react";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import type { HeaderMode, SearchSummary } from "@/types";

type AppLayoutProps = {
  children: ReactNode;
  headerMode: HeaderMode;
  searchSummary?: SearchSummary;
};

export function AppLayout({ children, headerMode, searchSummary }: AppLayoutProps) {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <Header mode={headerMode} searchSummary={searchSummary} />
      <main className="mx-auto flex w-full max-w-[1260px] flex-1 flex-col px-4 py-6 sm:px-6 lg:px-10">{children}</main>
      <Footer />
    </div>
  );
}
