import { View, Text } from "react-native";

export const MealDetailsScreen = ({ route }) => {
  const catId = route.params.mealId;

  return (
    <View>
      <Text style={{ color: "white" }}>Meal details: {catId}</Text>
    </View>
  );
};
