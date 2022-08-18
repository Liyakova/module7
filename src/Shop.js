import React, { useState } from "react";

function Shop() {

    const [shopListAdd, setShopListAdd] = useState("");
    const [myList, setMyList] = useState([]);

    const AddButton = () => {
        if (shopListAdd === "") {
            alert("Please, enter the text!")
        } else {
            let listArray = myList;
            listArray.push(shopListAdd);
            setMyList(listArray);
            setShopListAdd("");
        }
    }

    const DeleteButton = () => {
        setMyList([]);
    }

    const CrossedWord = (e) => {
        const li = e.target;
        li.classList.toggle("crossed");
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form className="groseryList" onSubmit={onFormSubmit}>
                <h2>Grocery list</h2>
                <div>
                    <input  placeholder="What do you want to buy?" type="text" 
                            onChange={(e) => setShopListAdd(e.target.value)}
                            value={shopListAdd} className="inputAdd"/>
                    <button onClick={() => AddButton(setShopListAdd)} className="addButton">Add</button>
                </div>
                <ul>
                    {myList.map((item, index) => (
                        <li key={index} onClick={CrossedWord}>✔ {item}</li>
                    ))}
                </ul>
                <button onClick={DeleteButton} className="deleteButton">Delete all</button>
            </form>
        </div>
    )
}

export default Shop;