import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "Home" }} />
      <Tabs.Screen name="about" options={{ headerTitle: "About" }} />
      <Tabs.Screen name="course" options={{ headerTitle: "Course" }} />
      <Tabs.Screen name="+not-found" options={{ headerTitle: "Not Found" }} />
    </Tabs>
  );
}
