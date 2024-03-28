import Inputfield from "./Inputfield";
import { getTask } from "./action";
interface Task { content: 'task 1 update', id: 1 };

export default async function Home() {

  const taskList: Task[] = await getTask("http://127.0.0.1:8000/task/");


  return (
    <main className="">
      <h1 className="text-4xl p-4">TASK LIST</h1>
      <Inputfield/>
      <div>
        {
          taskList && taskList.map((task: Task)=>{
            return(
              <div key={task.id}>
                <p>{task.content}</p>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
