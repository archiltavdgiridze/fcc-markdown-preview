import { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const [text, setText] = useState(`
  # H1 
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\` 
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div className="editor">
        <h3>Editor</h3>
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div className="preview">
        <h3>Previewer</h3>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
