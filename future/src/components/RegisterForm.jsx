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

export function RegisterForm({
  className,
  isOpen,
  onClose = () => {},
  onSwitchToLogin = () => {},
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
      <div
        className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="bg-white rounded-xl relative z-10 w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Register your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="m@example.com" required autoFocus />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                  </div>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <div className="mt-2">
                    <Button className="w-full cursor-pointer border-2 hover:bg-black hover:text-white" type="submit">Register</Button>
                  </div>
                </Field>
                <FieldDescription className="text-center mt-2">
                    Already have an account?{" "}
                    <a
                        className="cursor-pointer"
                        onClick={() => onSwitchToLogin()}
                    >
                    Login
                    </a>
                </FieldDescription>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}