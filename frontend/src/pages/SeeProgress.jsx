import React, { useEffect, useState } from "react";
import Nav from "../componets/Nav";
import Meta from "../componets/Meta";
import services from "../services/services";
import { useUserContext } from "../contexts/UserContext";
import { formatCurrency } from "../utilities/currency";

export default function SeeProgress() {
  const { token } = useUserContext();
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const _goals = await services.getGoals(token);
        setGoals(_goals);
      } catch (e) {}
    };
    getGoals();
  }, []);
  return (
    <div>
      <Nav name="Ver Progreso" />
      {goals.map((goal, index) => {
        return (
          <Meta
            key={`goal_${index}`}
            meta={goal.name}
            ahorrado={formatCurrency(goal.saved)}
            restante={formatCurrency(goal.rest)}
          />
        );
      })}
    </div>
  );
}
