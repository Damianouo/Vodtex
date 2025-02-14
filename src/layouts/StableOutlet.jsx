import { useState } from "react";
import { useOutlet } from "react-router";

function StableOutlet() {
  const o = useOutlet();

  const [outlet] = useState(o);

  return outlet;
}

export default StableOutlet;
