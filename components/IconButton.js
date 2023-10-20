import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : null)}>
      <AntDesign name={icon} color={color} size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  }
});

export default IconButton;
