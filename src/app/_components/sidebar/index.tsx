'use client'

/** libs */
import { useState } from 'react'

/** components */
import { ResizablePanel } from '@/components/ui/resizable'
import { LayoutDashboard } from 'lucide-react'
import { MenuItem } from '@/app/_components/sidebar/menu-item'
import { TooltipProvider } from '@/components/ui/tooltip'

type SidebarMenuType = {
  id: string
  label: string
  href: string
  icon: JSX.Element
}

const sidebarMenu: SidebarMenuType[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-4 h-4 flex-shrink-0" />,
  },
]

const Sidebar = (): JSX.Element => {
  const [expand, setExpand] = useState<boolean>(true)

  return (
    <ResizablePanel
      defaultSize={18.5}
      minSize={3}
      maxSize={18.5}
      className="flex flex-col gap-y-2 p-4"
      onResize={(val) => setExpand(val > 3)}
    >
      <TooltipProvider>
        {sidebarMenu.map((item) => (
          <MenuItem
            key={item.id}
            isExpand={expand}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </TooltipProvider>
    </ResizablePanel>
  )
}

export { Sidebar }
