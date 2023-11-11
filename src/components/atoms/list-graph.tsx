import React from "react";
import { ListGraphInputProps } from "./types";



interface Props {
    inputs: ListGraphInputProps[];
}

export const ListGraph: React.FC<Props> = ({ inputs }) => {
    return (
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {inputs.map((input, index) => (

                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{input.title}</th>
                            <td>{input.date}</td>
                            <td>{input.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

