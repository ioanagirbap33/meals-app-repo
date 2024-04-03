import { StyleSheet, StatusBar, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { CategoriesScreen } from "./screens/CategoriesScreen";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { FavoriteScreen } from "./screens/FavoriteScreen";
// import { FavoriteContextProvider } from "./store/context/favorite-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#181614",
        },
        drawerContentStyle: { backgroundColor: "#000000" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#564230",
        drawerActiveBackgroundColor: "#c3b1a0",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favotite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar styles="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#181614",
              },
            }}
          >
            {/* <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          /> */}
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
