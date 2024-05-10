"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ClientsTable from "../components/tables/clients-table";

function ClientsTableProvider() {
  return (
    <Provider store={store}>
      <ClientsTable />
    </Provider>
  );
}

export default ClientsTableProvider;
