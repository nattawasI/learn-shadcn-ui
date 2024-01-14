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

  if (isExpand) {
    return (
      <Button
        asChild
        variant="secondary"
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
          variant="secondary"
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
