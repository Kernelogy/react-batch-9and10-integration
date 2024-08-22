const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            password: e.target.password.value
        }
        fetch("http://localhost:8080/user/insert", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((json)=>{
            console.log(json)
        })
        .catch((err)=>{
            console.log("Problem in creating User")
        })
    }
    return (
        <>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input name="username" type="text" placeholder="Username" /> <br />
                <input name="email" type="email" placeholder="mail@example.com" /> <br />
                <input name="contact" type="text" placeholder="9876543210" /> <br />
                <input name="password" type="password" placeholder="Password" /> <br />
                <input type="submit" value="Signup" />
            </form>
        </>
    )
}

export default Signup