import { StyleSheet, TextInput } from 'react-native';
import { input } from '../style/Input';

export function Input({ textChanged, placeholder }: { textChanged: any; placeholder: string }) {
	return (
		<TextInput
			placeholderTextColor={'#ffffff50'}
			style={[input.input, inputStyle.input]}
			onChangeText={textChanged}
			placeholder={placeholder}
		/>
	);
}

const inputStyle = StyleSheet.create({
	input: {
		paddingVertical: 15
	}
});
