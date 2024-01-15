/** libs */
import { usePathname } from 'next/navigation'

/** components */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type MenuItemProps = {
  isExpand: boolean
  icon: JSX.Element
  label: string
  href: string
}

const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { isExpand, icon, label, href } = props

  const pathname = usePathname()

  const isActive = pathname === href

  if (isExpand) {
    return (
      <Button
        asChild
        variant={isActive ? 'default' : 'secondary'}
        className="justify-start"
      >
        <Link href={href}>
          {icon}
          <span className="truncate ml-2">{label}</span>
        </Link>
      </Button>
    )
  }
  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        onMouseOver={(e) => console.log(e)}
      >
        <Button
          asChild
          variant={isActive ? 'default' : 'secondary'}
          size="icon"
        >
          <Link href={href}>{icon}</Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  )
}

export { MenuItem }
