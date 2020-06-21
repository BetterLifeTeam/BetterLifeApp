import React, { Component } from "react";
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
        "id": 1,
        "date": "2020-06-10",
        "time": "09:00:00",
        "title": 'Faire les courses'
    },
    {
        "id": 1,
        "date": "2020-06-12",
        "time": "09:00:00",
        "title": 'Sortir le chien'
    },
    {
        "id": 2,
        "date": "2020-06-13",
        "time": "09:00:00",
        "title": 'Aller à la banque'
    },
    {
        "id": 3,
        "date": "2020-06-14",
        "time": "09:00:00",
        "title": 'Faire le repassage'
    }
]

const hoursInDay = [];
for (let i = 0; i < 24; i++) {
    hoursInDay[i] = i + ":00"

}

// const dataTask2 = {
//     "2020-06-12": [{nom: "toto"}],
//     "2020-06-13": [{nom: "tata"}],
//     "2020-06-14": [{nom: "tutu"}],
// }


export default class Calendar extends Component {

    // return (<FlatList 
    //             data = {dataTask}
    //             keyExtractor = {(item) => item.id.toString()}
    //             renderItem = { ({item}) => <DisplayTask task={item} />}
    // />)

    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    // this.setState(items)
    // var items = makeDatasUsableForAgenda();
    render() {

        this.makeDatasUsableForAgenda();
        return (
            <Agenda
                // items={items}
                // renderItem={(item, firstItemInDay) => { return (<DisplayTask item={item} firstItemInDay={firstItemInDay} />); }}
                // renderDay={(day, item) => { return (<View />); }}
                // renderEmptyDate={() => { return (<View />); }}
                // rowHasChanged={(r1, r2) => { return r1.text !== r2.text }}

                items={this.state.items}
                // loadItemsForMonth={this.loadItems.bind(this)}
                selected={'2020-06-14'}
                renderItem={this.renderItem.bind(this)}
                // renderEmptyDate={this.renderEmptyDate.bind(this)}
                // renderEmptyData={()=>this.renderEmptyDate()}
                renderEmptyDate={() => this.renderEmptyDate()}
                rowHasChanged={this.rowHasChanged.bind(this)}
            />
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = 0; i < 365; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!this.state.items[strTime]) {
                    // this.state.items[strTime] = [];
                    // const numItems = Math.floor(Math.random() * 5);
                    // for (let j = 0; j < numItems; j++) {
                    //     this.state.items[strTime].push({
                    //         name: 'Item for ' + strTime,
                    //         height: Math.max(50, Math.floor(Math.random() * 150))
                    //     });
                    // }
                }
            }
            //console.log(this.state.items);
            const newItems = {};
            Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
    }

    renderItem(item) {
        console.log(this.state);
        if (item.hour) {
            task = <Text>{item.title}</Text>
        }
        return (
            <View style={[styles.item, { height: item.height }]}>
                {hoursInDay.map((hour, key) => (
                    //key is the index of the array 
                    //item is the single item of the array
                    <View>
                        <Text>{hour}--------------------------------------------------------</Text>
                        
                    </View>
                ))}
            </View>
        );
    }

    renderEmptyDate() {
        console.log("empty");
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }

    makeDatasUsableForAgenda() {

        // var result = new Object;
        // var result;
        for (let i = 0; i < dataTask.length; i++) {
            let date = dataTask[i]["date"];
            // result[date] = [
            this.state.items[date] = [
                dataTask[i]
            ];
        }
        // console.log(result);
        // return result;
    }

}


// function makeDatasUsableForAgenda() {

//     var result = new Object;
//     for (let i = 0; i < dataTask.length; i++) {
//         let date = dataTask[i]["date"];
//         result[date] = [
//             dataTask[i]
//         ];
//     }
//     // console.log(result);
//     return result;
// }

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});

// export default Calendar;