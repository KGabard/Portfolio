import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="typo-header-big sm:text-clip">Kevin Gabard</h1>
      <p className="typo-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        aperiam accusantium vitae quaerat ab a soluta nihil dolor illum
        voluptatum ipsa in, omnis odit nam! Dolor deleniti voluptatum quis
        dignissimos temporibus praesentium? Veritatis quas ullam, quasi autem
        obcaecati eveniet reiciendis inventore tenetur rerum nam saepe similique
        iure! Nostrum at hic suscipit soluta perspiciatis perferendis mollitia.
        Itaque debitis libero nisi qui et molestias ea, quia tempora esse iure
        quasi laudantium maxime saepe perspiciatis quam commodi facilis, dicta
        quidem expedita dolorem repellat. Est dolore expedita, possimus rerum
        aliquam adipisci optio beatae laudantium, recusandae nihil omnis
        tenetur? Saepe, qui quod. At, totam eveniet.
      </p>
    </main>
  )
}
