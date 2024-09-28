import axios from "axios";
import { getToken } from "@/helper/cookies";
import { Task } from "@/iterface";

export const getTasks = () => {
  let url = process.env.NEXT_PUBLIC_TODO_BACK_END as string;
  url = url + "/tasks";
  try {
    const AuthToken = getToken();
    return axios.get(url, {
      headers: { Authorization: `Bearer ${AuthToken}` },
    });
  } catch (e) {
    return e;
  }
};

export const createTasks = (task:Task,userId:string) => {
  let url = process.env.NEXT_PUBLIC_TODO_BACK_END as string;
  url = url + "/tasks/create";
  try {
    const AuthToken = getToken();
    return axios.post(url, {
      headers: { Authorization: `Bearer ${AuthToken}` },
      body:{userId,...task}
    });
  } catch (e) {
    return e;
  }
};
