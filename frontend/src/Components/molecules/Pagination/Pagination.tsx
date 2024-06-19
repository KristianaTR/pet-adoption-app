import { PaginationBtn, PaginationContainer } from "./Pagination.style";
import { PaginationProps } from "./Pagination.types";

const Pagination = ({
  petsPerPage,
  length,
  currentPage,
  handlePagination,
}: PaginationProps) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / petsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {paginationNumbers.map((pageNumber) => (
        <PaginationBtn
          key={pageNumber}
          text={pageNumber}
          className={pageNumber === currentPage ? 'active' : ''}
          onClick={() => handlePagination(pageNumber)}
        />
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
