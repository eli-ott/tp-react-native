import { StyleSheet, TextInput } from 'react-native';

export function Input({ textChanged, placeholder }: { textChanged: any; placeholder: string }) {
	return (
		<TextInput
			placeholderTextColor={'#ffffff50'}
			style={input.textInput}
			onChangeText={textChanged}
			placeholder={placeholder}
		/>
	);
}

const input = StyleSheet.create({
	textInput: {
		width: '100%',
		borderWidth: 2,
		borderColor: '#FB5812',
		borderRadius: 15,
		paddingHorizontal: 15,
		paddingVertical: 5,
		color: '#fff'
	}
});
