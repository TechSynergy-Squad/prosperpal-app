import React, { useEffect } from "react";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

//import { ActivityLoader } from "../activity-loader";
/* import { NextIcon, PrevIcon } from "@project/assets"; */
import { TableProps } from "./types";

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  isLoading = false,
  isChild = false,
  pagination,
  setPagination,
  pageCount = 1,
  paginationSizeOptions = [10, 20, 30, 40, 50],
  ...props
}: TableProps<T>) => {
  const instance = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    pageCount: pageCount,
  });

  useEffect(() => {
    props.handleSelection &&
      props.handleSelection(
        instance.getIsSomeRowsSelected() || instance.getIsAllRowsSelected()
      );
    props.handleSelectedRows &&
      props.handleSelectedRows(instance.getSelectedRowModel().flatRows);
  }, [instance.getIsSomeRowsSelected(), instance.getIsAllRowsSelected()]);

  return (
    <div>
      <div className="rounded-lg px-2 text-xs">
        <table className="min-w-full table-auto border-separate border-spacing-y-1 text-left">
          <thead className={`${isChild ? "text-black" : "text-white"}`}>
            {instance.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className={`${isChild ? "" : "bg-primary"}`}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="p-2 capitalize first:rounded-l-lg last:rounded-r-lg"
                  >
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
          <tbody
            className={`${isChild ? "text-[#AEAEAE]" : " text-tableBody"}`}
          >
            {instance.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`${isChild ? "divide-y" : "even:bg-table"}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`${
                      (!isChild &&
                        "p-2 first:rounded-l-lg last:rounded-r-lg") ||
                      "px-2"
                    } `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h-2" />
      {pagination && (
        <div className="flex items-center gap-2 px-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded border bg-tertiary text-center"
            onClick={instance.previousPage}
            disabled={!instance.getCanPreviousPage() || isLoading}
          >
            {"<<"}
          </button>
          {Array.from(Array(instance.getPageCount()).keys()).map((index) => {
            const current = instance.getState().pagination.pageIndex;

            let before = current - 2;
            if (before < 0) {
              before = 0;
            }

            let after = current + 2;
            if (after < 0) {
              after = instance.getState().pagination.pageIndex;
            }

            if (
              index === 0 ||
              index === instance.getPageCount() - 1 ||
              (index >= before && index <= after)
            ) {
              return (
                <button
                  key={index}
                  className={`h-8 w-8 rounded ${
                    index === instance.getState().pagination.pageIndex
                      ? "bg-primary text-white"
                      : "bg-tertiary text-primary"
                  }`}
                  onClick={() => instance.setPageIndex(index)}
                  disabled={isLoading}
                >
                  {index + 1}
                </button>
              );
            }

            return null;
          })}
          <button
            className="flex h-8 w-8 items-center justify-center rounded border bg-tertiary"
            onClick={instance.nextPage}
            disabled={!instance.getCanNextPage() || isLoading}
          >
            {">>"}
          </button>
          <select
            value={instance.getState().pagination.pageSize}
            onChange={(e) => {
              instance.setPageSize(Number(e.target.value));
            }}
            className="flex h-8 w-24 items-center rounded-sm border-none bg-tertiary px-2 text-xs focus:border-primary focus:ring-0"
            disabled={isLoading}
          >
            {paginationSizeOptions.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} / page
              </option>
            ))}
          </select>
          {/*   <ActivityLoader isLoading={isLoading} /> */}
        </div>
      )}
    </div>
  );
};
