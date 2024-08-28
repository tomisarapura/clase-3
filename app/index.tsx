import { useState } from "react";
import { Pressable, Text, View } from "react-native";

/**
 * The Index component is a functional component that displays a counter and provides buttons to increment and decrement the counter value.
 *
 * @returns The rendered JSX elements.
 */
export default function Index() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count != 0) setCount(count - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cantidad = {count}</Text>
      <View style={{ marginVertical: 10 }}>
        <Pressable
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
          }}
          onPress={sumar}
        >
          <Text style={{ color: "white" }}>Sumar</Text>
        </Pressable>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Pressable
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 5,
          }}
          onPress={restar}
        >
          <Text style={{ color: "white" }}>Restar</Text>
        </Pressable>
      </View>
    </View>
  );
}
