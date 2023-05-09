import React from "react"

export interface TableColumn<Item> {
  key: keyof Item | string
  title: string
  width?: string | number
  renderCell: (item: Item) => React.JSX.Element
}
