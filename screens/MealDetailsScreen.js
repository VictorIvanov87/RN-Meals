import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealOverview from "../components/MealOverview";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/favorites";

const MealDetailsScreen = ({ navigation, route }) => {
  const favoriteIdsRx = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id == route.params.id);

  const isMealFavorite = favoriteIdsRx && favoriteIdsRx.includes(route.params.id);

  const headerPressBtnHandler = () => {
    if (isMealFavorite) {
      dispatch(removeFavorite(route.params.id));
    } else {
      dispatch(addFavorite(route.params.id));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={isMealFavorite ? "star" : "staro"} color="white" onPress={headerPressBtnHandler} />;
      },
      title: selectedMeal.title
    });
  }, [navigation, headerPressBtnHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealOverview
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.overviewText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients: </Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps: </Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: "100%"
  },
  listContainer: {
    width: "80%"
  },
  listOuterContainer: {
    alignItems: "center"
  },
  overviewText: { color: "white" },
  rootContainer: {
    marginBottom: 32
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center"
  }
});

export default MealDetailsScreen;
