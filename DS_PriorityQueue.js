class QueueItem {
    constructor(item, priority) {
      this.item = item;
      this.priority = priority;
    }
  }
  
  class PriorityQueuen {
    constructor() {
      this.queueArray = [];
    }
  
    add(item, priority) {
      const queueItem = new QueueItem(item, priority);
      if (this.queueArray.length == 0) this.queueArray.push(queueItem);
      else {
        for (let i = 0; i < this.queueArray.length; i++) {
          if (this.queueArray[i].priority < priority) {
            this.queueArray.splice(i, 0, queueItem);
            return;
          }
        }
        this.queueArray.push(queueItem);
      }
    }
    removeFromTop() {
      return this.queueArray.shift();
    }
  }