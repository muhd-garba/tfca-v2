import { SERVICES } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  return <ServicePageClient svc={svc} others={others} />;
}
