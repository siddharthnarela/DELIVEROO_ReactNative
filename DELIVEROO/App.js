import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-red-800 ">Open up App to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


