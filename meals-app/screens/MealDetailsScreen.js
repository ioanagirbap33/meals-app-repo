import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { IconButton } from "../components/IconButton";
// import { FavoriteContext } from "../store/context/favorite-context";
import { addFavorite, deleteFavorite } from "../store/redux/favorites";

export const MealDetailsScreen = ({ route, navigation }) => {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealCtx.deleteFavorite(mealId);
      dispatch(deleteFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.listContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listContainer}>
        <View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text style={styles.listItem} key={ingredient}>
              {ingredient}
            </Text>
          ))}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>

          {selectedMeal.steps.map((step) => (
            <Text style={styles.listItem} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#c0a28c",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    margin: 6,
    borderBottomColor: "#c0a28c",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },

  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#c0a28c",
    borderRadius: 6,
  },
  listContainer: {
    marginBottom: 32,
  },
});
