export const dynamicParams = false;

export async function generateStaticParams() {
  return ["1", "2", "3", "4", "5"].map((id) => ({ id }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div>Item {id}</div>;
}
