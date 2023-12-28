import Link from "next/link"


const Navbar = () => {
  return (
    <>
     <h1>Navbar menu</h1> 

     <ul>
      <li><Link href="servicepage">Our services</Link></li>
     </ul>
    </>
  )
}

export default Navbar
