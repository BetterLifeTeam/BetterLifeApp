import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';

export default function Agenda() {
    const sampleEvents = [
        { 'start': '2020-06-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
        { 'start': '2020-06-23 10:00:00', 'duration': '01:30:00', 'note': 'Faire les courses' },
        { 'start': '2020-06-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
        { 'start': '2020-06-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
        { 'start': '2020-06-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
        { 'start': '2020-06-25 19:00:00', 'duration': '01:00:00', 'note': 'Dinner with family' },
        { 'start': '2020-06-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        { 'start': '2020-06-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
        { 'start': '2020-06-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
        { 'start': '2020-06-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
        { 'start': '2020-06-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
    ]

    return (
        <View style={styles.container}>
            <WeeklyCalendar
                events={sampleEvents}
                style={{
                    marginTop: 75,
                    height: "90%"
                }}
                startWeekday={1}
                renderEvent={(event, j) => {
                    let startTime = moment(event.start).format('LT').toString()
                    let duration = event.duration.split(':')
                    let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2])
                    let endTime = moment(event.start).add(seconds, 'seconds').format('LT').toString()
                    return (
                        <View key={j}>
                            <View style={styles.event}>
                                <View style={styles.eventDuration}>
                                    <View style={styles.durationContainer}>
                                        <View style={styles.durationDot} />
                                        <Text style={styles.durationText}>{startTime}</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }} />
                                    <View style={styles.durationContainer}>
                                        <View style={styles.durationDot} />
                                        <Text style={styles.durationText}>{endTime}</Text>
                                    </View>
                                    <View style={styles.durationDotConnector} />
                                </View>
                                <View style={styles.eventNote}>
                                    <Text style={styles.eventText}>{event.note}</Text>
                                </View>
                            </View>
                            <View style={styles.lineSeparator} />
                        </View>
                    )
                }}
                renderLastEvent={(event, j) => {
                    let startTime = moment(event.start).format('LT').toString()
                    let duration = event.duration.split(':')
                    let seconds = parseInt(duration[0]) * 3600 + parseInt(duration[1]) * 60 + parseInt(duration[2])
                    let endTime = moment(event.start).add(seconds, 'seconds').format('LT').toString()
                    return (
                        <View key={j}>
                            <View style={styles.event}>
                                <View style={styles.eventDuration}>
                                    <View style={styles.durationContainer}>
                                        <View style={styles.durationDot} />
                                        <Text style={styles.durationText}>{startTime}</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }} />
                                    <View style={styles.durationContainer}>
                                        <View style={styles.durationDot} />
                                        <Text style={styles.durationText}>{endTime}</Text>
                                    </View>
                                    <View style={styles.durationDotConnector} />
                                </View>
                                <View style={styles.eventNote}>
                                    <Text style={styles.eventText}>{event.note}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
                renderDay={(eventViews, weekdayToAdd, i) => (
                    <View key={i.toString()} style={styles.day}>
                        <View style={styles.dayLabel}>
                            <Text style={[styles.monthDateText, { color: 'pink' }]}>{weekdayToAdd.format('M/D').toString()}</Text>
                            <Text style={[styles.dayText, { color: 'pink' }]}>{weekdayToAdd.format('ddd').toString()}</Text>
                        </View>
                        <View style={[styles.allEvents, eventViews.length === 0 ? { width: '100%', backgroundColor: 'pink' } : {}]}>
                            {eventViews}
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});