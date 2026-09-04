import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Expo App</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "red",
  },
  link: {
    borderWidth: 1,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "green",
    color: "white",
    fontWeight: "semibold",
    fontSize: 20,
  },
});
