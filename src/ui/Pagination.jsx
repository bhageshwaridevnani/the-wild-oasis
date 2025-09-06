import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  // React Router hook: lets us read & update the ?page= query param in the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // 1️⃣ Figure out the current page number
  // If there is no ?page param → default to page 1
  // If there is one → convert it to a number
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // 2️⃣ Calculate total number of pages
  // Example: 28 bookings / 10 per page = 2.8 → round UP → 3 pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // 3️⃣ Function to go to the next page
  function nextPage() {
    // If we’re on the last page, stay there; otherwise add 1 to current page
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    // Update the page param in the URL
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  // 4️⃣ Function to go to the previous page
  function previousPage() {
    // If we’re on the first page, stay there; otherwise subtract 1
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    // Update the page param in the URL
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  // 5️⃣ If there’s only 1 page or less, don’t render the pagination UI
  if (pageCount <= 1) return null;

  // 6️⃣ Render pagination UI
  return (
    <StyledPagination>
      {/* Pagination info text */}
      <p>
        {/* Starting item number */}
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        {/* Ending item number:
            - If last page → show total count
            - Otherwise → currentPage * PAGE_SIZE */}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        {/* Total number of results */}
        of <span>{count}</span> results
      </p>

      {/* Buttons for navigation */}
      <Buttons>
        {/* Previous button */}
        <PaginationButton
          onClick={previousPage}
          disabled={currentPage === 1} // Disable if already on first page
        >
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        {/* Next button */}
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount} // Disable if already on last page
        >
          <HiChevronRight /> <span>Next</span>
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
