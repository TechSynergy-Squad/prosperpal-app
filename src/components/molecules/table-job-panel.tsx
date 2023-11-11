import React from "react";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Panel } from "@project/components";
import { JobPanelProps, JobProps } from "./types";

export const TableJobPanel = ({ className, jobs }: JobPanelProps) => {
  const data = jobs;
  const columnHelper = createColumnHelper<JobProps>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Job Name",
    }),
    columnHelper.accessor("clock", {
      cell: (info) => info.getValue(),
      header: "Clock in Time",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Panel className="table-job-panel">
      <table className="w-full space-y-3">
        <thead className="border border-transparent border-b-gray-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="mb-4" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row, i) => (
            <tr className="even:bg-gray-600" key={row.id}>
              {row.getVisibleCells().map((cell, c) => (
                <td
                  key={cell.id}
                  className="odd:rounded-s-lg even:rounded-e-lg"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
};
