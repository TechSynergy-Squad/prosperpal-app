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
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Cost</th>
                        <th scope="col" className="px-6 py-3">Start Date</th>
                        <th scope="col" className="px-6 py-3">End Date</th>
                        <th scope="col" className="px-6 py-3">Model</th>
                        <th scope="col" className="px-6 py-3">Year Of Manufacture</th>
                        <th scope="col" className="px-6 py-3">Maintenance </th>
                        <th scope="col" className="px-6 py-3">Insurance </th>
                        <th scope="col" className="px-6 py-3">Repairs  </th>
                    </tr>
                </thead>
                <tbody>
                    {inputs.map((input, index) => (

                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{input.title}</th>
                            <td className="px-6 py-4">{input.description}</td>
                            <td className="px-6 py-4">{input.cost}</td>
                            <td className="px-6 py-4">{input.startDate}</td>
                            <td className="px-6 py-4">{input.endDate}</td>
                            <td className="px-6 py-4">{input.model}</td>
                            <td className="px-6 py-4">{input.yearOfManufacture}</td>
                            <td className="px-6 py-4">{input.maintenance}</td>
                            <td className="px-6 py-4">{input.insurance}</td>
                            <td className="px-6 py-4">{input.repairs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

