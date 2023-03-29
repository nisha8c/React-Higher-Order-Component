
const User = (props) => {
    const user = props.data
    return(
        <section className={'single-user'}>
            <h2>{user.name}</h2>
            <div><strong>ID:</strong>{user.id}</div>
            <div><strong>Username:</strong>: {user.username}</div>
            <div><strong>Email:</strong> {user.email}</div>
        </section>
    );
}
export default User;