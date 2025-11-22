import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

export function LoginForm({
  className,
  isOpen,
  onClose = () => {},
  onSwitchToRegister = () => {},
  bgClass = 'bg-gray-300 dark:bg-zinc-700',
  textClass = 'text-zinc-950 dark:text-gray-100',
  ...props
}) {
  useEffect(() => {
    if (!isOpen) return
      function onKey(e) {
        if (e.key === "Escape") onClose()
      }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center", className)}
      aria-modal="true"
      role="dialog"
      {...props}
    >
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`${bgClass} rounded-xl relative z-10 w-full max-w-md`}>
        <Card>
          <CardHeader>
              <CardTitle className={textClass}>Login to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="email" className={textClass}>Email</FieldLabel>
                    <Input id="email" type="email" placeholder="m@example.com" required autoFocus className={`bg-white dark:bg-zinc-800 ${textClass}`} />
                </Field>
                <Field>
                  <div className="flex items-center">
                      <FieldLabel htmlFor="password" className={textClass}>Password</FieldLabel>
                      <a
                        href="#"
                        className={`ml-auto inline-block text-sm underline-offset-4 hover:underline ${textClass}`}
                        onClick={()=> console.log("Forget Password Clicked")}
                        >
                        Forgot your password?
                      </a>
                  </div>
                    <Input id="password" type="password" required className={`bg-white dark:bg-zinc-800 ${textClass}`} />
                </Field>
                <Field>
                  <div className="mt-2">
                      <Button className={`w-full cursor-pointer border-2 hover:bg-black hover:text-white ${textClass}`} type="submit">Login</Button>
                  </div>
                    <FieldDescription className={`text-center mt-3 ${textClass}`}>
                      Don&apos;t have an account? {" "}
                      <a 
                        className={`cursor-pointer ${textClass}`} 
                        onClick={() => onSwitchToRegister()}>
                        Sign up
                      </a>
                    </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}