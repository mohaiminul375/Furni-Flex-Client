import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext } from "react";
export const FurnitureContext = createContext();

const FurnitureProvider = ({ children }) => {
  const { data: furniture, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get("https://furni-flex-server-rho.vercel.app/furniture");
      return data;
    },
    queryKey: ["all-furniture"],
  });
  return (
    <FurnitureContext.Provider value={{ furniture, isLoading }}>
      {children}
    </FurnitureContext.Provider>
  );
};

export default FurnitureProvider;
