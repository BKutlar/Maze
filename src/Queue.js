class Queue {
   constructor() {
     this.element=[]
   }
  
   enqueue(element) {
     return this.element.unshift(element)
   }
  
  dequeue() {
    return this.element.shift()
  }
  
   size() {
     return this.element.length
   }
  
   isEmpty() {
     return this.element.length === 0
   }
  
   head() {
     return this.element[0]
   }
  
   tail() {
     return this.element[this.element.length-1]
   }
  }
  
//   function main() {
//     const q = new Queue();
  
//     /**
//     * You can test your methods here
//     */
  
//     q.enqueue('A');
//     q.enqueue('B');
//     q.enqueue("C");
//     q.enqueue('5');
//     console.log(q)
//     console.log(q.dequeue());
//     console.log(q.head());
//     console.log(q.tail());
//     console.log(q.isEmpty());
//     console.log(q.size());
//   }
  
//   main();
  
export default Queue;