import { effectTsResolver } from "@hookform/resolvers/effect-ts"
import { useTransition } from "react"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { Link } from "react-router"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useAuth } from "@/hooks/use-auth"

import { cn } from "@/lib/utils"

import { AppRoutes } from "@/config/app-routes"
import { AuthSignInInput } from "@/services/datasources/main-api/inputs"
import { Either } from "effect"

type SignInProps = typeof AuthSignInInput.Type

export function SignIn({ className, ...props }: React.ComponentProps<"div">) {
  const [isLoading, setLoading] = useTransition()
  const { AuthService } = useAuth()

  const form = useForm<SignInProps>({
    resolver: effectTsResolver(AuthSignInInput),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const showToast = (props: { title: string; description: string; detail: unknown }) =>
    toast(props.title, {
      description: (
        <>
          <p>{props.description}</p>
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(props.detail || {}, null, 2)}</code>
          </pre>
        </>
      ),
      classNames: { content: "flex flex-col gap-2" },
      style: { "--border-radius": "calc(var(--radius)  + 4px)" } as React.CSSProperties,
    })

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    setLoading(async () => {
      AuthService.signIn(data).then((result) =>
        Either.mapBoth(result, {
          onRight: ({ data }) => {
            console.info(data)
            showToast({
              title: "Success: welcome back",
              description: "You are now signed in.",
              detail: data,
            })
            // navigate(AppRoutes.Home.path)
          },
          onLeft: ({ message, description, errors }) => {
            form.setError("email", { type: "submit", message: errors.email?.at(0) })
            form.setError("password", { type: "submit", message: errors.password?.at(0) })
            console.error(errors)
            showToast({ title: message, description, detail: errors })
          },
        })
      )
    })
  }

  return (
    <div className={cn("flex h-full w-full items-center justify-center", className)} {...props}>
      <Card className="max-w-sm min-w-xs sm:w-sm">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your email below to sign into your account</CardDescription>
          <CardAction className="inline-flex items-center">
            <Button
              variant="link"
              type="button"
              nativeButton={false}
              render={<Link to={AppRoutes.Home.path} />}
            >
              Need help?
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-3">
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      autoComplete="email"
                      aria-invalid={fieldState.invalid}
                      disabled={isLoading}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center justify-between">
                      <FieldLabel htmlFor="password">Password</FieldLabel>

                      <Button
                        variant="link"
                        size="sm"
                        nativeButton={false}
                        render={<Link to={AppRoutes.Home.path} />}
                      >
                        Forgot your password?
                      </Button>
                    </div>
                    <Input
                      {...field}
                      id={field.name}
                      // value={Redacted.value(field.value)}
                      // onChange={({ target: { value } }) => field.onChange(Redacted.make(value))}
                      type="password"
                      autoComplete="off"
                      aria-invalid={fieldState.invalid}
                      disabled={isLoading}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Field className="pt-4">
                <Button
                  className="cursor-pointer"
                  type="submit"
                  form="sign-in-form"
                  disabled={isLoading}
                >
                  {isLoading ? "Wait..." : "Sign In"}
                </Button>

                <FieldDescription className="-mb-1 flex flex-col items-center justify-center pt-3">
                  <span className="text-sm">By continuing, you agree to our</span>
                  <span>
                    <Button
                      variant="link"
                      size="sm"
                      nativeButton={false}
                      render={<Link to={AppRoutes.TermsOfUse.path} />}
                    >
                      Terms of Use
                    </Button>
                    <span className="-mx-1.5">and</span>
                    <Button
                      variant="link"
                      size="sm"
                      nativeButton={false}
                      render={<Link to={AppRoutes.PrivacyPolicy.path} />}
                    >
                      Privacy Policy
                    </Button>
                  </span>
                </FieldDescription>
              </Field>
              <FieldSeparator className="-my-1 py-0" />
              <Field>
                <FieldDescription className="flex items-center justify-center">
                  <span>Don&apos;t have an account?</span>
                  <Button
                    variant="link"
                    size="sm"
                    nativeButton={false}
                    render={<Link to={AppRoutes.SignUp.path} />}
                  >
                    Sign up
                  </Button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
