import ContactForm from '@/components/contactcomponent/ContactForm'
import ContactHero from '@/components/contactcomponent/ContactHero'
import Franchise from '@/components/contactcomponent/Franchise'
import React, { Fragment } from 'react'

const page = () => {
  return (
    <Fragment>
      <ContactHero/>
      <Franchise/>
      {/* <ContactForm/> */}

    </Fragment>
  )
}

export default page