function MyShoppingList({shoppingList, addToShoppingList}) {
    
    return(
        <>
            <h1>My Shopping List</h1>
            {shoppingList.map((item) => {
                return <p>{item}</p>
            })}
            <form onSubmit={(e) => addToShoppingList(e, e.target[0].value)}>
            <label>
                <input type='text' id='shoppingItem' name='shoppingItem' placeholder='Enter an item to your shopping list'></input>
            </label>
            <button type='submit'>+</button>
            </form>
        </>
    )
}

export default MyShoppingList;