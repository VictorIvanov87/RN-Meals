import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMeals = MEALS;

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  text: { color: "white", fontSize: 18, fontWeight: "bold" }
});

export default FavoritesScreen;
