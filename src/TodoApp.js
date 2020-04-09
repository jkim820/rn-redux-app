import React from 'react';
import { StyleSheet, View } from 'react-native';

import AddTodo from './containers/AddTodo';
import CurrentTodos from './containers/CurrentTodos';

class TodoApp extends Component {

    render() {
        return (
            <View styles={styles.container}>
                <AddTodo />

                <View>
                    <CurrentTodos />
                </View>
            </View>
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({
    container: {
        padding: 50
    }
});