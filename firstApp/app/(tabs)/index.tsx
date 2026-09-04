// import { Button } from "@react-navigation/elements";
// import { View, Text, Alert, StyleSheet, Pressable } from "react-native";

// const index = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//       <Pressable>
      
//         <Text>This is a Alert Button </Text>{" "}
//       </Pressable>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 20,
//     paddingTop: 50,
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     width: "100%",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "white",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     borderRadius: 5,
//     backgroundColor: "black",
//     width: "100%",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });


import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Switch,
  ActivityIndicator,
  Modal,
  StyleSheet
} from 'react-native';

const index = () => {
  // State Variables
  const [inputText, setInputText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Sample Data for FlatList
  const dataList = [
    { id: '1', title: 'Shreeram' },
    { id: '2', title: 'React Native Item 2' },
    { id: '3', title: 'React Native Item 3' },
  ];

  return (
    // 1. SafeAreaView: Notch aur Screen Margins se safe rakhta hai
    <SafeAreaView style={styles.container}>
      
      {/* 2. View: Main Container */}
      <View style={styles.card}>
        
        {/* 3. Text & Image */}
        <Text className='bg-red-800 '>React Native Components</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.logo}
        />

        {/* 4. TextInput */}
        <TextInput
          style={styles.input}
          placeholder="Yahan kuch type karein..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />

        {/* 5. Switch: Toggle Switch (On/Off) */}
        <View style={styles.row}>
          <Text>Dark Theme:</Text>
          <Switch
            value={isDarkMode}
            onValueChange={(val) => setIsDarkMode(val)}
          />
        </View>

        {/* 6. TouchableOpacity: Custom Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.btnText}>Open Modal</Text>
        </TouchableOpacity>

        {/* 7. ActivityIndicator: Loading Spinner */}
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      </View>

      {/* 8. FlatList: Data Rendering */}
      <Text style={styles.subHeading}>Items List:</Text>
      <FlatList
        data={dataList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />

      {/* 9. Modal: Pop-up screen */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.heading}>Yeh Modal Pop-up Hai!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.btnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

// 10. StyleSheet: CSS ki tarah styles define karna
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 8,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default index;