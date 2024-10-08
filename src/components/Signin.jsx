const Signin = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch("http://localhost:8080/user/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((json)=>{
            if(json){
                alert("Login Success...!")
            }else{
                alert("Login Failed")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <h1>Login Here...!</h1>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input name="username" type="text" placeholder="Username"/> <br />
                <input name="password" type="password" placeholder="Password" /> <br />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Signin