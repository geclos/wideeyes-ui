import hero from 'styles/hero.scss'
import React from 'react'

export const Hero = ({title, style, children}) => {
  let header = null
  if (title) {
    header = (
      <header className={hero.header}>
        <hgroup>
          <h3 className={hero.title}>
            {title}
          </h3>
        </hgroup>
      </header>
    )
  }

  return (
    <section className={hero.root} style={style || {}}>
      {header}
      <section className={hero.body}>
        {children}
      </section>
    </section>
  )
}
