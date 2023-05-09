import React, { FC, MouseEventHandler } from "react"

import { TableColumn } from "./types"
import StyledTable from "./StyledTable"

interface Props<Item = any> {
  columns: TableColumn<Item>[]
  data: Item[]
  showInfo?: (id: number) => MouseEventHandler
  className?: string
}

const Table: FC<Props> = ({ data, columns, className, showInfo }) => {
  return (
    <StyledTable
      className={`table-responsive${className ? " " + className : ""}${
        showInfo ? " info" : ""
      }`}
    >
      <div>
        <table className="table">
          <thead>
            <tr>
              {columns.map(({ key, title, width }) => (
                <td key={key.toString()} width={width}>
                  <b>{title}</b>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIdx) => (
              <tr key={rowIdx} onClick={showInfo && showInfo(item.id)}>
                {columns.map(({ key, width, renderCell }, index) => (
                  <td key={key.toString()} width={width}>
                    {renderCell(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyledTable>
  )
}

export default Table
