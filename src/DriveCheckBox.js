import React, {useState} from 'react';

function DriveCheckBox() {
    const [selectedOption, setSelected] = useState('Driving and Parking');

    const handleOptionChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div> 
            <label>
                <input
                    type = "radio"
                    value = "Driving and Parking"
                    checked = {selectedOption === 'Driving and Parking'}
                    onChange = {handleOptionChange}
                />
                Driving and Park
            </label>
            <label>
                <input
                    type = "radio"
                    value = "Getting Dropped Off"
                    checked = {selectedOption === 'Getting Dropped Off'}
                    onChange = {handleOptionChange}
                />
                Getting Dropped Off
            </label>
            <label>
                <input
                    type = "radio"
                    value = "Picking Up"
                    checked = {selectedOption === 'Picking Up'}
                    onChange = {handleOptionChange}
                />
                Picking Up
            </label>
        </div>
    );
}

export default DriveCheckBox;