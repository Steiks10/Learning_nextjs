import Link from 'next/link';
export default function TiendaLayout({children}){
    return <>
        <nav>

            <h3>Seccion tienda</h3>
            <ul>
                <li>
                    <Link href="/tienda/category">
                    Categorias
                    </Link>        
                </li>
                
                <li>Productos</li>
            </ul>
        </nav>
        {children}
    </>
}