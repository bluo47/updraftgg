import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function LogoButton() {
    const { theme } = useTheme();

    return (
        <Button variant="ghost" className='p-6'>
          <img
            src={theme == 'dark' ? "/logo.png" : "/logo-invert.png"}
            alt="Logo"
            className="h-7 w-7 rounded-md"
          />
          <h1 style={{fontFamily:"Lexend"}} className="text-xl">UPDRAFT.GG</h1>
        </Button>
  )
}