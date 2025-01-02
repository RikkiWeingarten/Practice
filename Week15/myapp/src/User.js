const User = (props) => {
    console.log(props);
    const { name, username, email, id } = props.info;
    return (
        <>
        <img src={`https://robohash.org/${id}`}/>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <p>{email}</p>
        </>
    )
}


export default User