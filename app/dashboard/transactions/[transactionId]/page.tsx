import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategories } from "@/data/getCategories";
import getTransaction from "@/data/getTransaction";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeleteTransactionDialog } from "./delete-transactions-dialog";
import EditTransactionForm from "./edit-transaction-form";

export default async function EditTransactionPage({
  params,
}: {
  params: Promise<{ transactionId: string }>;
}) {
  const paramsValues = await params;
  const transactionId = Number(paramsValues.transactionId);

  if (isNaN(transactionId)) {
    notFound();
  }

  const categories = await getCategories();
  const transaction = await getTransaction(transactionId);

  if (!transaction) {
    notFound();
  }
  return (
    <div className="mx-auto max-w-7xl py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard/transactions">Transactions</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Edit transaction</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="mt-4 max-w-3xl">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span>Edit Transaction</span>
            <DeleteTransactionDialog
              transactionId={transaction.id}
              transactionDate={transaction.transactionDate}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EditTransactionForm
            transaction={transaction}
            categories={categories}
          />
        </CardContent>
      </Card>
    </div>
  );
}
