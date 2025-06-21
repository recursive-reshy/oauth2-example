// Components
import { 
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Switch,
  InputFloatingLabel,
} from "@/components"

// Icons
import { Moon, Sun } from "lucide-react"

// Contexts
import { useTheme } from "@/context"

const PageLogin = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Switch
        className="absolute top-4 right-4"
        defaultChecked={ theme == 'light' }
        onCheckedChange={ () => setTheme( theme == 'dark' ? 'light' : 'dark' ) }
        checkedIcon={ ( props ) => <Sun { ...props } /> }
        unCheckedIcon={ ( props ) => <Moon { ...props } /> }
      />
      <Card className="max-w-sm w-xs">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <InputFloatingLabel
                  id="email"
                  type="email"
                  label="Email"
                  required
                  handleChange={ ( e ) => {
                    console.log( e.target.value )
                  } }
                />
              </div>
              <div className="grid gap-2">
                <InputFloatingLabel
                  id="password"
                  type="password"
                  label="Password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PageLogin