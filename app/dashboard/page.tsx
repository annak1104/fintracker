import CashFlow from "./cashflow";
import RecentTransactions from "./recent-transactions";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ cfyyear: string }>;
}) {
  const today = new Date();
  const searchParamsValues = await searchParams;
  let cfYear = Number(searchParamsValues.cfyyear ?? today.getFullYear());
  if (isNaN(cfYear)) {
    return (cfYear = today.getFullYear());
  }
  return (
    <div className="mx-auto max-w-7xl py-5">
      <h1 className="pb-5 text-4xl font-semibold">Dashboard</h1>
      <CashFlow year={cfYear} />
      <RecentTransactions />
    </div>
  );
}
