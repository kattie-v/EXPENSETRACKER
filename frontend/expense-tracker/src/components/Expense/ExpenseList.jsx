import React from "react";
import { LuDownload } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const ExpenseList = ({ transactions, onDelete, onDownload,onEdit }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Tất cả chi tiêu</h5>
        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" /> Tải xuống
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            description={expense.description}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
            onEdit={() => onEdit(expense)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
