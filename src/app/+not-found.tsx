import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Page Not Found</Text>
      <Link href="/" style={styles.link}>
        Go back to Home
      </Link>
    </View>
  );
};

export default NotFound;

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
    textDecorationLine: "underline",
  },
});
