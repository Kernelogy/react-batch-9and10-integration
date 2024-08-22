import { useState } from "react"
import { useEffect } from "react"

const UserList = () => {
    const [users, setUsers] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:8080/user/list")
        .then(res => res.json())
        .then((json)=>{
            setUsers(json)
        })
    },[])
    const deleteUser = (id) => {
        fetch("http://localhost:8080/user/delete/" + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((json)=>{
            if(json.deletedCount == 1){
                alert("User Deleted Successfully")
            }else{
                alert("Deleting User Failed")
            }
            window.location.reload()
        })
    }
    return (
        <>
             {
                users &&
                <table border="1px">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Password</th>
                    </tr>
                    {
                        users.map((e)=>{
                            return <tr>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>{e.contact}</td>
                                <td>{e.password}</td>
                                <td><input type="button" value="Delete" onClick={(evt)=>{deleteUser(e._id)}} /></td>
                            </tr>
                        })
                    }
                </table>
             }       
        </>
    ) 
}

export default UserList