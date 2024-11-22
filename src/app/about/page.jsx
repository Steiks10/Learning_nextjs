"use client"
import {useRouter} from 'next/navigation'

export default function AboutPage(){
    const router = useRouter()
    return <section>
        <h1>
            About
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum debitis illo cupiditate exercitationem. Iure voluptatum dolores aliquid magnam nemo quisquam fugit rem illum distinctio. Labore recusandae eaque, natus debitis necessitatibus iure praesentium quasi reiciendis exercitationem quia fugiat rem aliquam facilis. Tempore quia suscipit praesentium ratione possimus adipisci esse! Numquam eius mollitia, sed deserunt quia placeat at? Commodi aspernatur laudantium similique incidunt iure corporis accusantium, dignissimos atque ullam aliquid facilis quae harum est cumque assumenda voluptas quasi soluta iusto repellendus possimus. Natus obcaecati repudiandae eveniet harum. Accusantium placeat nisi doloremque officia molestias doloribus aliquid voluptatem iure architecto exercitationem. Natus, doloremque voluptate.
        </p>

        {/* <Link href="/"> */}
        <button className='bg-sky-400 px-3 py-2 rounded-md'
        onClick={()=>{
            alert('Executing code')
            router.push('/')
        }}>
            Click
        </button>
        {/* </Link> */}
    </section>
}