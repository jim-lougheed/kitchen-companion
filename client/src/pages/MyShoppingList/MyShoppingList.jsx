import { useState } from "react";

import { Card, Timeline, Button, Input, Popover } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

import "./MyShoppingList.scss";

function MyShoppingList({
  shoppingList,
  addToShoppingList,
  deleteFromShoppingList,
}) {

  //Loaded states for input text and popover visibility
  const [inputItem, setInputItem] = useState(null);
  const [visible, setVisible] = useState(false);

  //Change state of input value
  const handleChange = (e) => {
    setInputItem(e.target.value);
    setVisible(false);
  };

  //Handle input value submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let itemText = e.target.shoppingItem.value;
    if (shoppingList.includes(itemText)) {
      alert(
        `Your shopping list already includes ${itemText}`
      );
    } else {
      if (itemText !== "") {
        addToShoppingList(e, itemText);
        setInputItem(null);
      } else {
        setInputItem("");
        setVisible(true);
      }
    }
  };

  return (
    <>
      <div className="shopping-list__container">
        <Card title="myShopping List">
          {shoppingList.map((item) => {
            return (
              <form onSubmit={(e) => deleteFromShoppingList(e, item)}>
                <Timeline>
                  <Timeline.Item className="shopping-list__item" name={item}>
                    <p className="shopping-list__item-text">{item}</p>
                    <Button htmlType="submit" shape="circle" size="small">
                      {<CloseOutlined />}
                    </Button>
                  </Timeline.Item>
                </Timeline>
              </form>
            );
          })}

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="shopping-list__add-form"
          >
            <Popover
              content='Please enter an item before clicking "+"'
              visible={visible}
            >
              <div className="shopping-list__add-input-container">
                <Input
                  className={`shopping-list__add-input${
                    inputItem === "" && `--empty`
                  }`}
                  type="text"
                  id="shoppingItem"
                  name="shoppingItem"
                  placeholder="Enter an item to your shopping list"
                  onChange={handleChange}
                  value={inputItem}
                ></Input>
              </div>
            </Popover>
            <Button
              htmlType="submit"
              shape="circle"
              size="small"
              className="shopping-list__add-button"
            >
              {<PlusOutlined />}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default MyShoppingList;