import { createFormSubmission, getEachForm } from '@/helper/requests';
import { FormElement } from '@/providers/FormBuilderProvider';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Props {
    id: string;
    setIsCheckSubmission: any
}

const ViewForm = ({ id, setIsCheckSubmission }: Props) => {
    const [form, setForm] = useState<any>({});
    const [formData, setFormData] = useState<any>({});
    const router = useRouter();

    const fetchForm = async (id: string) => {
        let response = await getEachForm(id);
        setForm(response);
        setIsCheckSubmission(response.isCheckSubmission)
    }

    useEffect(() => {
        fetchForm(id);
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createFormSubmission(id, formData);
            router.push('/success'); // Redirect to success page
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {
                form ?
                    <form onSubmit={handleSubmit} className=' flex flex-col gap-10 '>
                       
                        <div className='container border-t-8 border-t-primary1 flex flex-col gap-2'>
                            <p className="input-large">{form.title}</p>
                            <p className='input-small'>{form.description}</p>
                        </div>

                        {form.fields?.map((field: FormElement, i: number) => (
                            <div key={i} className='container flex flex-col gap-2'>
                                <label htmlFor={field.label}>{field.label}</label>
                                {field.type !== "radio" ?
                                    <input type={field.type} name={field.label} className='border-b' onChange={handleChange} />
                                    :
                                    <>
                                        {field.option?.map((op: string, j) => (
                                            <div key={j} className='flex-center gap-2'>
                                                <input type="radio" name={field.label} value={op} onChange={handleChange} />
                                                <label htmlFor={field.label}>{op}</label>
                                            </div>
                                        ))}
                                    </>
                                }
                            </div>
                        ))}

                        <button type="submit" className='w-full p-4 rounded-md text-white bg-primary1'>
                            Submit
                        </button>
                    </form>
                    :
                    <p>Loading...</p>
            }
        </>
    )
}

export default ViewForm