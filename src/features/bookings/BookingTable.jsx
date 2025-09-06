import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  // const bookings = [];
  const { bookings, isLoading, count } = useBookings();

  //this is the client side filtering but in bookings we using
  // servier side filtering that's why commenting this code her

  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resource="bookings" />;
  // Filter and by default set all
  // const filterValue = searchParams.get("status") || "all";

  // let filteredBookings;
  // if (filterValue === "all") filteredBookings = bookings;
  // if (filterValue === "checked-out")
  //   filteredBookings = bookings.filter((c) => c.status === "checked-out");
  // if (filterValue === "checked-in")
  //   filteredBookings = bookings.filter((c) => c.status === "checked-in");
  // if (filterValue === "unconfirmed")
  //   filteredBookings = bookings.filter((c) => c.status === "unconfirmed");

  // //Sort by
  // const sortBy = searchParams.get("sortBy") || "startDate-asc";
  // const [field, direction] = sortBy.split("-");
  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedBookings = filteredBookings.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          // render={(booking) => (
          //   <BookingRow key={booking.id} booking={booking} />
          // )}

          // data={filteredBookings}
          // data={sortedBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
