import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Title } from '../components/Title';
import { UserContext } from '../../App';
import { getPictures } from '../services/getPictures';
import { RoverImages } from '../types/api';
import { RoverImage } from '../components/RoverImage';

export function Home({ navigation }: { navigation: any }) {
	const [images, setImages] = useState<RoverImages[] | null>(null);
	//@ts-ignore
	const { activePage } = useContext(UserContext);

	useEffect(() => {
		(async () => {
			setImages(await getPictures('curiosity'));
		})();
	}, []);

	useEffect(() => {
		navigation.navigate(activePage);
	}, [activePage]);

	return (
		<ScrollView style={home.scrollContainer}>
			<Title content="Retrouver les 25 dernières photos de Curiosity" />
			{images?.map(image => (
				<RoverImage
					key={image.id}
					source={image.img_src}
					rover={image.rover.name}
					datePriseVue={image.earth_date}
				/>
			))}
		</ScrollView>
	);
}

const home = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		display: 'flex',
		gap: 25
	}
});
