import React from 'react';

function TableRow({ label, value }) {
  return (
    <tr>
      <td width='70%'>{label}</td>
      <td>{value}</td>
    </tr>
  );
}

export default TableRow;
