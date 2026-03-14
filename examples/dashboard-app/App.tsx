
import React from "react";
import { View, Text, Button } from "react-native";
import { signal, computed } from "ICTUS";
import { useSignal } from "ICTUS/react";

const users = signal(120);
const revenue = signal(5400);

const avgRevenue = computed(() =>
  revenue.get() / users.get()
);

export default function App() {

  const u = useSignal(users);
  const r = useSignal(revenue);
  const avg = useSignal(avgRevenue);

  return (
    <View style={{ padding: 40 }}>

      <Text style={{ fontSize: 28 }}>Dashboard</Text>

      <Text>Users: {u}</Text>
      <Text>Revenue: ${r}</Text>
      <Text>Avg Revenue/User: ${avg.toFixed(2)}</Text>

      <Button
        title="Add User"
        onPress={() => users.set(u + 1)}
      />

      <Button
        title="Add $100 Revenue"
        onPress={() => revenue.set(r + 100)}
      />

    </View>
  );
}
