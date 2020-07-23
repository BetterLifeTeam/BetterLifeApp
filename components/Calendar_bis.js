import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import moment, { duration } from "moment";
// Représente l'heure de réveil quotidienne choisie par l'utilisateur
const reveil = moment().hour(6).minute(30).second(0).utc(1);
// Représente l'heure de coucher qutidienne chosie par l'utilisateur
const coucher = moment().hours(23).minutes(30).second(0).utc(1);
// Cacule la différence entre le coucher et le réveil
// const sommeil = 

const setting = {
    "dinner": {
        "duration": "0:25:00",
        "start": "12:50:00",
    },
    "lunch": {
        "duration": "1:20:00",
        "start": "10:50:00",
    },
    "sleepTime": {
        "start": "23:30:00",
        "duration": "06:30:00"
    }
}

/* 
* Représente le tableau qui sera dans le local storage
* Il faut qu'il y ait "start", "duration" et "note"
* Peu import s'il y a d'autres propriétés sur l'objet ça ne pose pas de problèmes
*/
const sampleEvents = [
    { 'start': '2020-06-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
    { 'start': '2020-06-23 10:00:00', 'duration': '01:30:00', 'note': 'Faire les courses' },
    { 'start': '2020-06-29 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2020-06-30 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2020-06-30 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
    { 'start': '2020-06-29 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
    { 'start': '2020-07-02 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
    { 'start': '2020-07-05 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
    { 'start': '2020-07-15 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
    { 'start': '2020-07-16 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' },
    { 'start': '2020-07-16 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
    // Test pour les évènements qui n'ont pas de date mais seulement une durée
    { 'date': '', 'importance': '0', 'duration': '01:00:00', 'note': 'Schedule 6' },
    { 'date': '', 'importance': '2', 'duration': '01:00:00', 'note': 'Schedule 7' },
    { 'date': '', 'importance': '2', 'duration': '02:00:00', 'note': 'Schedule 9' },
    { 'date': '', 'importance': '1', 'duration': '00:30:00', 'note': 'Schedule 8' },
    { 'date': '', 'importance': '0', 'duration': '00:30:00', 'note': 'The machin' },
    { 'date': '', 'importance': '0', 'duration': '02:00:00', 'note': 'Schedule 10' },
    { 'date': '', 'importance': '0', 'duration': '01:30:00', 'note': 'Schedule 11' },
    { 'start': '2020-10-21 22:00:00', 'duration': '02:30:00', 'note': 'Test' }
]

export default function Agenda() {


    giveStartToTasks();

    // Un petit tri sur le tableau avant de l'utiliser pour être sûr que tout est classé dans l'ordre de la date
    sampleEvents.sort((a, b) => (a.start > b.start) ? 1 : -1);
    /**
     * Ne rien rajouter entre le tri et le return
     */
    return (
        <View style={styles.container}>
            <WeeklyCalendar
                events={sampleEvents}
                style={{
                    marginTop: 80,
                    height: "90%",
                    color: "red"
                }}
                startWeekday={1}
            />
        </View>
    );
}

function giveStartToTasks() {


    sampleEvents.sort((a, b) => (a.start > b.start && a.start != null && b.start != null) ? 1 : -1);


    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var limit = moment().add(2, 'month').format("YYYY-MM-DD HH:mm:ss");
    var interval;

    // On instancie les tableaux dont on va se servir
    var sampleEvents2 = [];
    var emptyStart = [];

    for (let i = 0; i < sampleEvents.length; i++) {
        if (sampleEvents[i].start == null) {
            // Si start n'est pas défini on met dans empty
            emptyStart.push(sampleEvents[i]);
        } else {
            // Si start est défini on met dans sample2
            sampleEvents2.push(sampleEvents[i]);
        }
    }

    // Tri par importance puis par durée
    emptyStart.sort((a, b) => (a.importance < b.importance) ? 1 : (a.importance === b.importance) ? ((a.duration < b.duration) ? 1 : -1) : -1);
    sampleEvents2.sort((a, b) => (a.start > b.start && a.start != null && b.start != null) ? 1 : -1);


    for (let i = 0; i < sampleEvents2.length; i++) {
        if (sampleEvents2[i].start != null && sampleEvents2[i].start >= now && sampleEvents2[i].start < limit && (i < sampleEvents2.length - 1) && sampleEvents2[i + 1] != null && sampleEvents2[i + 1].start < limit) {
            var explodedDuration = sampleEvents2[i].duration.split(":")
            var start = moment(sampleEvents2[i].start, "YYYY-MM-DD HH:mm:ss").add({
                hours: explodedDuration[0],
                minutes: explodedDuration[1],
                seconds: explodedDuration[2]
            });
            var nextStart = moment(sampleEvents2[i + 1].start, "YYYY-MM-DD HH:mm:ss");
            // interval = start.to(nextStart, true);
            interval = nextStart.diff(start, 'minutes');

            for (let j = 0; j < emptyStart.length; j++) {
                if (emptyStart[j].start == null) {
                    var durationInMinutes = moment(emptyStart[j].duration, "HH:mm:ss").diff(moment("00:00:00", "HH:mm:ss"), "minutes");


                    if (durationInMinutes <= interval) {

                        var toUse = moment(start);
                        var test = true;

                        for (const [key, value] of Object.entries(setting)) {
                            
                            var startOfSetting = moment(setting[key].start, "HH:mm:ss");
                            var endOfSetting = moment(setting[key].start, "HH:mm:ss").add({
                                
                            })

                            if (toUse > startOfSetting && toUse < (setting[key])) {
                                
                            }

                        }

                        emptyStart[j].start = start.format("YYYY-MM-DD HH:mm:ss");
                        start.add(durationInMinutes, 'minutes');
                        interval -= durationInMinutes;

                    }
                }

            }


        } else {


        }


    }

    sampleEvents.concat(emptyStart);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});