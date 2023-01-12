import PageWrapper from "../../src/layouts/PageWrapper";
// import ManageOrders from "../../src/components/ManageOrders";
import ManageOrderTabs from '../../src/components/ManageOrderTabs'

const orders = [{
    id: '123', items: ['Item 1', 'Item 2', 'Item 3'],
    totalAmount: 100,
    orderDate: '2022-01-01',
    status: 'pending'
},
{
    id: '124',
    items: ['Item 4', 'Item 5'],
    totalAmount: 50,
    orderDate: '2022-01-02',
    status: 'fulfilled'
},
{
    id: '125',
    items: ['Item 6', 'Item 7', 'Item 8'],
    totalAmount: 75,
    orderDate: '2022-01-03',
    status: 'cancelled'
}
];

const Orders = () => {
    return(
        <PageWrapper>
            {/* <ManageOrders orders={orders} /> */}
            <ManageOrderTabs />
        </PageWrapper>
    )    
}

export default Orders;