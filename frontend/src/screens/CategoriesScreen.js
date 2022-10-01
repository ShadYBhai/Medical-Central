import React from "react";
import InstrumentPage from "../components/InstrumentPage";
import Medicine from "../components/Medicine";
import SyringePage from "../components/SyringePage";
import VitaminPage from "../components/VitaminPage";

export const CategoriesScreen = () => {
  return (
    <>
      <Medicine />
      <SyringePage />
      <InstrumentPage />
      <VitaminPage />
    </>
  );
};
