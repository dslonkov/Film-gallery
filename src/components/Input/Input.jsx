import './input.css';

export const Input = ({ placeholder, name, value, onChange, withIcon }) => {
  return (
    <div className="input__container">
      <input
        style={{paddingLeft: withIcon ? '60px' : '16px', width: withIcon ? '306px' : '352px'}}
        type="text"
        className="input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {
        withIcon && (
          <img
            className='search-icon'
            src="./search.svg"
            alt="Поиск"
          />
        )
      }
    </div>
  );
};
