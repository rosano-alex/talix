
import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { signal } from "ICTUS";
import { useSignal } from "ICTUS/react";

const todos = signal<string[]>([]);
const input = signal("");

export default function App() {

  const list = useSignal(todos);
  const value = useSignal(input);

  function addTodo() {
    if (!value) return;
    todos.set([...list, value]);
    input.set("");
  }

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 24 }}>Todo App</Text>

      <TextInput
        value={value}
        onChangeText={t => input.set(t)}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />

      <Button title="Add Todo" onPress={addTodo} />

      {list.map((t, i) => (
        <Text key={i}>{t}</Text>
      ))}
    </View>
  );
}
