import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [clips, setClips] = useState([]);

  const handleClip = () => {
    if(inputText.trim() === '') {
      Alert.alert('กรุณากรอกข้อความก่อน');
      return;
    }
    setClips([...clips, inputText]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tpsclip</Text>
      <TextInput
        style={styles.input}
        placeholder="พิมพ์ข้อความที่นี่..."
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Clip" onPress={handleClip} />
      <ScrollView style={styles.scroll}>
        {clips.map((clip, index) => (
          <View key={index} style={styles.clipBox}>
            <Text>{clip}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  scroll: { marginTop: 20 },
  clipBox: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
