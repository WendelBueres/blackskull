import { ListItem } from "@mui/material";
import { goals } from "../source-data";
import CardGoal from "./CardGoal";

export default function ListGoal() {
  return (
    <ListItem
      sx={{
        width: "100%",
        ml: "5px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {goals.map((goal) => (
        <CardGoal goal={goal.name} image={goal.image} key={goal} />
      ))}
    </ListItem>
  );
}
