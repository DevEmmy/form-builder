import { getSubmissionByFormId } from '@/helper/requests';
import React, { useEffect, useState } from 'react'

interface Props {
    id: string;
}

interface DataItem {
    id: string;
    formId: string;
    data: Record<string, string>;
}

const Responses = ({ id }: Props) => {

    let [data, setData] = useState<DataItem[]>([])
    const [keys, setKeys] = useState<any>([])
    const [responses, setResponses] = useState<any>([])

    const fetchDetails = async () => {
        let data = await getSubmissionByFormId(id);
        console.log(data)
        setData(data);
        let kys: string[] = Array.from(new Set(data?.flatMap((item: any) => Object.keys(item.data))))
        setKeys(kys)

        const newData: Record<string, string[]>[] = kys.map(key => ({
            [key]: data.map((item: any) => item.data[key] || '')
        }));
        console.log(newData);
        setResponses(newData);

    }

    useEffect(() => {
        fetchDetails();
    }, [])



    return (
        <div>
            <p className='input-medium'>Responses</p>
            {
                keys &&
                <p className='text-gray-500'>{data.length} responses</p>
            }
            <div className='flex flex-col gap-5 my-5'>
                {
                    keys.map((resp: any, i: string) => {
                        return (
                            <div>
                                <p className='input-medium'>{resp}</p>
                                <div className="flex flex-col gap-2">
                                {
                                    responses[i][resp].map((res: string, i: number) => {
                                        return (
                                            <p className='bg-gray-50 p-3 text-gray-600'>
                                                {res}
                                            </p>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Responses