import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        // this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    placeholder="Create a to-do"
                    style={{ width: '80%', borderWidth: 1, borderColor: 'gray', height: 50, padding: 10 }}
                />
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.addTodo(this.state.text)}>
                    <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems: 'center' }}>
                        <Ionicons name="md-add" size={30} style={{ color: 'blue', padding: 10 }} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);