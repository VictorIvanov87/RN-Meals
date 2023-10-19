import { View, Text, Pressable, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: "#cccccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.25
  },
  gridItem: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    height: 150,
    margin: 16,
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8
  },
  innerContainer: {
    alignItems: "center",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default CategoryGridTile;
