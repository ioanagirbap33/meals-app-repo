import { StyleSheet, StatusBar, View } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <StatusBar styles="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#24180f",
  },
});
