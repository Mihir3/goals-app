import React ,{ useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    
    const postGoalHandler = () => {
        props.addNewGoal(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.show} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            placeholder='Enter a new goal'
            onChangeText={goalHandler} 
            value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
                <Button title='ADD' onPress={() => postGoalHandler()}/>
                <Button title='CANCEL'color='red' onPress={props.cancelGoal}/> 
            </View> 
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    input :{
        width : '80%',
        borderColor : 'black',
        borderWidth : 1,
        padding : 10,
        margin : 10
    },
    buttonContainer : {
        justifyContent : 'space-evenly'
    }
})

export default GoalInput;