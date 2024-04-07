import './paragraph.css';

export const Paragraph = ({text, size}) => {
  return (
    <div className='paragraph' style={{fontSize: `${size}px`}}>
      {text}
    </div>
  );
};
