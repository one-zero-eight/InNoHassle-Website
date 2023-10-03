import { IconProps } from "@/lib/types/IconProps";

export function UserFace({ width, height, className, fill }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || 56}
      viewBox="0 -960 960 960"
      width={width || 56}
      className={className}
      fill={fill}
    >
      <path d="M624.565-531.565q22.978 0 39.207-16.228Q680-564.022 680-587t-16.228-39.207q-16.229-16.228-39.207-16.228t-39.087 16.144q-16.108 16.144-16.108 39.207 0 23.062 16.098 39.291 16.099 16.228 39.097 16.228Zm-289.13 0q22.978 0 39.087-16.144 16.108-16.144 16.108-39.207 0-23.062-16.098-39.291-16.099-16.228-39.097-16.228-22.978 0-39.207 16.228Q280-609.978 280-587t16.228 39.207q16.229 16.228 39.207 16.228ZM480-261q66 0 121.5-35.5T682-393h-55.109q-22.521 38.804-61.83 59.587-39.308 20.783-84.587 20.783-45.278 0-84.941-20.283Q355.87-353.196 334.348-393H278q26 61 81 96.5T480-261Zm.013 186.978q-84.209 0-158.285-31.858-74.076-31.859-129.032-86.816-54.957-54.956-86.816-129.019-31.858-74.063-31.858-158.272 0-84.209 31.858-158.285 31.859-74.076 86.778-129.045 54.919-54.969 129-86.935 74.08-31.966 158.309-31.966T638.3-854.27q74.104 31.947 129.056 86.884 54.951 54.938 86.906 129.043 31.956 74.106 31.956 158.363 0 84.242-31.966 158.314-31.966 74.072-86.935 129-54.969 54.927-129.032 86.786-74.063 31.858-158.272 31.858ZM480-480Zm0 337.848q141.418 0 239.633-98.215T817.848-480q0-141.418-98.215-239.633T480-817.848q-141.418 0-239.633 98.215T142.152-480q0 141.418 98.215 239.633T480-142.152Z" />
    </svg>
  );
}
