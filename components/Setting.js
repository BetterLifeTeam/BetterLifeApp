import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Setting() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (time) => {
      console.log("A time has been picked: ", time);
      hideDatePicker();
    };

  return (
    <ScrollView style={{ padding: 15 }}>
        <View style={{ marginBottom: 20 }}>
            <Text style={styles.label}>Wake up time : </Text>
            <Button title="Select wake up time" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                locale="fr_FR"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
      </View>

      <Button title="Envoyer" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    label: {
      color: '#373535',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
      marginBottom: 40
    },
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 15,
      alignItems: 'stretch',
    },
    input: {
      backgroundColor: '#d4d4d4',
      borderColor: 'white',
      height: 40,
      padding: 10,
      borderRadius: 4,
      width:300,
    },
  });