import Link from "next/link"

function NavLink({ children, path, isActive }){
  return(
    <li>
      <Link href={path} onClick={() => isActive(false)}>{children}</Link>
    </li>
  )
}

export default NavLink