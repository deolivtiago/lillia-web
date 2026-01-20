import { Link } from "react-router"

import { AppRoutes } from "@/config/app-routes"

export function Logo() {
  return (
    <Link to={AppRoutes.Home.path}>
      <div className="hover:bg-accent flex flex-row items-end justify-end rounded-tr-[5rem] rounded-bl-[3rem] p-0.5 pl-3 transition duration-500 ease-in-out">
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
