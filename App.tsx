import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Snackbar } from './assets/components/Snackbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const UserContext = React.createContext<{ activePage: string | null; setActivePage: React.Dispatch<React.SetStateAction<string | null>> } | null>(null);

export default function App() {
	const [activePage, setActivePage] = useState<string | null>('home');
	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<UserContext.Provider value={{ activePage, setActivePage }}>
					{/* <NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen name="home" />
						</Stack.Navigator>
					</NavigationContainer> */}
					<Snackbar />
				</UserContext.Provider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
