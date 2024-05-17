import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function FormButton({ formSubmitted, content, type }: { formSubmitted: any; content: string; type: 'filled' | 'normal' }) {
	return (
		<TouchableOpacity
			onPress={formSubmitted}
			style={[button.common, , type === 'filled' ? button.filled : button.normal]}>
			<Text style={button.text}>{content}</Text>
		</TouchableOpacity>
	);
}

const button = StyleSheet.create({
	common: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 15,
		width: '50%',
		alignSelf: 'flex-end'
	},
	text: {
		fontFamily: 'Jura',
		color: '#fff'
	},
	filled: {
		backgroundColor: '#FB5812'
	},
	normal: {
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#FB5812',
		borderRadius: 15
	}
});
