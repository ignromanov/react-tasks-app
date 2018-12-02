import { API_REFERENCE, API_DEVELOPER } from "./config";


export const tasksAPI = {
  create: (task) => {
    const form = new FormData();
    form.append('email', task.email);
    form.append('text', task.text);
    form.append('username', task.username);
    form.append('image', task.image);
  
    return fetch(`${ROOT_URL}/create${DEVELOPER}`, {
      method:  'POST',
      headers: {
      },
      body: form,
    });
  
  }
}