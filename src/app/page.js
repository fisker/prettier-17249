"use client";
import parser from '@babel/parser'

export default function Home() {
  return (
    <html>
      <body>
        <pre>
          {JSON.stringify(parser.parseExpression('1'), undefined, 2)}
        </pre>
      </body>
    </html>  
  );
}

