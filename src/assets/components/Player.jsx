import { useState } from 'react';

export default function Player({ name, symbol, isActive }) {
    const [playerNameChange, setPlayerName]=useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing)=>!editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerName = <span className='player-name'>{playerNameChange}</span>;
    

    if (isEditing) {
        playerName = <input type="text" required value={playerNameChange} onChange={handleChange}></input>;
        
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );

}