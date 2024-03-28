'use server';

import { revalidateTag } from "next/cache";

export const getTask = async (url: string) => {
    const fetchTask = await fetch(url,{
      next :{
        tags: ['task']
      }
    });
    const res = fetchTask.json()
    return res
  }

export const addTask = async (url: string, data:any) => {
    const fetchTask = await fetch(url,{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data),
    });
    revalidateTag('task');
    return "Task added....."
  }
