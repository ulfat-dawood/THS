class Stack{
    constructor(){
        this.elements = [];
        //this.length= this.elements.length;
    }

    push(val){
        this.elements.push(val)
    }

    pop(){
        return this.elements.pop();
    }

    peek(){
        return this.elements[this.elements.length -1 ];
    }

    traverse(){
        this.elements.map((x)=> console.log(x)); 
    }

    search(element){
        return this.elements.indexOf(element); 
    }

    length(){
        console.log(this.elements.length)
    }

}

var stack= new Stack(); 

stack.push("a"); 
stack.push("b");
stack.push("c");
stack.traverse(); 
console.log(stack.pop());
console.log(stack.search("b"));
console.log(stack.peek());

stack.length()
