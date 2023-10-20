import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  const renderMeal = (itemData) => {
    const mealProps = {
      id: itemData.item.id,
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
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMeal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default MealsList;
