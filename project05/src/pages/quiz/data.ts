export interface DataType {
  question: string
  options: string[]
  answer: string
}

export const data: DataType[] = [
  {
    question: 'In which HTML element do we put in JavaScript code?',
    options: ['js', 'script', 'body', 'link'],
    answer: 'script',
  },
  {
    question: 'Which HTML attribute is used to reference an external JavaScript file?',
    options: ['src', 'rel', 'type', 'href'],
    answer: 'src',
  },
  {
    question: 'How would you write hello in a alert box?',
    options: ["msg('Hello')", "alertbox('hello')", "document.write('Hello')", "alert('Hello')"],
    answer: "alert('Hello')",
  },
  {
    question: 'JavaScript is directly related to the "Java" programming?',
    options: ['true', 'false'],
    answer: 'false',
  },
  {
    question: 'A varable in JavaScript must start with which special character?',
    options: ['@', '$', '#', 'No special character'],
    answer: 'No special character',
  },
]
