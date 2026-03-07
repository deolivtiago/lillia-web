import { AppRoutes } from "@/config/app-routes"
import { useAuth } from "@/contexts/auth-context"
import { Navigate } from "react-router"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.SignIn.path} replace />
  }

  return <>{children}</>
}
