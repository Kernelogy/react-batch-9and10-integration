import { useState } from "react"

const Signin = () => {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [contact, setContact] = useState(null)
    const [password, setPassword] = useState(null)

    const createAccount = () => {
        console.log(username, email, contact, password)
        const user = {
            username: username,
            email: email,
            contact: contact,
            password: password
        }
        console.log(user)
        fetch("http://localhost:8080/user/insert",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    return (
        <>
            <form>
                <h1>Signin Here...</h1>
                <input type="text" placeholder="Username" 
                onInput={(e)=>{setUsername(e.target.value)}}/> <br />
                <input type="email" placeholder="email@example.com" 
                onInput={(e)=>{setEmail(e.target.value)}}/> <br />
                <input type="text" placeholder="987654321" 
                onInput={(e)=>{setContact(e.target.value)}}/> <br />
                <input type="password" placeholder="Password" 
                onInput={(e)=>{setPassword(e.target.value)}}/> <br />
                <input type="button" value="Submit" 
                onClick={(e)=>{createAccount()}}/>
            </form> 
        </>
    )
}

export default Signin 