import ClientsTableProvider from "@/features/clients/providers/clients-table-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients",
};

function Clients() {
  return (
    <div className="application">
      <main className="application-content">
        <ClientsTableProvider />
      </main>
    </div>
  );
}

export default Clients;
