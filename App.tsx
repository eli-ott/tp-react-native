import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Snackbar } from './assets/components/Snackbar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//@ts-ignore
import JuraVariable from './assets/fonts/JuraVariable.ttf';
import { useFonts } from 'expo-font';
import { Home } from './assets/Views/Home';
import { Search } from './assets/Views/Search';

export const UserContext = React.createContext<{ activePage: string | null; setActivePage: React.Dispatch<React.SetStateAction<string | null>> } | null>(null);

export default function App() {
	const [activePage, setActivePage] = useState<string | null>('home');
  
	const Stack = createNativeStackNavigator();
	const [fontLoaded] = useFonts({
		Jura: JuraVariable
	});

	return (
		<SafeAreaProvider style={{ backgroundColor: '#3D3431' }}>
			<SafeAreaView style={styles.container}>
				{fontLoaded ? (
					<UserContext.Provider value={{ activePage, setActivePage }}>
						<NavigationContainer>
							<Stack.Navigator initialRouteName="home">
								<Stack.Screen
									name="home"
									component={Home}
									options={{
										contentStyle: {
											backgroundColor: '#3D3431',
											padding: 15
										},
										headerShown: false
									}}
								/>
								<Stack.Screen
									name="search"
									component={Search}
									options={{
										contentStyle: {
											backgroundColor: '#3D3431',
											padding: 15
										},
										headerShown: false
									}}
								/>
							</Stack.Navigator>
						</NavigationContainer>
						<Snackbar />
					</UserContext.Provider>
				) : (
					<Text>Loading...</Text>
				)}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3D3431'
	}
});
