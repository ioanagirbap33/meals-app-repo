import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const IconButton = ({ onPress, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
