import React, { useEffect, useRef,useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import Todo_Item from "./Todo_Item";

const Todo = () => {

    const [todos,setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const data = useRef();

    const toogle = (id) => {
        return setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id == id){
                    return{...todo, isComplete: !todo.isComplete}
                }
                return todo;
            });
        });
    };

    const deleteTodo = (id) => {
        return setTodos((prevTodos) => (prevTodos.filter((todo) => todo.id !== id)))
    };

    const addTodo = () => {
        const inputText = data.current.value.trim();
        if(inputText == ""){
            return null;
        }

        const newTodo = {
            id:Date.now(),
            text:inputText,
            isComplete:false,
        }

        setTodos((prev) => [...prev,newTodo]);
        data.current.value = "";
    }

    useEffect(() => {
            localStorage.setItem("todos",JSON.stringify(todos));
        }, [todos])

    return (
        <div className="place-self-center bg-white w-90 h-150 p-12 flex flex-col gap-8 rounded-lg lg:w-110 lg:h-150">
            <h1 className="text-3xl font-semibold tracking-wider flex gap-2 items-center"> <FaClipboardList />Todo App</h1>

            <div className="flex items-center bg-[#EEEEEE]  rounded-full">
                <input 
                ref={data}
                type="text" 
                className="border-none outline-none p-3.5 flex-1 bg-transparent placeholder:text-slate-400"
                placeholder="Yeni Bir Görev Ekle"
                />
                <div className="bg-[#00AD85] h-full w-14 flex items-center justify-center rounded-r-full cursor-pointer" onClick={()=>addTodo()}>
                <CiCirclePlus className="size-10 text-[#EEEEEE]"/>
                </div>
            </div>

            <div className="pt-2">
                {
                    todos.map((todo) =>(<Todo_Item key={todo.id} todo={todo} toogle={toogle} deleteTodo={deleteTodo}/>))
                }
            </div>
        </div>
    )
}
export default Todo;