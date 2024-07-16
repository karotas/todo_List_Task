
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
    default:false,
  },
});

const Todo = mongoose.model('Todos', TodoSchema);
export default Todo;
