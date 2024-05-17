import React, { useEffect, useState } from 'react';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { DropDown } from '../components/DropDown';
import { FormButton } from '../components/FormButton';
import { getPictures } from '../services/getPictures';
import { RoverImages } from '../types/api';
import { RoverImage } from '../components/RoverImage';

export function Search() {
	const [rover, setRover] = useState<string | null>(null);
	const [typeRecherche, setTypeRecherche] = useState<string | null>(null);
	const [recherche, setRecherche] = useState<string | null>(null);

	const [images, setImages] = useState<RoverImages[] | null>(null);

	const formSubmit = async () => {
		if (!rover && !typeRecherche && !recherche && recherche !== '') {
			Alert.alert('Mauvaise recherche', 'Vous devez remplir tous les champs');
		}
		console.log(rover, recherche);
		setImages(await getPictures(rover!, recherche!));
	};

	return (
		<ScrollView contentContainerStyle={search.view}>
			<Title content="Rechercher des photos" />
			<DropDown
				value={rover!}
				items={['curiosity', 'spirit', 'opportunity']}
				selectChanged={setRover}
			/>
			<DropDown
				value={typeRecherche!}
				items={['camera', 'date']}
				selectChanged={setTypeRecherche}
			/>
			<Input
				textChanged={setRecherche}
				placeholder="Test"
			/>
			<FormButton
				formSubmitted={formSubmit}
				content="Rechercher"
				type="normal"
			/>
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

const search = StyleSheet.create({
	view: {
		display: 'flex',
		justifyContent: 'center',
		gap: 15
	}
});
