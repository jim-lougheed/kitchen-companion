import './IngredientsOnHand.scss';

function IngredientsOnHand({ toggleIngredientsOnHand, ingredients }) {

    return (
        <>
            <aside className='ingredients-checklist'>
                <h3 className='ingredients-checklist__title'>What's in the fridge...</h3>
                <form>
                <ul>
                    <label>Chicken
                        <input name='chicken' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.chicken} ></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Beef
                        <input name='beef' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.beef}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Pork
                        <input name='pork' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.pork}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Spinach
                        <input name='spinach' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.spinach}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Tomatoes
                        <input name='tomatoes' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.tomatoes}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Mushrooms
                        <input name='mushrooms' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.mushrooms}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Potatos
                        <input name='potatos' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.potatos}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Onions
                        <input name='onions' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.onions}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Garlic
                        <input name='garlic' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.garlic}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Green Peppers
                        <input name='greenpeppers'type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.greenpeppers}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Olives
                        <input name='olives' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.olives}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Cabbage
                        <input name='cabbage' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.cabbage}></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Lettuce
                        <input name='lettuce' type='checkbox' onChange={toggleIngredientsOnHand} checked={ingredients.lettuc}></input>
                        <span className="checkmark"></span>
                    </label>
                </ul>
                </form>
            </aside>
        </>
    )
}

export default IngredientsOnHand;