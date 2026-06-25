type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <nav className="rounded-2xl bg-white p-4 text-sm text-neutral-700">
      Page {currentPage} of {totalPages}
    </nav>
  );
}
