import React from 'react';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { View } from 'react-native';

export function Search() {
	const textChanged = (param: any) => {
		console.log(param);
	};
	return (
		<View>
			<Title content="Rechercher des photos" />
			<Input
				textChanged={textChanged}
				placeholder="Test"
			/>
		</View>
	);
}
