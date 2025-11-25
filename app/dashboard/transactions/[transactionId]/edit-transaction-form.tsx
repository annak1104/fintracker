"use client";

import TransactionForm, {
  transactionFormSchema,
} from "@/components/transaction-form";
import { Category } from "@/types/Category";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";

type Props = {
  categories: Category[];
  transaction: {
    id: number;
    categoryId: number;
    amount: string;
    description: string;
    transactionDate: string;
  };
};

export default function EditTransactionForm({
  categories,
  transaction,
}: Props) {
  const router = useRouter();
  const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {
    const result: any = {};
    if (result.error) {
      toast.error(result.message);
      return;
    }
    toast.success("Transaction updated");
    router.push(
      `/dashboard/transactions?month=${data.transactionDate.getMonth() + 1}&year${data.transactionDate.getFullYear()}`,
    );
    console.log(result.id);
  };
  return (
    <TransactionForm
      defaultValues={{
        amount: Number(transaction.amount),
        categoryId: transaction.categoryId,
        description: transaction.description,
        transactionDate: new Date(transaction.transactionDate),
        transactionType:
          categories.find((category) => category.id === transaction.categoryId)
            ?.type ?? "income",
      }}
      onSubmit={handleSubmit}
      categories={categories}
    />
  );
}
