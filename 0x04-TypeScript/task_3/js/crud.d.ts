import { RowID, RowElement } from './interface.ts';

export function insertRow(row: RowElement);
export function deleteRow(rowId: RowID);
export function updateRow(rowId: RowID, row: RowElement);