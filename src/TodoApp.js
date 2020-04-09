import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

import AddTodo from './containers/AddTodo';
import CurrentTodos from './containers/CurrentTodos';

// class TodoApp extends React.Component {

//     state = {
//         todos: [],
//         visibilityFilter: 'SHOW_ALL_TODOS'
//     }

//     render() {
//         return (
//             <View styles={styles.container}>
//                 <AddTodo />

//                 <View>
//                     <CurrentTodos />
//                 </View>
//             </View>
//         )
//     }
// }

// export default TodoApp;

export default function TodoApp() {

    const currentDate = moment().format(' DD, MMM');
    
    return (
        <View styles={styles.container}>
            <Text style={styles.date}>{currentDate}</Text>
            <AddTodo />

            <View>
                <CurrentTodos />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    date: {
        fontSize: 30,
        paddingTop: 70,
        paddingBottom: 20,
        paddingLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
});