import Image from "next/image";

type CategoryCardProps = {
  title: string;
  imageUrl: string;
  description?: string;
};

export function CategoryCard({ title, imageUrl, description }: CategoryCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44">
        <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        {description ? <p className="mt-1 text-sm text-neutral-600">{description}</p> : null}
      </div>
    </article>
  );
}
