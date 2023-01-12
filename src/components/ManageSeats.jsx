import React from 'react';

const ManageSeats = (props) => {
    const { seats } = props;

    return (
        <div style={{minHeight: '75vh'}}>
            <h1 className="display-4">Manage Seats</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Booked</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map((seat) => (
                        <tr key={seat.id}>
                            <td>{seat.id}</td>
                            <td>{seat.description}</td>
                            <td>{seat.booked ? 'True' : 'False'}</td>
                            <td>
                                <button className="btn btn-secondary">Edit</button>
                                <button className="btn btn-secondary">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageSeats;
