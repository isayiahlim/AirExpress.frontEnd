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
                    style={{ marginLeft: '50px'}}
                />
                Normal Security Check
            </label>
            <label>
                <input
                    type = "radio"
                    value = "N/A"
                    checked = {selectedOption === 'N/A'}
                    onChange = {handleOptionChange}
                    style={{ marginLeft: '50px'}}
                />
                N/A
            </label>
        </div>
    );
}

export default TsaCheckBox;