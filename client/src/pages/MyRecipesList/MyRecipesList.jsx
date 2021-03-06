import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ListedRecipe from "../../components/ListedRecipe";

import { Button, Space, Spin, Modal } from "antd";
import {
  SearchOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import "./MyRecipesList.scss";

const { confirm } = Modal;

function MyRecipesList() {
  
  //Loaded recipes state
  const [myRecipes, setMyRecipes] = useState(null);
  
  //Display delete confirmation modal
  const showConfirm = (id) => {
    confirm({
      title: "Delete recipe",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this recipe?",
      onOk() {
        deleteRecipe(id);
      },
    });
  };

  useEffect(() => {
    
    //Retrieve myRecipes and set to state
    axios
      .get(`/myrecipes`)
      .then(({ data }) => {
        setMyRecipes(data);
      })
      .catch((err) => console.error(err));
  }, []);
    
  //Delete myRecipe
  const deleteRecipe = (id) => {
    axios
      .delete(`/myrecipes/${id}`)
      .then(({ data }) => {
        console.log(`Deleted recipe: ${data}`);
      })
      .catch((err) => console.error(err));
    deleteFromState(id);
  };

  //Remove deleted recipe from state
  const deleteFromState = (id) => {
    setMyRecipes(
      myRecipes.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  };

  return (
    <>
      <h1 className="recipe-list__header">myRecipes</h1>
      <Link to="/myrecipes/search">
        <Button
          htmlType="submit"
          shape="round"
          className="recipe-list__search-button"
        >
          {<SearchOutlined />} Search myRecipes
        </Button>
      </Link>
      {myRecipes ? (
        <ul className="recipe-list__container">
          {myRecipes.map((recipe) => {
            return (
              <div key={recipe.id} className="recipe-list__item">
                <ListedRecipe recipe={recipe} />
                <Button
                  htmlType="submit"
                  shape="circle"
                  size="small"
                  onClick={() => showConfirm(recipe.id)}
                  className="recipe-list__delete"
                >
                  {<CloseOutlined />}
                </Button>
              </div>
            );
          })}
        </ul>
      ) : (
        <Space size="large">
          <Spin size="large" tip="Loading..." className="loading-message" />
        </Space>
      )}
    </>
  );
}

export default MyRecipesList;