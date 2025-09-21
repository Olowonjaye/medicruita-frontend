import { JSX, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { Link, type LinkProps } from "react-router-dom";
import { ClipLoader } from "react-spinners";

type Type = "button" | "submit" | "reset" | "link";

type BaseButtonTypeProps = HTMLMotionProps<"button"> & {
  color?: "primary" | "secondary" | "[#FFFFFF]" | "danger" | "regular" | "regular2";
  className?: string;
};

type BaseLinkTypeProps = LinkProps & {
  color?: "primary" | "secondary" | "[#FFFFFF]";
  className?: string;
};

type BaseButtonProps = {
  icon?: ReactNode;
  type?: Type;
  text: string;
  loading?: boolean;
} & (BaseButtonTypeProps | BaseLinkTypeProps);

const motionProps = {
  initial: {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  whileHover: { scale: 1.01, boxShadow: "0 12px 18px -3px rgb(0 0 0 / 0.1)" },
  whileTap: { scale: 0.99, boxShadow: "0 8px 12px -2px rgb(0 0 0 / 0.1)" },
};

export function BaseButton({
  icon,
  type,
  text,
  className,
  loading,
  color = "primary",
  ...props
}: BaseButtonProps): JSX.Element {
  const classes = clsx(
    "flex h-[44px]  cursor-pointer items-center justify-center gap-2 [#FFFFFF]space-nowrap rounded-md border px-4 py-2 text-sm font-semibold xs:text-base sm:h-11  sm:py-3",
    {
      "border-bg-[#FFFFFF] bg-[#FFFFFF] text-gray-600": color === "[#FFFFFF]",
      "border-sky-600 bg-sky-600 text-[#FFFFFF] ": color === "primary",
      "border-black bg-black text-[#FFFFFF]": color === "secondary",
      "border-red-600 bg-red-600 text-[#FFFFFF]": color === "danger",
      " bg-[#0173B133] text-[#0173B1]": color === "regular",
      "bg-[#00000066] opacity-30 text-[black]": color === "regular2",
    },
    className
  );
  if (type === "link") {
    return (
      <Link
        {...(props as BaseLinkTypeProps)}
        {...motionProps}
        className={classes}>
        {text}
        {icon}
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      {...(props as BaseButtonTypeProps)}
      type={type}
      className={classes}>
      {!loading && (
        <>
          {text}
          {icon}
        </>
      )}
      {loading && <ClipLoader size={12} color="#ffffff" />}
    </motion.button>
  );
}
