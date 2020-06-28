export function getColumnKey(column) {
  if (column) {
    return column.key || column.title || column.dataIndex;
  }

  return null;
}
