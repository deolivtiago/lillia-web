import { Link } from "react-router"

import { AppRoutes } from "@/config/app-routes"

export function Logo() {
  return (
    <Link to={AppRoutes.Home.path}>
      <div className="hover:bg-chart-3 dark:hover:bg-chart-5 mt-10 flex h-2 w-17 flex-row items-end justify-end rounded-tl-2xl rounded-br-4xl p-0.5 pl-2 transition duration-500 ease-in-out">
        <span className="font-cursive -mt-1.25 inline-flex rotate-4 text-5xl font-medium text-shadow-lg dark:text-zinc-300">
          L
        </span>
        <span className="-ml-1 font-serif text-3xl font-light text-shadow-lg dark:text-zinc-300">
          illia
        </span>
      </div>
    </Link>
  )
}
