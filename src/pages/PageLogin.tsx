// Components
import { 
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Switch,
  InputFloatingLabel,
  Divider,
} from "@/components"

// Icons
import { Moon, Sun } from "lucide-react"
import AppLogo from "@/icons/AppLogo"
import MetaIcon from "@/icons/MetaIcon"
import AppleIcon from "@/icons/AppleIcon"
import GoogleIcon from "@/icons/GoogleIcon"

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
        <CardHeader className="flex justify-center">
          <div>
            <AppLogo fontSize={ 48 } /> Otter Fam
          </div>
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
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <Divider variant="inset">Or</Divider>

        <CardFooter className="flex-col gap-2">
          <div className="flex justify-between w-full">            
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <AppleIcon />
            </Button>
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <MetaIcon />
            </Button>
            <Button variant="secondary" size="icon" className="size-8 w-20">
              <GoogleIcon />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PageLogin