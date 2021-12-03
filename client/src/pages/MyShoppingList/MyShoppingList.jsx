import { useState } from 'react';

import { Card, Timeline, Button, Input, Popover } from 'antd';
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import './MyShoppingList.scss';

function MyShoppingList({ shoppingList, addToShoppingList, deleteFromShoppingList }) {
    
    const [inputItem, setInputItem] = useState('');

    const handleChange = (e) => {
        setInputItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.shoppingItem.value) {
            addToShoppingList(e, e.target.shoppingItem.value)
        } else {
return
        }
        
    }

    return(
        <>
            <div className='shopping-list__container'>
            <Card title='My Shopping List'>
            {shoppingList.map((item) => {
                return (
                    <form onSubmit={(e) => deleteFromShoppingList(e, item)}>
                    <Timeline>
                        <Timeline.Item className='shopping-list__item' name={item}>
                            <p className='shopping-list__item-text'>{item}</p>
                            <Button htmlType='submit' shape='circle' size='small'>
                            {<CloseOutlined/>}
                          </Button>
                        </Timeline.Item>
                    </Timeline>
                    </form>
                )
            })}     
                   
            <form onSubmit={(e) => handleSubmit(e)} className='shopping-list__add-form'>
            <Popover content='Please enter an item before clicking "+"'></Popover>
            <div className='shopping-list__add-input-container'>
            <Input className='shopping-list__add-input' type='text' id='shoppingItem' name='shoppingItem' placeholder='Enter an item to your shopping list' onChange={handleChange}></Input>
            </div>
            <Button htmlType='submit' shape='circle' size='small' className='shopping-list__add-button'>{<PlusOutlined/>}</Button>
            </form>
            </Card>
            </div>
        </>
    )
}

export default MyShoppingList;