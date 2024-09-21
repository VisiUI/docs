import ModernAccordion from './Accordition'

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, particularly single-page applications."
  },
  {
    title: "Why use TypeScript with React?",
    content: "TypeScript adds static typing to JavaScript, which can help catch errors early and improve code quality and maintainability in React projects."
  },
  // Add more items as needed
]

export default function AccorditionData() {
  return (
    <div className="p-4">
      <ModernAccordion items={accordionItems} allowMultiple={true} />
    </div>
  )
}