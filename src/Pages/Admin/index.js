
import React from "react";

const Admin = ()=>{
    const [state, setState] = React.useState({});


    const handleChangeState = (event)=> {
        const {name = "", value = ""} = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = async()=>{
        const responce = await fetch("http://localhost:4000/api/v1/save-item-data", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(state)
        })
        const data = await responce.json();
    }




    return(
        <main>
            <section>
                <form>
                    <div>
                        <h1>Create Recipe</h1>
                        <button className="submitBtn" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div>
                        <div>
                            <h4>Description of the product</h4>
                            <textarea className="description" required name="description" onChange={handleChangeState} rows="4" cols="70"></textarea>
                        </div>
                        <div>
                            <h4>Name of the product</h4>
                            <input name="productName" required onChange={handleChangeState} type="text"></input>
                        </div>
                            <div>
                   
                            <h4>Enter url of Dish Image</h4>
                            <input name="snapshort" onChange={handleChangeState} required type="text"></input>
                        </div>  
                        <div>
                            <h4>Enter product price</h4>
                            <input type="text" onChange={handleChangeState} required name="price"></input>
                        </div>   
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Admin;