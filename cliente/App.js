import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/HomeScreen';
import Agenda from './src/pages/Agenda';
import Anotacoes from './src/pages/anotacoes';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
      >
      <Tab.Screen name="agenda" component={Agenda} 
        options={{ headerShown: false ,
          tabBarIcon: ({color,size}) =>(
            <Ionicons name="alarm-outline" size={size} color={color} />
          ),
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ headerShown: false ,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Anotações" component={Anotacoes} 
        options={{ headerShown: false ,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notes" color={color} size={size} />
          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}