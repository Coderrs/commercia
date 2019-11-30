import React from 'react'

const Agreements = ({agreements}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {agreements.map((agreement) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Type : {agreement._type}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">ID : {agreement._id}</h6>
                        <p class="card-text">Created : {agreement._created}</p>
                        <p class="card-text">Modified : {agreement._modified}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Agreements