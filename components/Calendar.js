
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';
import moment from "moment";
// Représente l'heure de réveil quotidienne choisie par l'utilisateur
const reveil = moment().hour(6).minute(30).utc(1);
// Représente l'heure de coucher qutidienne chosie par l'utilisateur
const coucher = moment().hours(23).minutes(30).utc(1);


export default function Calendar() {
    /* 
    * Représente le tableau qui sera dans le local storage
    * Il faut qu'il y ait "start", "duration" et "note"
    * Peu import s'il y a d'autres propriétés sur l'objet ça ne pose pas de problèmes
    */
    const sampleEvents = [
        { 'start': '2020-06-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
        { 'start': '2020-06-23 10:00:00', 'duration': '01:30:00', 'note': 'Faire les courses' },
        { 'start': '2020-06-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
        { 'start': '2020-06-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
        { 'start': '2020-06-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
        { 'start': '2020-06-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
        { 'start': '2020-06-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2020-06-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2020-06-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2020-06-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' },
        { 'start': '2020-06-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        // Test pour les évènements qui n'ont pas de date mais seulement une durée
        { 'date': '', 'importance': '2', 'duration': '01:00:00', 'echelle': 'mois', 'note': 'Schedule 6' }
        // { 'date': '', 'importance': '1', 'duration': '00:30:00', 'echelle': 'journée', 'note': 'Schedule 7' },
        // { 'date': '', 'importance': '0', 'duration': '02:00:00', 'echelle': 'semaine', 'note': 'Schedule 8' },
        // { 'date': '', 'importance': '0', 'duration': '02:00:00', 'echelle': 'mois', 'note': 'Schedule 9' },
        // { 'date': '', 'importance': '1', 'duration': '02:00:00', 'echelle': 'semaine', 'note': 'Schedule 10' },
        // { 'date': '', 'importance': '1', 'duration': '02:00:00', 'echelle': 'semaine', 'note': 'Schedule 11' }
    ]

    // On tri le tableau selon l'importance ( plus la valeur est élevée plus c'est important )
    sampleEvents.sort((a, b) => (a.importance < b.importance) ? 1 : -1);
    // On parcourt l'ensemble du tableau
    for (let i = 0; i < sampleEvents.length; i++) {
        // On regarde si la propriété "start" de l'objet est définie
        if (!sampleEvents[i].hasOwnProperty('start')) {
            // console.log(sampleEvents[i].note);
            sampleEvents[i].start = getStartFromDuration(sampleEvents[i].duration, sampleEvents[i].echelle);
        }

    }


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

function getStartFromDuration(duration, echelle) {

    var now = moment().utc(1);
    var periode;

    // Dans quelle limite de temps l'utilisateur souhaite que sa tâche soit faite
    switch (echelle) {
        // Si la tâche doit être faite dans la journée
        case "journée":
            // On stocke le moment de la fin de la journée
            var endOfToday = moment().endOf('day').utc(1);
            // On enlève à l'heure de la fin de journée l'heure qu'il est pour avoir la différence entre les deux
            var remainingTime = endOfToday.subtract(now.hours(), 'hours').subtract(now.minutes(), 'minutes');
            // On stocke l'heure et les minutes obtenues
            var hour = remainingTime.hour();
            var minute = remainingTime.minute();
            // On additionne pour avoir le total en minutes
            periode = hour * 60 + minute;
            break;
        // Si la tâche doit être faite dans la semaine
        case "semaine":
            // On stocke le moment de la fin de la semaine
            var endOfWeek = moment().endOf('week').utc(1);
            // On enlève à la fin de la semaine l'heure qu'il est pour avoir la différence entre les deux
            var remainingTime = endOfWeek.subtract(now.hour(), 'hours').subtract(now.minutes(), 'minutes');
            // On stocke la différence entre 7(une semaine complète) et le jour actuel de la semaine
            var day = 7 - now.isoWeekday();
            // On stocke l'heure et les minutes obtenues
            var hour = remainingTime.hour();
            var minute = remainingTime.minute();
            // On convertit et additionne le tout
            periode = (day * 24 * 60) + (hour * 60) + minute;

            break;
        // Si la tâche doit être faite dans le mois
        case "mois":
            // On stocke le moment de la fin du mois
            var endOfMonth = moment().endOf('month').utc(1);
            // On enlève à la fin de la semaine l'heure qu'il est pour avoir la différence entre les deux
            var remainingTime = endOfMonth.subtract(now.hour(), 'hours').subtract(now.minutes(), 'minutes');
            // On stocke la différence entre le dernier jour du mois et aujourd'hui
            var day = endOfMonth.date() - now.date();
            // On stocke l'heure et les minutes obtenues
            var hour = remainingTime.hour();
            var minute = remainingTime.minute();
            // On convertit et additionne le tout
            periode = (day * 24 * 60) + (hour * 60) + minute;
            break;

        default:
            break;
    }
    // console.log(periode);
    for (let i = 0; i <= periode; i++) {
        var exploredMinute = now.add(1, 'minutes');
        // if(exploredMinute.isBefore(reveil) || exploredMinute.isAfter(coucher)){
        // console.log(exploredMinute.hour(reveil.hour()).minute(reveil.minute()));
        // console.log(exploredMinute.hour(coucher.hour()).minute(coucher.minute()));
        if (exploredMinute.isBetween(exploredMinute.hour(reveil.hour()).minute(reveil.minute()), exploredMinute.hour(coucher.hour()).minute(coucher.minute()))) {
            console.log(exploredMinute + " ==> c'est pendant le sommeil");
        }

    }
    return ("2020-06-20 10:00:00");
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

