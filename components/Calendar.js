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
    [
        id = 1,
        date = "2020-06-12",
        nom = 'toto'
    ],
    [
        id = 2,
        date = "2020-06-13",
        nom = "tutu"
    ],
    [
        id = 3,
        date = "2020-06-14",
        nom = "titi"
    ]
]

// const dataTask2 = {
//     "2020-06-12": [{nom: "toto"}],
//     "2020-06-13": [{nom: "tata"}],
//     "2020-06-14": [{nom: "tutu"}],
// }


function Calendar(props) {

    // return (<FlatList 
    //             data = {dataTask}
    //             keyExtractor = {(item) => item.id.toString()}
    //             renderItem = { ({item}) => <DisplayTask task={item} />}
    // />)

    var items = makeDatasUsableForAgenda();

    return (
        <Agenda
            // testID={testIDs.agenda.CONTAINER}
            // items={{
            //     "2020-06-13": [{ name: "test" }],
            //     "2020-06-13": [{ name: "tata" }],
            //     "2020-06-14": [{ name: "toto" }]
            // }}
            items={{items}}
            renderItem={(item, firstItemInDay) => { return (<DisplayTask item={item} />); }}
            renderEmptyDate={() => { return (<View />); }}
            rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}
        />
    );
}

function makeDatasUsableForAgenda() {

    var result = new Object;

    for (let i = 0; i < dataTask.length; i++) {
        // console.log(i);
        let date = dataTask[i]["date"];
        result[date] = [
            {
                nom: dataTask[i]["nom"],
                id: dataTask[i]["id"]
            }
        ];
    }
    // console.log(result);    
    return result;
}

export default Calendar;