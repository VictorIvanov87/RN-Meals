import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(id));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === id).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, id]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
