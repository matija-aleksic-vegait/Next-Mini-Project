import Timesheet from "@/features/timesheet/components/timesheet/timesheet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timesheet",
};

export default function Home() {
  return (
    <div className="application">
      <main className="application-content">
        <Timesheet />
      </main>
    </div>
  );
}
