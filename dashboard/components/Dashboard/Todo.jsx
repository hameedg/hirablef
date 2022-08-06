/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
import Link from 'next/link';
import plus from '../../public/svg/plus.svg';
import checkmark from '../../public/svg/checkmark.svg';

// This expects an array of object
//  Example: tasks = [ {id:1, task:"create your job", done: true},
//                    {id:2, task:"leave your job", done: false} ]

// USAGE: <Todo
//   tasks={[
//     { id: 1, task: "Create your job", done: true },
//     { id: 2, task: "Create your first promotion", done: false },
//     { id: 2, task: "Set your companies carrier page", done: false },
//     { id: 2, task: "Invite your team", done: false }
//   ]}
// />

const tasks = [
  {
    id: 1,
    task: 'Start the pre-internship/pre-project phase',
    link: '#',
    done: true,
  },
  {
    id: 2,
    task: 'Like the profiles you are confident about working on',
    link: '#',
    done: false,
  },

  {
    id: 4,
    task: 'Choose the program of your interest',
    link: '#',
    done: false,
  },
  {
    id: 5,
    task: 'Start working with companies & achieve your dream opportunity',
    link: '#',
    done: false,
  },
];
function Todo() {
  const InactiveTask = (props) => (
    <div className="flex items-center border-2 text-[13px] text-gray-500 mt-3  font-semibold p-2 rounded-lg cursor-default">
      <img className="pr-2 h-[14px]" alt="checkmark" src={checkmark.src} />
      <span>{props.task}</span>
    </div>
  );

  const ActiveTask = (props) => (
    <Link href={props.link} passHref>
      <div className="flex items-center text-[13px] bg-indigo-100 text-blue-500 font-semibold mt-3 p-2 rounded-lg cursor-pointer hover:bg-indigo-200">
        <img className="pr-2 h-[14px]" alt="plus" src={plus.src} />

        <span>{props.task}</span>
      </div>
    </Link>
  );

  return (
    <div className="shadow-xl rounded-xl p-4 border min-w-[28.9rem] bg-white">
      <div className="font-bold text-xl text-gray-800 pb-2">To-do List</div>
      <div className="todo-container flex flex-col  h-full">
        {tasks.map((item) =>
          item.done === true ? (
            <InactiveTask task={item.task} link={item.link} key={item.id} />
          ) : (
            <ActiveTask task={item.task} link={item.link} key={item.id} />
          )
        )}
      </div>
    </div>
  );
}

export default Todo;
