export default async function TransactionIdPage({
  params,
}: {
  params: Promise<{ transactionId: string }>;
}) {
  const paramsValues = await params;
  return <div>transaction {paramsValues.transactionId}</div>;
}
