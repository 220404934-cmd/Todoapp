import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import TodoItem from './components/TodoItem'; // استيراد المكوّن

export default function App() {
  // 🧠 إدارة الحالة (state)
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // 📥 استلام النص من المستخدم
  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  // ➕ إضافة مهمة جديدة
  function addTaskHandler() {
    if (enteredTaskText.trim().length === 0) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), text: enteredTaskText },
    ]);
    setEnteredTaskText('');
  }

  // ❌ حذف مهمة عند الضغط عليها
  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  }

  // 🧱 واجهة التطبيق
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Yapılacaklar Listem</Text>

        {/* حقل الإدخال + زر الإضافة */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Yeni bir görev ekle..."
            onChangeText={taskInputHandler}
            value={enteredTaskText}
          />
          <Button title="Ekle" onPress={addTaskHandler} />
        </View>

        {/* قائمة المهام */}
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TodoItem text={item.text} id={item.id} onDelete={deleteTaskHandler} />
            )}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Henüz görev yok. Bir tane ekle! 📝</Text>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// 🎨 أنماط التصميم
const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: '#f0f2f5' },
  contentContainer: { flex: 1, paddingTop: 40, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    fontSize: 16,
  },
  listContainer: { flex: 5 },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#888' },
});