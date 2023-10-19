import { Image, Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#cccccc" }} style={({ pressed }) => pressed && styles.buttonPressed}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            {duration && <Text style={styles.detailItem}>{duration} m</Text>}
            {complexity && <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>}
            {affordability && <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>}
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.25
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8
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
