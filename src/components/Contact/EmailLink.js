import React, { useState, useEffect, useRef } from 'react';

const validateText = (text) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = ['seidbedelov00'];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = ({ loopMessage }) => {
  const hold = 50;
  const delay = 50;

  const [idx, updateIter] = useState(0);
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        if (loopMessage) {
          updateIter(0);
          updateChar(0);
        } else {
          setIsActive(false);
        }
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null,
  );

  return (
    <div
      className='inline-container'
      style={validateText(message) ? {} : { color: 'red' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <a href={validateText(message) ? `mailto:${message}@icloud.com` : ''}>
        <span>{message}</span>
        <span>@icloud.com</span>
      </a>
    </div>
  );
};

export default EmailLink;
