//1
const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);

//2
function createCounter() {
    let count = 0;
    
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment(); // увеличивает значение счетчика на 1
  counter.decrement(); // уменьшает значение счетчика на 1
  const count = counter.getCount(); 

  
//3
function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
      return element;
    }
    
    for (let child of element.children) {
      const foundElement = findElementByClass(child, className);
      if (foundElement) {
        return foundElement;
      }
    }
    
    return null;
  }
  
  const rootElement = document.getElementById('root');
  const targetElement = findElementByClass(rootElement, 'my-class');
  console.log(targetElement);
  