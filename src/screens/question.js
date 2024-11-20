export const generateDifficultyQuestion = (difficulty) => {
    let num1, num2;
    let question;
    let answer;
    // const operations=['+','-','*','/']
  
    switch (difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10); 
        num2 = Math.floor(Math.random() * 10);
        // var operation=operations[Math.floor(Math.random()*operations.length)]
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
  
      case 'medium':
        num1 = Math.floor(Math.random() * 90) + 10; 
        num2 = Math.floor(Math.random() * 90) + 10;
        question = `${num1} - ${num2}`;
        // var operation=operations[Math.floor(Math.random()*operations.length)]
        // question = `${num1} ${operation} ${num2}`;
        answer = num1 - num2;
        break;
  
      case 'hard':
        num1 = Math.floor(Math.random() * 900) + 100; 
        num2 = Math.floor(Math.random() * 900) + 100;
        question = `${num1} * ${num2}`;
        // var operation=operations[Math.floor(Math.random()*operations.length)]
        // question = `${num1} ${operation} ${num2}`;
        answer = num1 * num2;
        break;
  
      case 'advanced':
        num1 = Math.floor(Math.random() * 9000) + 1000; 
        num2 = Math.floor(Math.random() * 9000) + 1000;
        question = `${num1} / ${num2}`;
        // var operation=operations[Math.floor(Math.random()*operations.length)]
        // question = `${num1} ${operation} ${num2}`;
        answer = Math.floor(num1 / num2); 
        break;
  
      default:
        question = 'Invalid difficulty';
        answer = 0;
    }
  
    return { question, answer };
  };