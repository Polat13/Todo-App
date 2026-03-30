import React from 'react';
import { FaRegCircle , FaRegTrashAlt,FaRegCheckCircle} from 'react-icons/fa';

const Todo_Item = ({todo,toogle}) => {
  return (
    <div className='w-full flex items-center px-2 py-4 gap-2 border-b border-b-emerald-200 cursor-pointer' onClick={() => toogle(todo.id)}>
        <FaRegCircle className='text-[#00AD85] size-5'/>
        <p className='flex-1'>{todo.text}</p>
        <FaRegTrashAlt className='text-[#e01056] size-5 hover:scale-110 transition-all'/>
        </div>
  )
}

export default Todo_Item