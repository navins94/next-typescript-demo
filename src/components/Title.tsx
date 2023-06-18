import React, { FC } from 'react';

interface TitleProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Title: FC<TitleProps> = ({ text, level = 'h1', className }) => {
  const HeadingTag = level;

  return <HeadingTag className={className}>{text}</HeadingTag>;
};

export default Title;
