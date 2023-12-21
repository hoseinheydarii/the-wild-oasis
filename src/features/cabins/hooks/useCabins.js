import React from "react";
import { getCabins } from "../../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export const useCabins = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  return { isLoading, cabins, error };
};