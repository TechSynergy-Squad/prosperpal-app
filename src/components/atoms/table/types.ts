import React, { Dispatch, SetStateAction } from 'react';
import { ColumnDef, PaginationState, Row } from '@tanstack/react-table';

export type TableProps<Value> = {
  columns: ColumnDef<Value, any>[];
  data: Value[];
  isLoading?: boolean;
  paginationSizeOptions?: number[];
  pagination?: PaginationState;
  setPagination?: React.Dispatch<React.SetStateAction<PaginationState>>;
  pageCount?: number;
  showPagination?: boolean;
  isChild?: boolean;
  handleSelection?: Dispatch<SetStateAction<boolean>>;
  handleSelectedRows?: Dispatch<SetStateAction<Row<Value>[]>>;
};
