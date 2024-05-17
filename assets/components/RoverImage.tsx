import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function RoverImage({ source, rover, datePriseVue }: { source: string; rover: string; datePriseVue: string }) {
	return (
		<View style={image.mainContainer}>
			<ImageBackground
				style={image.imageBg}
				source={{ uri: source }}
				resizeMode="cover">
				<LinearGradient
					colors={['#0808080D', '#08080866', '#080808BF', '#080808D9']}
					style={image.textContainer}>
					<Text style={[image.text, image.roverName]}>{rover}</Text>
					<Text style={[image.text]}>{datePriseVue}</Text>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
}

const image = StyleSheet.create({
	mainContainer: {
		borderRadius: 25,
		overflow: 'hidden',
        marginVertical: 15
	},
	imageBg: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		height: 200,
		width: '100%'
	},
	textContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		width: '100%',
		height: '50%',
		padding: 25
	},
	text: {
		color: '#fff',
		fontFamily: 'Jura'
	},
	roverName: {
		fontSize: 24
	}
});
