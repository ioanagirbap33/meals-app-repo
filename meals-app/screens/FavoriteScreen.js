import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MealList } from "../components/MealList/MealList";
import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export const FavoriteScreen = () => {
  const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yes</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
