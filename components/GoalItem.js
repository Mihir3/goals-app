import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return(    
        <TouchableOpacity activeOpacity={0.9} onPress={props.onDelete.bind(this, props.id)}>   
        <View style={styles.listItem}>
            <Text> {props.goal} </Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem : {
        padding : 10,
        margin : 10,
        backgroundColor : 'grey',
        borderColor : 'black',
        borderWidth : 1
    }
})


export default GoalItem;