import { useHistory } from "react-router-dom";

import { Card, Radio, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./SearchMyRecipes.scss";

function SearchMyRecipes() {
  let history = useHistory();

  //Search all myRecipes based on url params
  const searchAllRecipes = (e) => {
    e.preventDefault();
    history.push(
      `/myrecipes/${e.target.myRecipesSearch.value}+${
        e.target.selection.value ? e.target.selection.value : "empty"
      }`
    );
  };

  return (
    <>
      <h1 className="recipe-list__header">Search My Recipes</h1>
      <Card className="search__container">
        <form onSubmit={searchAllRecipes} className="search__single-container">
          <p className="search__search-label">Search by dietary restriction</p>
          <Radio.Group buttonStyle="solid" name="selection">
            <Radio.Button value="veget">Vegetarian</Radio.Button>
            <Radio.Button value="vegan">Vegan</Radio.Button>
            <Radio.Button value="daiFr">Dairy-Free</Radio.Button>
            <Radio.Button value="gluFr">Gluten-Free</Radio.Button>
          </Radio.Group>
          <p className="search__label">Search by keyword</p>
          <Input
            type="text"
            name="myRecipesSearch"
            placeholder="Enter a keyword"
            className="search__small-input"
          />
          <Button
            htmlType="submit"
            shape="round"
            className="search__search-button"
          >
            {<SearchOutlined />} Search
          </Button>
        </form>
      </Card>
    </>
  );
}

export default SearchMyRecipes;