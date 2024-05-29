import Reports from "@/features/reports/components/reports/reports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports",
};

function ReportsPage() {
  return (
    <div className="application">
      <main className="application-content">
        <Reports />
      </main>
    </div>
  );
}

export default ReportsPage;
