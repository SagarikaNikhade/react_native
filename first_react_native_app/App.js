import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { key: String(Date.now()), text: task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  taskItem: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
});
