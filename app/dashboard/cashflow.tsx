import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getAnnualCashflow } from "@/data/getAnualCashflow";
import { getTransactionYearsRange } from "@/data/getTransactionYearRange";
import CashflowFilters from "./cashflow-filters";

export default async function CashFlow({ year }: { year: number }) {
  const [cashflow, yearsRange] = await Promise.all([
    getAnnualCashflow(year),
    getTransactionYearsRange(),
  ]);
  return (
    <Card className="mb-5">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Cashflow</span>
          <CashflowFilters year={year} yearsRange={yearsRange} />
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
