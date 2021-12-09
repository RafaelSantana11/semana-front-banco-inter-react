import {
  StatementContainer,
  StatementItemContainer,
  StatementItemInfo,
  StatementItemImage,
} from "./styles";
import { format } from "date-fns";
import { FiDollarSign } from "react-icons/fi";

interface StatementItemProps {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
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
          {type === "pay" ? "Pago a" : "Recebido de"}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};

const Statement = () => {
  const statements: StatementItemProps[] = [
    {
      user: {
        firstName: "Rafael",
        lastName: "Santana",
      },
      value: 250,
      type: "pay",
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: "Kendy",
        lastName: "Freo",
      },
      value: 270,
      type: "received",
      updatedAt: new Date(),
    },
  ];
  return (
    <StatementContainer>
      {statements.map((s) => (
        <StatementItem {...s} />
      ))}
    </StatementContainer>
  );
};

export default Statement;
