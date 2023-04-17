import { ListItem } from "@mui/material";
import { goals } from "../source-data";
import CardGoal from "./CardGoal";

export default function ListGoal() {
  return (
    <ListItem
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pl: "-5px",
        pr: "5px",
      }}
    >
      {goals.map((goal, index) => (
        <CardGoal
          goal={goal.name}
          image={goal.image}
          key={goal}
          length={goals.length}
          index={index}
        />
      ))}
    </ListItem>
  );
}
