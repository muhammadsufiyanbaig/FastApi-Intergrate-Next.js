'use server';

export const getTask = async (url: string) => {
    const fetchTask = await fetch(url);
    const res = fetchTask.json()
    return res
  }