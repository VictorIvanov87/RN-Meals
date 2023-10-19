import { View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(id));

  const renderMeal = (itemData) => {
    const mealProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration
    };
    return <MealItem {...mealProps} />;
  };

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

export default MealsOverview;
