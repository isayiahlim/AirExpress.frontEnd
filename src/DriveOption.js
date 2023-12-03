import React, {useState} from "react";

function TsaCheckBox() {
    const [selectedOption, setSelected] = useState('TSA Precheck');

    const handleOptionChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div> 
            <label>
                <input
                    type = "radio"
                    value = "TSA Precheck"
                    checked = {selectedOption === 'TSA Precheck'}
                    onChange = {handleOptionChange}
                />
                TSA Precheck
            </label>
            <label>
                <input
                    type = "radio"
                    value = "Normal"
                    checked = {selectedOption === 'Normal'}
                    onChange = {handleOptionChange}
                />
                Normal Security Check
            </label>
            <label>
                <input
                    type = "radio"
                    value = "N/A"
                    checked = {selectedOption === 'N/A'}
                    onChange = {handleOptionChange}
                />
                N/A
            </label>
        </div>
    );
}

export default TsaCheckBox;