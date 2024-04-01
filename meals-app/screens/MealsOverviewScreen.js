import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text style={styles.container}>Meals overview screen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
