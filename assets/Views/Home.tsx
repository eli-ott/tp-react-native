import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Title } from '../components/Title';
import { UserContext } from '../../App';
import { getPictures } from '../services/getPictures';

export function Home({ navigation }: { navigation: any }) {
	//@ts-ignore
	const { activePage } = useContext(UserContext);

	useEffect(() => {
		(async () => {
			console.log(await getPictures('curiosity'));
		})();
	}, []);

	useEffect(() => {
		navigation.navigate(activePage);
	}, [activePage]);

	return (
		<View>
			<Title content="Retrouver les 25 dernières photos de Curiosity" />
		</View>
	);
}
