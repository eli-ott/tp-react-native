import { StyleSheet, Text } from 'react-native';

export function Title({ content }: { content: string }) {
	return <Text style={styles.title}>{content}</Text>;
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'Jura'
    }
})
