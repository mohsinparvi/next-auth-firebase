import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type AuthContextType = {
  user: string | null;
};

export const AuthContext = createContext<any>(undefined);
