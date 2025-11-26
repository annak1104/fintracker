import RecentTransactions from "./recent-transactions";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl py-5">
      <h1 className="pb-5 text-4xl font-semibold">Dashboard</h1>
      <RecentTransactions />
    </div>
  );
}
