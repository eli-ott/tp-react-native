import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../../App';

export function Icons({ icon, active, iconSize = 24 }: { icon: 'home' | 'search'; active: boolean; iconSize?: number }) {
	//@ts-ignore
	const { setActivePage } = useContext(UserContext);

	const icons = {
		home: {
			uri: require('../Icons/home.png'),
			uriActive: require('../Icons/home-active.png')
		},
		search: {
			uri: require('../Icons/search.png'),
			uriActive: require('../Icons/search-active.png')
		}
	};

	return (
		<TouchableOpacity
			onPress={() => {
				setActivePage(icon);
			}}>
			<Image
				source={active ? icons[icon].uriActive : icons[icon].uri}
				style={{ width: iconSize }}
			/>
		</TouchableOpacity>
	);
}
