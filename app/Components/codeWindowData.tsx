import CodeBox from "./codeWindow";

export default function CodeBoxExample() {
  const exampleCode = ` ---
  title: Hello World
  ---
  
  # Yo what's up`;

  return (
    <div className="p-4">
      <CodeBox code={exampleCode} fileName="index" fileExtension="mdx" />
    </div>
  );
}
