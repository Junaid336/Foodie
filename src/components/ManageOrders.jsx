import React, { useState } from 'react';

const ManageOrders = (props) => {
    const { orders } = props;
    const [updatedOrders, setUpdatedOrders] = useState(orders);

    const handleStatusChange = (event, orderId) => {
        const newStatus = event.target.value;
        const updatedOrderList = updatedOrders.map((order) => {
            if (order.id === orderId) {
                return { ...order, status: newStatus };
            }
            return order;
        });
        setUpdatedOrders(updatedOrderList);
    };

    return (
        <table className="table" style={{ 
            minHeight: '75vh',
            background: 'url(/images/manageOrdersBackground.jpg)',
            color: 'white',
            fontWeight: 'bold'
        }}
        >
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Items</th>
                    <th>Total Amount</th>
                    <th>Order Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {updatedOrders.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.items.join(', ')}</td>
                        <td>${order.totalAmount}</td>
                        <td>{order.orderDate}</td>
                        <td>
                            <select className="btn btn-secondary" value={order.status} onChange={(event) => handleStatusChange(event, order.id)}>
                                <option value="pending">Pending</option>
                                <option value="fulfilled">Fulfilled</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ManageOrders;
