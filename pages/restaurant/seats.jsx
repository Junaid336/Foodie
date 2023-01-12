import ManageSeats from "../../src/components/ManageSeats"
import PageWrapper from "../../src/layouts/PageWrapper";

const seats = [
    {
        id: 1,
        description: 'Seat in the front row',
        booked: true
    },
    {
        id: 2,
        description: 'Seat in the middle row',
        booked: false
    },
    {
        id: 3,
        description: 'Seat in the back row',
        booked: false
    }
];


const Seats = () => {
    return(
        <PageWrapper>
        <ManageSeats seats={seats} />
        </PageWrapper>
    );
}

export default Seats