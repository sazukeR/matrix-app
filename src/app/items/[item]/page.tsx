import { Metadata } from "next";

interface Props {
 params: { item: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 return {
  title: `Item ${params.item}`,
  description: `This is the item ${params.item}`,
 };
}

export default function ItemPage({ params }: Props) {
 return <h1>{params.item}</h1>;
}
