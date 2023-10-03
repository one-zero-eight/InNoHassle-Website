import { IconProps } from "@/lib/types/IconProps";

export function ExitIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={48}
      width={48}
      {...props}
    >
      <path d="M179.761-114.022q-27.698 0-48.034-20.265-20.336-20.266-20.336-47.865v-595.696q0-27.697 20.336-48.033 20.336-20.337 48.034-20.337h292.674v68.37H179.761v595.696h292.674v68.13H179.761Zm486.478-182.369-48.978-48.5 101.043-101.044H371.891v-68.13h344.413L615.261-615.109l48.978-48.5L848.609-479l-182.37 182.609Z" />
    </svg>
  );
}
