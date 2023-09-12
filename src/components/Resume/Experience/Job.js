import React from 'react';
import Markdown from 'markdown-to-jsx';

const Job = ({ data: { name, position, url, startDate, summary } }) => (
  <article className='jobs-container'>
    <header>
      <h4>
        <a href={url}>{name}</a> - {position}
      </h4>
      <p className='daterange'> {startDate}</p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
  </article>
);

export default Job;
