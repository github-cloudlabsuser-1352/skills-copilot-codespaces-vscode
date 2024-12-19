import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    // Split the sentence into words, reverse the array, and join it back into a string
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    

const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']