import React, { useContext, useState } from 'react'
import ClickableInput from './ClickableInput'
import { FormBuilderContext, FormElement } from '@/providers/FormBuilderProvider';

interface MultiChoiceProps {
    initialQuestion?: string;
    initialOptions?: string[];
    onChange?: any
}

const MultiChoice = ({ initialQuestion, initialOptions, onChange }: MultiChoiceProps) => {

    let [data, setData] = useState<FormElement>({
        label: "Add Question",
        type: "radio"
    })
    const { addFormElement } = useContext(FormBuilderContext);


    const handleLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, label: e.target.value })
    }

    // const [question, setQuestion] = useState();
    const [options, setOptions] = useState<string[]>([]);

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

    const done = ()=>{
        data.option = options;
        addFormElement(data)
    }

    const [done2, setDone] = useState(false)

    return (
        <div className='flex flex-col gap-2'>
            <ClickableInput type="text" value={data.label} onChange={handleLabel} size='medium' placeholder='Click to edit question' />
            <p>Options:</p>
            {options.map((option, index) => (
                <div key={index} className='flex-center gap-2'>
                    <input type="radio" name='question' />
                    <ClickableInput type="text" value={option} onChange={(newOption: any) => handleOptionChange(index, newOption.target.value)} placeholder='option' />
                </div>
            ))}
            <button onClick={addOption} className='bg-primary1 p-2 rounded-md text-white w-fit'>Add Option</button>
            {
                !done2 
                ?
                    <div className='flex items-end justify-end px-5 py-2 rounded-md bg-primary1 w-fit text-white cursor-pointer' onClick={() => {addFormElement(data); setDone(true)}}>
                        Done
                    </div>

                    :

                    <div className='flex items-end justify-end px-5 py-2 rounded-md bg-red-600 w-fit text-white cursor-pointer'>
                        Remove
                    </div>
            }
        </div>
    )
}

export default MultiChoice
