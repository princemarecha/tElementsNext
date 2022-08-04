import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tw-elements'


export default function Home() {
  return (
    <div >
      <Head>
          <title>Pakaipa</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
          
      </Head>
      <h1>sadza</h1>

        <div
            className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"
            data-mdb-ripple="true" data-mdb-ripple-color="light"
          >
            <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" className="max-w-xs" alt="Louvre" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: `rgba(251, 251, 251, 0.2)`}}></div>
            </a>
          </div>


            </div>

            
  )
}
