import React, { useState } from 'react';

function TestPage() {
    const [users, setUsers] = useState([]);

    const handleAddUser = () => {
        // show form to add user
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, surname } = event.target.elements;
        setUsers([...users, { name: name.value, surname: surname.value }]);
        // hide form
    };

    return (
        <div>
            <h1>Test Page</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} {user.surname}
                    </li>
                ))}
            </ul>
            <button onClick={handleAddUser}>Add User</button>
            {/* Form to add user */}
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" name="surname" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TestPage;
