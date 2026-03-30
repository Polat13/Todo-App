import React from 'react';
import { FaRegCircle , FaRegTrashAlt,FaRegCheckCircle} from 'react-icons/fa';

const Todo_Item = ({todo,toogle,deleteTodo}) => {
  return (
    <div className='w-full flex items-center px-2 py-4 gap-2 border-b border-b-emerald-200 cursor-pointer select-none' onClick={() => toogle(todo.id)}>
        {
          todo.isComplete ? (<FaRegCheckCircle className='text-[#00AD85] size-5'/>) : (<FaRegCircle className='text-[#00AD85] size-5'/>)
        }
        <p className={`flex-1 ${todo.isComplete ? 'line-through' : ''}`}>{todo.text}</p>
        <FaRegTrashAlt className='text-[#e01056] size-5 hover:scale-110 transition-all' onClick={() => deleteTodo(todo.id)} />
        </div>
  )
}

export default Todo_Item