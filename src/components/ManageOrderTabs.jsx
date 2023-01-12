import React, { useState } from 'react';
import ManageOrders from './ManageOrders';

const OrderTabs = () => {
    const [activeTab, setActiveTab] = useState('pending');
    const [orders, setOrders] = useState([
        {
            id: '123',
            items: ['Item 1', 'Item 2', 'Item 3'],
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
    ]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filteredOrders = orders.filter((order) => order.status === activeTab);

    return (
        <div>
            <div>
                <ul className='nav nav-tabs'>
                    <li
                     onClick={()=>{handleTabClick('pending')}} 
                     className={`nav-item ${activeTab === 'pending' ? 'active' : ''}`}
                    >
                        <a class="nav-link" href="#">pending</a>
                    </li>
                    <li
                     onClick={() => { handleTabClick('fulfilled') }} 
                     className={`nav-item ${activeTab === 'fulfilled' ? 'active' : ''}`}
                    >
                        <a class="nav-link" href="#" aria-current="page">fulfilled</a>
                    </li>
                    <li
                     onClick={() => { handleTabClick('cancelled') }} 
                     className={`nav-item ${activeTab === 'cancelled' ? 'active' : ''}`}
                    >
                        <a class="nav-link" href="#">cancelled</a>
                    </li>
                </ul>
            </div>
            <ManageOrders orders={filteredOrders} />
        </div>
    );
};

export default OrderTabs;
