class Queue {
    constructor() {
        this.arr = {};
        this.i = 0;
        this.deleteNum = 0;
    }

    push(data) {
        if(Object.keys(this.arr).length == 0) {
            this.arr[this.i] = data;
        } else {
            this.i++;
            this.arr[this.i] = data;
        }
        
    }

    pop() {
        let save = this.arr[this.deleteNum];
        delete this.arr[this.deleteNum];
        this.deleteNum++;
        // this.i--;
        if(Object.keys(this.arr).length == 0) {
            this.deleteNum = 0;
            this.i = 0;
        }
        return save;
    }

    peek() {
        return this.arr[this.deleteNum];
    }

    empty() {
        if(Object.keys(this.arr).length <= 0) {
            return true;
        } else {
            return false;
        }
    }

    check() {
        console.log(this.arr);
        console.log(this.i);
        console.log(Object.keys(this.arr).length);
        console.log(this.deleteNum);
        
    }
}

let queue = new Queue();

queue.push("Hey");
queue.push("Hello");
queue.push("How are you?");
queue.pop();
queue.pop();
queue.pop();
queue.push("Hey");
queue.push("Hello");
queue.push("How are you?");
queue.push("Hey");
queue.pop();
queue.pop();
queue.pop();
queue.push("Hello");
queue.push("How are you?");
queue.push("Hello");
queue.push("How are you?");
queue.push("Hello");
queue.push("How are you?");
queue.push("Hello");
queue.pop();
queue.push("How are you?");
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log(queue.empty());
console.log(queue.top());


queue.check();

