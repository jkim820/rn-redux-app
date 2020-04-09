import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
    <View style={styles.container}>
        {todos.map(todo =>
            <TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
})