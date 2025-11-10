import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoItem({ text, id, onDelete }) {
  return (
    <Pressable
      onPress={() => onDelete(id)} // عند الضغط تُحذف المهمة
      style={({ pressed }) =>
        pressed ? [styles.taskItem, styles.pressedItem] : styles.taskItem
      }
    >
      <View>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#ddd', // عند الضغط تصبح رمادية خفيفة
  },
  taskText: {
    fontSize: 16,
  },
});