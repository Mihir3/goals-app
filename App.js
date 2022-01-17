import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalName) => {
    setCourseGoals(currentGoals =>
       [...currentGoals, 
        { key : Math.random().toString(), 
          value : goalName} ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=> goalId !== goal.key)
    })
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View>
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      
      <GoalInput show={isAddMode} addNewGoal={addGoalHandler} cancelGoal={cancelGoalHandler}/>
      <FlatList 
      keyExtractor={(item,index) => item.key}
      data={courseGoals}
       renderItem={
            itemData => <GoalItem id={itemData.item.key} goal={itemData.item.value} onDelete={removeGoalHandler} />
          }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    margin : 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
