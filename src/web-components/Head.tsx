import React from 'react';

const Head = ({ markup }) => {
  return (
    <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>JKCMS</title>
    </head>
      <body dangerouslySetInnerHTML={{__html: markup }}></body>
    </html>
  );
}

export default Head
