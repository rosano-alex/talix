
import React from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";
import { signal } from "ICTUS";
import { useSignal } from "ICTUS/react";

const messages = signal<{ text: string, time: number }[]>([]);
const input = signal("");

export default function App() {

  const list = useSignal(messages);
  const value = useSignal(input);

  function send() {
    if (!value) return;

    messages.set([
      ...list,
      { text: value, time: Date.now() }
    ]);

    input.set("");
  }

  return (
    <View style={{ padding: 40, flex: 1 }}>

      <Text style={{ fontSize: 24 }}>Chat</Text>

      <ScrollView style={{ flex: 1 }}>
        {list.map((m, i) => (
          <Text key={i}>
            {new Date(m.time).toLocaleTimeString()} - {m.text}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        value={value}
        onChangeText={t => input.set(t)}
        style={{ borderWidth: 1, padding: 6, marginVertical: 10 }}
      />

      <Button title="Send" onPress={send} />

    </View>
  );
}
