import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { Agenda } from "react-native-calendars";
import DisplayTask from "./DisplayTask";

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//     },
// });

const dataTask = [
    {
        id: 1,
        date: "2020-06-12",
        nom: 'toto'
    },
    {
        id: 2,
        date: "2020-06-13",
        nom: "tutu"
    },
    {
        id: 3,
        date: "2020-06-14",
        nom: "titi"
    }
]


function Calendar(props) {

    // return (<FlatList 
    //             data = {dataTask}
    //             keyExtractor = {(item) => item.id.toString()}
    //             renderItem = { ({item}) => <DisplayTask task={item} />}
    // />)

    // var items = makeDatasUsableForAgenda();

    return (
        <Agenda
            // testID={testIDs.agenda.CONTAINER}
            items={{
                "2020-06-13": [{ name: "test" }],
                "2020-06-14": [{ name: "toto" }, { name: "titi" }]
            }}
            renderItem={(item, firstItemInDay) => { return (<View />); }}
            renderEmptyDate={() => { return (<View />); }}
            rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
        />
    );
}

// function makeDatasUsableForAgenda() {

//     var result = ()=>{
//         let toReturn = {

//         }
//     };

//     return result;
// }

export default Calendar;