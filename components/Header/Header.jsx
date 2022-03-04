import Image from 'next/image'
import { useRouter } from 'next/router'

import style from "./Header.module.scss"
import useForm from '../../hooks/useForm'
import usePush from '../../hooks/usePush'

export default function Header() {
  const router = useRouter()

  const { values: { search }, inputChangeHandler, setValues, submitHandler } = useForm({ search: router.query.q }, submitCallback)

  const searchHandler = usePush(`/search?q=${search}`)

  function submitCallback() {
    search.trim() && searchHandler()
  }

  const navigateHandler = usePush("/")

  const resetInputHandler = () => {
    setValues(prevValues => ({
      ...prevValues,
      search: "" 
    }))
  }

  return (
    <section className={style.section}>
      <header className={style.header}>
        <div className={`container ${style.container}`}>
          <Image  
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            width={120}
            height={40}
            className="pointer"
            onClick={navigateHandler}
          />
          <form onSubmit={submitHandler} className={style.form}>
            <label className={style.controller}>
              <input 
                type="search" 
                name="search"
                value={search}
                className="input primary-input" 
                onChange={inputChangeHandler}
              />
              <div className={style.icons}>
                {search &&      
                  <div className="pointer bi bi-x-lg" onClick={resetInputHandler}></div>
                }
                <div className="primary-icon pointer bi bi-search"></div>
              </div>
            </label>
          </form>
        </div>
      </header>
    </section>
  )
}
