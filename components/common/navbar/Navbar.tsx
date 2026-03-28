"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAVIGATION_MENU } from "@/lib/constants";
import { IMAGE_CONSTANTS } from "@/lib/img-constants";
import { APP_ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { navbarThemes, type NavbarThemeName } from "./navbar-theme";
import { useFavorites } from "@/contexts/FavoritesContext";

type NavbarProps = {
  theme?: NavbarThemeName;
};

const quickActions = [
  {
    label: "Account",
    href: APP_ROUTES.HOME,
    icon: UserRound,
  },
  {
    label: "Wishlist",
    href: APP_ROUTES.FAVORITES,
    icon: Heart,
    count: 0, // This will be dynamic
  },
  {
    label: "Cart",
    href: APP_ROUTES.HOME,
    icon: ShoppingBag,
    count: 3,
  },
] as const;

const Navbar = ({ theme = "default" }: NavbarProps) => {
  const styles = navbarThemes[theme];
  const { favorites } = useFavorites();

  return (
    <nav className={cn("sticky top-0 z-40", styles.wrapper)}>
      <div className="custom-container">
        <div
          className={cn(
            "flex items-center gap-3 lg:gap-6 xl:gap-8",
            styles.shell
          )}
        >
          <Link
            href={APP_ROUTES.HOME}
            className="flex shrink-0 items-center gap-3"
            aria-label="Moon home"
          >
            <div className="flex flex-col">
              <Image
                className="h-auto w-28 sm:w-32"
                src={IMAGE_CONSTANTS.APP_LOGO}
                alt="Moon marketplace"
                width={500}
                height={90}
              />
              <span className={cn("text-xs", styles.mutedText)}>
                Furniture, decor, and living essentials
              </span>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center gap-4 lg:flex xl:gap-6">
            <ul className="flex shrink-0 items-center gap-5 xl:gap-7">
              {NAVIGATION_MENU.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      styles.navLink,
                      index === 0 && styles.navLinkActive
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="min-w-0 flex-1">
              <div
                className={cn(
                  "flex h-12 items-center gap-2 rounded-full px-2.5",
                  styles.searchWrapper
                )}
              >
                <Search className={cn("ml-1 size-4 shrink-0", styles.searchIcon)} />
                <Input
                  type="search"
                  placeholder="Search products, collections, and inspirations"
                  className={cn("h-auto px-0 py-0", styles.searchInput)}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn("rounded-full px-4", styles.searchButton)}
                >
                  Search
                </Button>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                const displayCount = action.label === "Wishlist" ? favorites.length : ("count" in action ? action.count : 0);

                return (
                  <Button
                    key={action.label}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "relative rounded-full",
                      styles.utilityButton
                    )}
                    asChild
                  >
                    <Link href={action.href} aria-label={action.label}>
                      <Icon className="size-[18px]" />
                      {displayCount > 0 ? (
                        <span
                          className={cn(
                            "absolute -right-1.5 -top-1.5 flex min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                            styles.utilityBadge
                          )}
                        >
                          {displayCount}
                        </span>
                      ) : null}
                    </Link>
                  </Button>
                );
              })}
            </div>

            <Button
              className={cn(
                "h-12 rounded-full px-5 text-sm",
                styles.primaryButton
              )}
            >
              Collections
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn("relative rounded-full", styles.utilityButton)}
              asChild
            >
              <Link href={APP_ROUTES.HOME} aria-label="Cart">
                <ShoppingBag className="size-5" />
                <span
                  className={cn(
                    "absolute -right-1 -top-1 flex min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                    styles.utilityBadge
                  )}
                >
                  3
                </span>
              </Link>
            </Button>

            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("rounded-full", styles.mobileTrigger)}
                >
                  <Menu className="size-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className={cn("p-5", styles.mobileDrawer)}>
                <div className="mt-8 flex flex-col gap-6">
                  <div className={cn("rounded-[28px] p-4", styles.mobileCard)}>
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={cn(
                          "flex size-10 items-center justify-center rounded-2xl text-xs font-semibold uppercase tracking-[0.24em]",
                          styles.logoBadge
                        )}
                      >
                        MM
                      </span>
                      <div>
                        <p className={cn("text-sm font-semibold", styles.text)}>
                          Moon Commerce
                        </p>
                        <p className={cn("text-xs", styles.mutedText)}>
                          Curated pieces for modern spaces
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex h-12 items-center gap-2 rounded-full px-3",
                        styles.searchWrapper
                      )}
                    >
                      <Search className={cn("size-4 shrink-0", styles.searchIcon)} />
                      <Input
                        type="search"
                        placeholder="Search the catalog"
                        className={cn("h-auto px-0 py-0", styles.searchInput)}
                      />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {NAVIGATION_MENU.map((item) => (
                      <li key={item.name}>
                        <DrawerClose asChild>
                          <Link href={item.href} className={styles.mobileNavLink}>
                            {item.name}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-3">
                    {quickActions.map((action) => {
                      const Icon = action.icon;
                      const displayCount = action.label === "Wishlist" ? favorites.length : ("count" in action ? action.count : 0);

                      return (
                        <DrawerClose asChild key={action.label}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "relative h-16 rounded-2xl px-3 text-xs",
                              styles.mobileUtilityItem
                            )}
                            asChild
                          >
                            <Link
                              href={action.href}
                              className="flex-col gap-1.5"
                              aria-label={action.label}
                            >
                              <Icon className="size-4" />
                              <span>{action.label}</span>
                              {displayCount > 0 ? (
                                <span
                                  className={cn(
                                    "absolute right-2 top-2 flex min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                                    styles.utilityBadge
                                  )}
                                >
                                  {displayCount}
                                </span>
                              ) : null}
                            </Link>
                          </Button>
                        </DrawerClose>
                      );
                    })}
                  </div>

                  <DrawerClose asChild>
                    <Button
                      className={cn("h-12 w-full rounded-full", styles.primaryButton)}
                    >
                      Collections
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
