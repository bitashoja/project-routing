import React from "react";
import "./WidgetLg.css";
import { Button } from "@mui/material";
import { transactions } from "../../data";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={" WidgetLgButton  " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest TransActions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {transactions.map((transaction) => {
          return (
            <tr className="widgetLgTr">
              <td key={transaction.id} className="widgetLgUser">
                <img src={transaction.img} alt="user" className="widgetSmImg" />
                <span className="widgetLgName">{transaction.customer}</span>
              </td>
              <td className="widgetLgDate">{transaction.data}</td>
              <td className="widgetLgAmount">${transaction.amount}</td>
              <td className="widgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
