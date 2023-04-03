import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CreateNotePad } from "./src/screens/CreateNotePad";
import { EditNotePad } from "./src/screens/EditNotePad";
import { Home } from "./src/screens/Home";
import screens from "./src/screens/screens.json";
import { ViewNotePad } from "./src/screens/ViewNotePad";
import { FontAwesome, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {
  AppStateContext,
  initialAppStateContext,
} from "./src/components/AppStateContext";
import React, { useEffect, useState } from "react";
import { NotePadList } from "./src/screens/NotePadList";
import { Loader } from "./src/components/Loader";
import { api } from "./src/api";

export default function App() {
  const Drawer = createDrawerNavigator();

  const [appState, updateAppState] = useState(initialAppStateContext);

  useEffect(() => {
    const apiRequest = api.interceptors.request.use((param) => {
      updateAppState({
        isLoading: true,
      });
      return param;
    });

    const apiResponse = api.interceptors.response.use((param) => {
      updateAppState({
        isLoading: false,
      });
      return param;
    });

    return () => {
      api.interceptors.request.eject(apiRequest);
      api.interceptors.response.eject(apiResponse);
    };
  }, []);

  return (
    <AppStateContext.Provider value={appState}>
      <NavigationContainer>
        <Loader isLoading={appState.isLoading} />
        <Drawer.Navigator initialRouteName={screens.home}>
          <Drawer.Screen
            name={screens.home}
            component={Home}
            options={{
              drawerIcon: ({ color, size }) => {
                return <FontAwesome name="home" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.createNotePad}
            component={CreateNotePad}
            options={{
              drawerIcon: ({ color, size }) => {
                return <Ionicons name="create" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.viewNotePad}
            component={ViewNotePad}
            options={{
              drawerIcon: ({ color, size }) => {
                return (
                  <FontAwesome name="sticky-note" size={size} color={color} />
                );
              },
            }}
          />
          <Drawer.Screen
            name={screens.editNotePad}
            component={EditNotePad}
            options={{
              drawerItemStyle: {
                display: "none",
              },
              drawerIcon: ({ color, size }) => {
                return <AntDesign name="edit" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name={screens.notePadList}
            component={NotePadList}
            options={{
              drawerIcon: ({ color, size }) => {
                return <Feather name="list" size={size} color={color} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppStateContext.Provider>
  );
}
