import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(id));

  const renderMeal = (itemData) => {
    const mealProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration
    };

    return <MealItem {...mealProps} onPress={() => navigation.navigate("MealDetails", { id: itemData.item.id })} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === id).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, id]);

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default MealsOverviewScreen;
