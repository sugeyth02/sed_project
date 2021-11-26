import React, { useEffect, useState } from "react";
import Nav from "../componets/Nav";
import User from "../componets/User";
import Box from "../componets/Box";
import services from "../services/services";
import { useUserContext } from "../contexts/UserContext";
import { formatCurrency } from "../utilities/currency";

export default function Admin() {
  const { token } = useUserContext();
  const [users, setUsers] = useState([]);
  const [amountSaved, setAmountSaved] = useState(0);
  const [activeGoals, setActiveGoals] = useState(0);

  useEffect(() => {
    const prepairThings = async () => {
      try {
        const _amountsaved = await services.getTotalSaved(token);
        setAmountSaved(_amountsaved.totalSaved);
        console.log(amountSaved);
        const _activeGoals = await services.getGoalTotalState(token);
        setActiveGoals(_activeGoals);
        const _users = await services.getAllUsers(token);
        setUsers(_users);
      } catch (e) {}
    };
    prepairThings();
  }, []);

  return (
    <div>
      <Nav name="Administrador" />
      <div className="boxconatiner">
        {console.log(amountSaved)}
        <Box name="Total Ahorrado" value={formatCurrency(amountSaved)}></Box>
        <Box name="Total de Metas Cumplidas" value={activeGoals.active}></Box>
      </div>
      {users.map((user, index) => {
        return (
          <User
            key={`user_${index}`}
            name={user.name}
            active={user.activeGoals}
            inactive={user.inactiveGoals}
            saved={formatCurrency(user.saved)}
          />
        );
      })}
    </div>
  );
}
