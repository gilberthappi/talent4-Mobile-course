import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
    name: string;
    age: number;
}

const LearnProps: React.FC<Props> = ({name, age }) =>{
    return (
        <View style={styles.container}>
            <Text>My Name: {name}</Text>
            <Text>Age: {age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LearnProps;