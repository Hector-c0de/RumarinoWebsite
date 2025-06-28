import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="Rumarino Logo"
    className={cn(className)}
    width={32}
    height={32}
  />
);