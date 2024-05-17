import { UserContext } from '../../App';
import { StyleSheet, View } from 'react-native';
import { Icons } from './Icons';
import { useContext } from 'react';

export function Snackbar() {
	// @ts-ignore
	const { activePage } = useContext(UserContext);

	return (
		<View style={styles.snackbar}>
			<Icons
				iconSize={34}
				icon="home"
				active={activePage === 'home'}
			/>
			<Icons
				iconSize={34}
				icon="search"
				active={activePage === 'search'}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	snackbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '100%',
		height: 75,
		backgroundColor: '#080808'
	}
});
