import HomeSlider from '@/components/home/HomeSlider'
import MultiSlider from '@/components/home/MultiSlider';
import PerfumeTab from '@/components/home/PerfumeTab';
import React, { Fragment } from 'react';


const page = () => {
  return (
    <Fragment>
      <HomeSlider/>
      <MultiSlider heading={"Top Selling"}/>
      <MultiSlider heading={"Special Offer"}/>
      <MultiSlider heading={"Top Bukhoor"}/>
      <MultiSlider heading={"Top Air Freshner"}/>
      <PerfumeTab/>

    </Fragment>
  )
}

export default page