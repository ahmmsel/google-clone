import Link from "next/link"
import { useRouter } from "next/router"

import style from "./Pagination.module.scss"

export default function Pagination() {
  const { query: { q, start } } = useRouter()

  const startIndex = Number(start) || 0

  console.log(startIndex, start)

  return (
    <section className="section">
      <div className={`container ${style.pagination}`}>
        {startIndex >= 10 && <Link href={`/search?q=${q}&start=${startIndex - 10}`} className={style.btn}>
          Previous
        </Link>}
        <Link href={`/search?q=${q}&start=${startIndex + 10}`} className={style.btn}>
          Next
        </Link>
      </div>
    </section>
  )
}
