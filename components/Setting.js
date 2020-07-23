import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const ReservedTime = t.struct({
  wakeUp: t.Date,
  lunch: t.Date,
  lunchDuration : t.Num,
  dinner: t.Date,
  dinnerDuration  : t.Num,
  sleep: t.Date,
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
    wakeUp: {
      mode: 'time',
      error: 'You need to configure a wake up time',
      label: 'Wake-Up',
      config: {
        defaultValueText: 'Click here to configure Wake-Up',
        format: (date) => {
           return moment(date).format('LT');
        },
     },
    },
    lunch: {
      mode: 'time',
      error: 'You need to precise your lunch time',
      config: {
        defaultValueText: 'Click here to configure lunch time',
        format: (date) => {
           return moment(date).format('LT');
        },
     },
    },
    lunchDuration: {
      label: 'Duration of lunch in minute',
    },
    dinner: {
      mode: 'time',
      error: 'You need to precise your dinner time',
      config: {
        defaultValueText: 'Click here to configure dinner time',
        format: (date) => {
           return moment(date).format('LT');
        },
     },
    },
    dinnerDuration: {
      label: 'Duration of dinner in minute',
    },
    sleep: {
      mode: 'time',
      error: 'You need to precise your sleep time',
      config: {
        defaultValueText: 'Click here to configure slepping time',
        format: (date) => {
           return moment(date).format('LT');
        },
     },
    },
  },
  stylesheet: formStyles,
};

class Setting extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();

    const wakeUp = moment(value.wakeUp).format('HH:mm:00');
    const sleep = moment(value.sleep).format('HH:mm:00');

    const lunch = { 
      'start': moment(value.lunch).format('HH:mm:00'), 
      'duration': time_convert(value.lunchDuration), 
      'note': 'Lunch moment' 
    };

    const dinner = { 
      'start': moment(value.dinner).format('HH:mm:00'), 
      'duration': time_convert(value.dinnerDuration), 
      'note': 'Dinner moment' 
    };

    const setting = { 
      "wakeUp": wakeUp,
      "lunch": lunch,
      "dinner": dinner,
      "sleep": sleep,
    }

    const action = {type: "TOGGLE_SETTING", value: setting}
    this.props.dispatch(action)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={ReservedTime} 
          options={options}
        />
        <Button
          title="Register information"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

function time_convert(num)
 { 
  const hours = Math.floor(num / 60);  
  const minutes = num % 60;
  return `${hours}:${minutes}:00`;         
}

const mapStateToProps = (state) => {
   return {
    timeSettings: state.timeSettings,
    dattedTask: state.dattedTask,
   }
}

export default connect(mapStateToProps)(Setting);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});