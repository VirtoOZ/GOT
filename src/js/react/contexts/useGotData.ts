import { useContext } from "react";
import { GotContext } from "./GotContext";

export const useGotData = () => useContext(GotContext);