import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, Pressable } from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const [listNote, setListNote] = useState([]);

  const handleText = (inputText) => {
    console.log(inputText);
    setValue(inputText);
  }

  const handleBtn = () => {
      setListNote(currentValue => [...currentValue, value]);
      setValue('');
  }

  const handleRemove = (index) => {
    setListNote(currentValue => {
      const updatedList = [...currentValue];
      updatedList.splice(index, 1);
      return updatedList;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleText}
          placeholder="Type here..."
          value={value}
        />
        <Button
          onPress={handleBtn}
          title="Add Note"
          color="#007BFF"
        />
      </View>
      <View>
        <Text style={styles.showLists}>Show Lists here!</Text>
        <FlatList
          data={listNote}
          renderItem={({ item,index }) => (
            <View style={styles.noteContainer}>
              <Pressable onPress={()=>handleRemove(index)}>
              <Text style={styles.noteText}>{item}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop:200,
  },
  input: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: 250,
    fontSize: 16,
  },
  showLists: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007BFF',
  },
  noteContainer: {
    backgroundColor: '#E5E5E5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 18,
  },
});
