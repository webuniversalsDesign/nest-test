import Link from "next/link"

const page = () => {
  return (
    <>
     <h1>Welcome to our services page choose our below services</h1> 
     <ul>
        <li><Link href="/servicepage/Service-1">Servise 1</Link></li>
        <li><Link href="/servicepage/Service-2">Servise 2</Link></li>
        <li><Link href="/servicepage/Service-3">Servise 3</Link></li>
        <li><Link href="/servicepage/Service-4">Servise 4</Link></li>
     </ul>
    </>
  )
}

export default page
