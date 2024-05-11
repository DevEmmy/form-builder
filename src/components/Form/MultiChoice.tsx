import React, { useState } from 'react'
import ClickableInput from './ClickableInput'

interface MultiChoiceProps {
    initialQuestion?: string;
    initialOptions?: string[];
    onChange?: any
}

const MultiChoice = ({ initialQuestion, initialOptions, onChange }: MultiChoiceProps) => {
    const [question, setQuestion] = useState(initialQuestion);
    const [options, setOptions] = useState<string[]>([]);

    const handleQuestionChange = (newQuestion: any) => {
        setQuestion(newQuestion.target.value);
        // onChange(newQuestion, options);
    };

    const handleOptionChange = (optionIndex: number, newOption: string) => {
        const newOptions = [...options];
        newOptions[optionIndex] = newOption;
        console.log(newOptions)
        setOptions(newOptions);
        // onChange(question, newOptions);
    };

    const addOption = () => {
        if ((options.length < 1) || (options[options.length - 1]?.length > 0)) {
            const newOptions = [...options, ''];
            setOptions(newOptions);
            // onChange(question, newOptions);
        }

    };

    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type="text" value={question} onChange={handleQuestionChange} size='medium' placeholder='Click to edit question' />
            <p>Options:</p>
            {options.map((option, index) => (
                <div key={index} className='flex-center gap-2'>
                    <input type="radio" name='question' />
                    <ClickableInput type="text" value={option} onChange={(newOption: any) => handleOptionChange(index, newOption.target.value)} placeholder='option' />
                </div>
            ))}
            <button onClick={addOption} className='bg-primary1 p-2 rounded-md text-white w-fit'>Add Option</button>
        </div>
    )
}

export default MultiChoice
