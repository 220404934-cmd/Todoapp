import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Yapılacaklar Listem</Text>
        {/* Liste alanı buraya gelecek */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Açık gri arka plan (خلفية رمادية فاتحة)
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
});