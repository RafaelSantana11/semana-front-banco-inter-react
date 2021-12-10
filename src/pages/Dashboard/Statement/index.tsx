import {
  StatementContainer,
  StatementItemContainer,
  StatementItemInfo,
  StatementItemImage,
} from "./styles";
import { format } from "date-fns";
import { FiDollarSign } from "react-icons/fi";
import { transactions } from "../../../services/resources/pix";
import { useState, useEffect } from "react";

interface StatementItemProps {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "paid" | "received";
  updatedAt: Date;
}

const StatementItem = ({
  user,
  value,
  type,
  updatedAt,
}: StatementItemProps) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          {type === "paid" ? "Pago a" : "Recebido de"}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};

const Statement = () => {
  const [statements, setStatements] = useState<StatementItemProps[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <StatementContainer>
      {statements.length > 0 && statements.map((s) => <StatementItem {...s} />)}
    </StatementContainer>
  );
};

export default Statement;
