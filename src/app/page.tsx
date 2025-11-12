import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

const Page = () => {

  const something = true

  return (
    <div className={cn("min-h-screen min-w-screen flex items-center justify-center")}>
      <Button variant={"ghost"}>
        Click Me 
      </Button>
    </div>
  )
}

export default Page