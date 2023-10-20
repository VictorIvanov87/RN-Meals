import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import MealOverview from "../components/MealOverview";

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealOverview duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.25
  },
  image: {
    height: 200,
    width: "100%"
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  mealItem: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    margin: 16,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center"
  }
});

export default MealItem;
