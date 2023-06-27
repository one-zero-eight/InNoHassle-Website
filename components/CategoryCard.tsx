import Link from "next/link";

export type CategoryCardProps = {
  icon: (props: { className?: string; fill?: string }) => React.JSX.Element;
  slug: string;
  title: string;
  shortDescription: string;
}

export default function CategoryCard(props: CategoryCardProps) {
  const path = `/schedule/${props.slug}`

  return (
    <Link
      key={props.slug}
      href={path}
      className="hover:bg-background flex flex-col justify-between items-center border-4 border-border px-4 py-6 my-2 rounded-3xl text-center sm:w-80 lg:w-64 xl:basis-80 sm:w-fit"
    >
      <props.icon
        className="my-1"
        fill={`#9747FF`}
      />
      <p className="text-xl xl:text-2xl py-1 font-semibold">{props.title}</p>
      <p className="text-base xl:text-lg text-white/75">{props.shortDescription}</p>
    </Link>
  )
}