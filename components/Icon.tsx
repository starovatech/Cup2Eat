import {
  BadgeIndianRupee,
  Building2,
  CakeSlice,
  Camera,
  Coffee,
  Gift,
  IceCreamCone,
  Leaf,
  PackageCheck,
  PartyPopper,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trash2,
  Truck,
  UtensilsCrossed,
  type LucideProps,
} from "lucide-react";

/** Maps icon names used in /data files to lucide-react components. */
const icons = {
  BadgeIndianRupee,
  Building2,
  CakeSlice,
  Camera,
  Coffee,
  Gift,
  IceCreamCone,
  Leaf,
  PackageCheck,
  PartyPopper,
  Recycle,
  ShieldCheck,
  Sparkles,
  Trash2,
  Truck,
  UtensilsCrossed,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles;
  return <Cmp aria-hidden="true" strokeWidth={1.75} {...props} />;
}
