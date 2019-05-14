function counter(value) {
    var index = value;
    let prevNumber = 0;
    let currentNumber = 1;
    let i = 0;
    while (i < index) {
      let nextNumber = prevNumber + currentNumber;
      prevNumber = currentNumber
      currentNumber = nextNumber;
      i++;
    }
    return prevNumber;
  }
 
  
class Iterator{
    constructor(currentValue){
        this.currentValue = currentValue;
    }

    current(){
        return  counter(this.currentValue);
    }

    next(){
        this.currentValue = this.currentValue + 1;
        return  counter(this.currentValue);
    }

    prev(){
        this.currentValue = this.currentValue - 1;
        return counter(this.currentValue);
    }

    key(){
        return this.currentValue;
    }

    rewind(){
        this.currentValue = 0;
        return counter(this.currentValue);
    }
}

const iterator = new Iterator(0);
console.log(iterator.current())
console.log(iterator.next())
console.log(iterator.prev())
console.log(iterator.key())
console.log(iterator.rewind())

module.exports = Iterator;