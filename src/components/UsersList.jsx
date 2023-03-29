import User from './User';

const UsersList = (props) => {

    return(
        <>
            <h2>Users List as below</h2>
            <section className={'users-container'}>
                {
                    props?.user?.map(user => <User key={user.id} data={user}/>)
                }
            </section>
        </>
    );
};
export default UsersList;