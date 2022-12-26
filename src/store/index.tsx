import {Store} from "pullstate";

interface TaskList {
  list: any[]
}

export const TaskStore = new Store<TaskList>({
  list: []
})