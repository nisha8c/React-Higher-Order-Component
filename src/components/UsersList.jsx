import React, {useEffect, useState} from 'react';
import User from './User';

const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
            console.log('users: ', users);
        }
        fetchUsers();
    }, []);

    let filteredUsers = users.filter(({ name }) => {
        return name.indexOf(term) >= 0
    })

    return(
        <>
            <h2>Users List as below</h2>
            <section className={'users-container'}>
                <div className={'input-container'}>
                    <input type={'text'} value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
                {
                    filteredUsers.map(user => <User key={user.id} data={user}/>)
                }
            </section>
        </>
    );
};
export default UsersList;