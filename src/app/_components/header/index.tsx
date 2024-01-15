/** components */
import { AccountMenu } from '@/app/_components/header/account'

const Header = () => {
  return (
    <div className="border-b py-2 px-4 flex justify-between items-center flex-shrink-0">
      <h1>Logo</h1>
      <AccountMenu />
    </div>
  )
}

export { Header }
