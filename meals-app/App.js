import { StyleSheet, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CategoriesScreen } from "./screens/CategoriesScreen";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <View style={styles.wrapper}> */}
      <StatusBar styles="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#24180f",
  },
});
