import './IngredientsOnHand.scss';

function IngredientsOnHand() {
    return (
        <>
            <aside className='ingredients-checklist'>
                <h3 className='ingredients-checklist__title'>What's in the fridge...</h3>
                <ul>
                    <label>Chicken
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Beef
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Pork
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Spinach
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Tomatoes
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Mushrooms
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Potatos
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Onions
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Garlic
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                    <label>Peppers
                        <input type='checkbox'></input>
                        <span className="checkmark"></span>
                    </label>
                </ul>
            </aside>
        </>
    )
}

export default IngredientsOnHand;