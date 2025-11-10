import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  // 🔹 1. State tanımlamaları
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // 🔹 2. Kullanıcı girişini işleyen fonksiyon
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  // 🔹 3. Görev ekleme fonksiyonu
  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) {
      return; // boş giriş yapılırsa hiçbir şey ekleme
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTaskText },
    ]);

    setEnteredTaskText(''); // giriş kutusunu temizle
  }

  // 🔹 4. JSX — Görünüm kısmı
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Yapılacaklar Listem</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Yeni bir görev ekle..."
            onChangeText={taskInputHandler} // state güncelle
            value={enteredTaskText} // kontrollü bileşen
          />
          <Button title="Ekle" onPress={addTaskHandler} />
        </View>

        {/* Liste alanı buraya gelecek */}
      </View>
    </SafeAreaView>
  );
}

// 🔹 5. Stiller
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Açık gri arka plan
  },
  contentContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1, // geniş yer kapla
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    fontSize: 16,
  },
});
