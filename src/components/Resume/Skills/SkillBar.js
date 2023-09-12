import React from 'react';

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;

  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0],
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className='skillbar clearfix'>
      <div className='skillbar-title' style={titleStyle}>
        <span>{title}</span>
      </div>
      <div className='skillbar-bar' style={barStyle} />
      <div className='skill-bar-percent'>{competency} / 5</div>
    </div>
  );
};

export default SkillBar;
