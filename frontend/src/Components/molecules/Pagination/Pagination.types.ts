export interface PaginationProps {
    petsPerPage: number;
    length: number;
    currentPage: number;
    handlePagination: (pageNumber: number) => void;
}