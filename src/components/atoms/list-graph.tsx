import React, { useMemo } from "react";
import { ListGraphInputProps } from "./types";
import { createColumnHelper } from "@tanstack/react-table";
import { Button, Table } from ".";
import toast from "react-hot-toast";
import { useGoalsQuery } from "../../queries";

interface Props {
  inputs: ListGraphInputProps[];
}

type Goal = {
  goalId: number;
  description: string;
  assertType: string;
  startDate: string;
  endDate: string;
  model: string;
  userId: string;
  yearOfManufacture: string;
  maintenance: string;
  insurance: string;
  repairs: string;
  status?: string;
};

export const ListGraph: React.FC<Props> = ({ inputs }) => {
  const isFeatureOn = false;
  const { data } = useGoalsQuery();

  const onViewGoal = (id: string) => {
    toast.success("Goal Viewed");
  };

  const columnHelper = createColumnHelper<Goal>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("startDate", {
        cell: (info) => info.getValue(),
        header: () => <span>Start Date</span>,
      }),
      columnHelper.accessor("description", {
        cell: (info) => info.getValue(),
        header: () => <span>description</span>,
      }),
      columnHelper.accessor("endDate", {
        cell: (info) => info.getValue(),
        header: () => <span>End date</span>,
      }),

      columnHelper.accessor("status", {
        cell: ({ row }) => (
          <section className="text-xs">
            <span
              className={`${
                new Date(row.original.endDate).toLocaleDateString() >
                new Date().toLocaleDateString()
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {new Date(row.original.endDate).toLocaleDateString() >
              new Date().toLocaleDateString()
                ? "Active"
                : "Inactive"}
            </span>
          </section>
        ),
        header: () => <span>Status</span>,
      }),
      columnHelper.display({
        id: "Actions",
        cell: ({ row }) => {
          return (
            <Button
              shape="none"
              onClick={() => onViewGoal(row?.original?.userId ?? "")}
            >
              View
            </Button>
          );
        },
      }),
    ],
    [data]
  );
  return isFeatureOn ? (
    <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Cost
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              Model
            </th>
            <th scope="col" className="px-6 py-3">
              Year Of Manufacture
            </th>
            <th scope="col" className="px-6 py-3">
              Maintenance{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              Insurance{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              Repairs{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {inputs.map((input, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {input.title}
              </th>
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
  ) : (
    <>
      <div className="recent-adverts rounded-lg bg-white pb-4 drop-shadow-lg ">
        <Table
          columns={columns}
          data={
            data ?? [
              {
                goalId: 1,
                description: "Buy a VW Beetle",
                assertType: "assertType",
                startDate: "10-10-2023",
                endDate: "31-12-2023",
                model: "VolksWagen",
                userId: "userId",
                yearOfManufacture: "2021",
                maintenance: "maintenance",
                insurance: "insurance",
                repairs: "repairs",
                status: "status",
              },
              {
                title: "Buy a car",
                description: "Audi A3 Sedan 2021",
                cost: "R687,444",
                startDate: "2023-11-01",
                endDate: "2024-06-01",
                model: "Audi",
                yearOfManufacture: "2023",
                maintenance: "R6000",
                insurance: "R2000",
                repairs: "R3000",
              },
              {
                title: "Buy a car",
                description: "Suzuki Dzire",
                cost: "R687,444",
                startDate: "2023-11-01",
                endDate: "2024-06-01",
                model: "Audi",
                yearOfManufacture: "2023",
                maintenance: "R6000",
                insurance: "R2000",
                repairs: "R3000",
              },
            ]
          }
          isLoading={false}
        />
      </div>
    </>
  );
};
