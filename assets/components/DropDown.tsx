import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { input } from '../style/Input';

export function DropDown({ selectChanged, items, value }: { selectChanged: any; items: string[]; value: string }) {
	return (
		<View style={input.input}>
			<Picker
				style={input.input}
				onValueChange={val => {
					selectChanged(val);
				}}
				selectedValue={value}>
				{items.map((item, index) => (
					<Picker.Item
						key={index}
						label={item.charAt(0).toUpperCase() + item.slice(1)}
						value={item}
					/>
				))}
			</Picker>
		</View>
	);
}
