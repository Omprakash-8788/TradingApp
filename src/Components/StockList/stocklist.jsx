import React from "react";
import { Stocks } from "../Header/HeaderSearch/API";
import "./stocklist.css";
import { TableRow } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddStocks from "./addStock";

const StockList = () => {
  return (
   <div className="stocklist-container">
    <h2>Stock Details</h2>
    <div className="stocklist-table-container">
         
      <table className="stocklist-custom-table">
        <thead>
          <TableRow>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Add Stock</th>
          </TableRow>
        </thead>
        <tbody>
          {Stocks.map((item, index) => (
            <TableRow sx={{
                "&:nth-of-type(even)": {
                  backgroundColor: "#f2f2f2",
                  fontWeight: "700",
                },
              }} key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.company}</td>
              <td className="stocklist-addicon"><AddStocks value="Add" /></td>
              {/* <AddStocks/> */}
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default StockList;
