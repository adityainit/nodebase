import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import prisma from "@/lib/db"

const Page = async () => {

  const users = await prisma.user.findMany();

  return (
    <div className={cn("min-h-screen min-w-screen flex items-center justify-center")}>
      Hey there 
    </div>
  )
}

export default Page