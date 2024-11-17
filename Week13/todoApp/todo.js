export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({name: task, complete: false});
    }

    complete(task) {
        for (const t of this.tasks) {
            if (t.name == task) {
                t.complete = true;
                return
            }
        }
    }

    getTasks() {
        for (const task of this.tasks){
            console.log(task);
        }
    }

}
