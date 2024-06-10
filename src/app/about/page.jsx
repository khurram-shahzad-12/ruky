import AboutHero from '@/components/aboutcomponent/AboutHero'
import AboutStat from '@/components/aboutcomponent/AboutStat'
import OurBranches from '@/components/aboutcomponent/OurBranches'
import OurGoals from '@/components/aboutcomponent/OurGoals'
import React, { Fragment } from 'react'

const page = () => {
  return (
    <Fragment>
      <AboutHero/>
      <OurGoals/>
      <OurBranches/>
      <AboutStat/>
    </Fragment>
  )
}

export default page