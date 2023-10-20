import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((d) => (
    <View key={d} style={styles.listItem}>
      <Text style={styles.itemText}>{d}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  itemText: {
    color: "#351401",
    textAlign: "center"
  },
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4
  }
});

export default List;
