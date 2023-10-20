import { View, Text, StyleSheet } from "react-native";

const MealOverview = ({ duration, complexity, affordability, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      {duration && <Text style={[styles.detailItem, textStyle]}>{duration} m</Text>}
      {complexity && <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>}
      {affordability && <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8
  }
});

export default MealOverview;
