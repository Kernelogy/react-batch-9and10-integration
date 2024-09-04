const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.image.files[0])
        const formData = new FormData()
        formData.append("name", e.target.name.value)
        formData.append("desc", e.target.desc.value)
        formData.append("price", e.target.price.value)
        formData.append("image", e.target.image.files[0])

        fetch("http://localhost:8080/product/insert", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(((json)=>{
            console.log(json)
        }))
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" name="name" placeholder="Product Name" /> <br />
                <input type="text" name="desc" placeholder="Product Desc" /> <br />
                <input type="text" name="price" placeholder="Product Price" /> <br />
                Image : <input type="file" name="image" /> <br />
                <input type="submit" value="Add Product" />
            </form>
        </>
    )
}

export default AddProduct