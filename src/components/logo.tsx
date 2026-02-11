import { Link } from "react-router"

import { ButterflyIcon } from "@phosphor-icons/react"

import { AppRoutes } from "@/config/app-routes"

export function Logo() {
  return (
    <Link to={AppRoutes.Home.path}>
      <div className="group flex items-start rounded-tr-4xl rounded-bl-3xl py-1">
        <ButterflyIcon
          size={24}
          weight="duotone"
          className="text-primary -ml-1 rotate-340 opacity-80 group-hover:opacity-100"
          aria-hidden
        />
        <span className="mt-2 -mb-1 pr-3 font-serif text-3xl font-semibold opacity-80 text-shadow-sm group-hover:opacity-100">
          lillia
        </span>
      </div>
    </Link>
  )
}
