import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about</Text>
      <Link href={"/course"} style={styles.link}>
        Course
      </Link>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "blue",
  },
  link: {
    fontSize: 20,
    color: "green",
    marginTop: 20,
  },
});
