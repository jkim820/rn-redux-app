import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import todoCounter from './todoCounter';

export default combineReducers({
    todos,
    visibilityFilter,
    todoCounter
});

