import React, { useEffect } from 'react';

import './App.css';
const App = () => {
  const [iframeSrc, setIframeSrc] = React.useState(null);
  const iframeRef = React.useRef(null);

  const loadIframeWithSrc = () => {
    setIframeSrc(
      'https://pathwaygroup.picsweb.co.uk/Forms/FormSignatures?ReadyToSign=True&LoadDefaultSearch=False'
    );
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Handle mutations as needed
      console.log('Mutation:', mutation);
    });
  });

  React.useEffect(() => {
    loadIframeWithSrc();
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });
  }, []);

  const theframed = document.createElement('iframe');
  console.log(theframed.querySelector('#ReportsAvailable'));

  return (
    <div className="App">
      <iframe
        id="theframe"
        ref={iframeRef}
        src={iframeSrc}
        title="Fullscreen Iframe Example"
        style={{ width: '100vw', height: '900px', border: 'none' }}
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-downloads"
      ></iframe>
    </div>
  );
};

export default App;
