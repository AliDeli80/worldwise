import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const naviagte = useNavigate();

  return (
    <Button
      type={"back"}
      onClick={(e) => {
        e.preventDefault();
        naviagte(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}
