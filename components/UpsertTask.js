import React, {useEffect} from "react";
import { StyleSheet, Text, View, TextInput, Button, Picker, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function UpsertTask() {
  const { register, setValue, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log("Form Data", JSON.stringify(data));
  
  useEffect(() => {
    register({ name: "entitled"});
    register({ name: "description"});
    register({ name: "date"});
    register({ name: "duration"});
    register({ name: "importance"});
    register({ name: "type"});    
  }, [register]);

  return (
    <ScrollView style={{ padding: 15 }}>
       <Text style={styles.label}>Entitled : </Text>
       <TextInput
        style={styles.input}
        name="entitled"
        onChangeText={text => setValue("entitled", text, true)}
      />
      {errors.entitled &&  <Text style={styles.label}>Entitled is required.</Text>}

      <Text style={styles.label}>Importance : {watch("importance")} vvv </Text>
      <Picker
        name="importance"
        selectedValue={watch("importance")}
        style={styles.input}
        onValueChange={(itemValue) => setValue("importance", itemValue)}
      >
        <Picker.Item label="To select.." />
        <Picker.Item label="Critique" value="critique" />
        <Picker.Item label="Banal" value="common" />
      </Picker>

       <Text style={styles.label}>Description :</Text>
       <TextInput
        style={styles.input}
        name="description"
        onChangeText={text => setValue("description", text)}
      />

       <Text style={styles.label}>Date : </Text>
       <TextInput
        style={styles.input}
        name="date"
        onChangeText={text => setValue("date", text)}
      />

     <Text style={styles.label}>Duration : </Text>
       <TextInput
        style={styles.input}
        name="duration"
        onChangeText={text => setValue("duration", text)}
      />

     <Text style={styles.label}>Type de tâche : </Text>
     <Picker
        name="type"
        selectedValue={watch("type")}
        style={styles.input}
        onValueChange={(itemValue) => setValue("type", itemValue)}
      >
        <Picker.Item label="To select.." />
        <Picker.Item label="Recurrent" value="recurrent" />
        <Picker.Item label="Dated" value="dated" />
      </Picker>

    {
        watch("type") && watch("type") == "recurrent" && (
            <Text>Vouz avez déclarez une taches récurrentes</Text>
        )
    }
    {
        watch("type") && watch("type") === "dated" && (
            <Text>VOus avez déclarer une chaine occationel </Text>
        )
    }
      <Button title="Envoyer" onPress={handleSubmit(onSubmit)} />
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