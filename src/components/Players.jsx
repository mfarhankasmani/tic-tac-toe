import { useState } from "react";

export default function Players({ name, symbol, isActive, setPlayerName }) {
  const [isEdit, setIsEdit] = useState(true);
  const [value, setValue] = useState(name);

  const handleEditClick = () => {
    setIsEdit((preVal) => !preVal);
    setPlayerName(String(value).toUpperCase(), symbol);
  };

  const btnCaption = isEdit ? "Edit" : "Save";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <span className="player-name">{name}</span>
        ) : (
          <input
            type="text"
            required
            value={value}
            onChange={({ target }) => {
              setValue(target?.value);
            }}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
