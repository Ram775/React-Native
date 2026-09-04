import { StyleSheet, Text, View } from "react-native";

const course = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>course</Text>
    </View>
  );
};

export default course;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "blue",
  },
});
