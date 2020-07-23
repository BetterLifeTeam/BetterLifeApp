import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import t from 'tcomb-form-native';
import { render } from 'react-dom';

const Form = t.form.Form;

var Importance = t.enums({
  0: 'banal',
  1: 'crtitique',
});

var Type = t.enums({
  "reccurent": 'recurrent',
  "dated": 'dated',
});

const Task = t.struct({
  note: t.String,
  description: t.maybe(t.String),
  start: t.maybe(t.Date),
  duration: t.Num,
  importance: Importance,
  type: Type,
});


const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'pink',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    note: {
      label: 'Name of the task',
    },
    description: {
      label: 'Description of the task (optionnal)',
    },
    start: {
      mode: 'datetime',
      config: {
        format: (date) => {
           return moment(date).format('LT');
        },
     },
    },
    duration: {
      label: 'Duration of the task in minutes',
    },
    time: {
      label: 'type of the task',
    },
  },
  stylesheet: formStyles,
};


export default class UpsertTask extends Component  {
  handleSubmit = () => {
    console.log("coucou")
  }

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
        <Form 
          type={Task} 
          options={options}
        />
        </View>
        <Button
          title="add task"
          onPress={this.handleSubmit}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});