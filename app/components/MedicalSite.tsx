'use client'
import React from 'react'
import GlobalContainer from './GlobalContainer'
import GridContainer from './GridContainer'
import FlexContainer from './FlexContainer'
import LightBgComponent from './LightBgComponent'
import ImageComponent from './ImageComponent'

type Props = {}

const MedicalSite = (props: Props) => {
  return (
    <GlobalContainer id='how-it-works' className=''>
        <GridContainer className='bg-lightgreen md:p-10 p-5 rounded-2xl lg:gap-0 gap-5'>
            <FlexContainer>
                <LightBgComponent bgChange='bg-majorwhite me-auto text-sm font-semibold text-majorblue normal-case' className='gap-2' text='How Our Team Cares for You' />
                <h4 className="text-3xl lg:text-5xl text-majorblue tracking-tighter">Real Medical Oversight at <span className='font-font-family text-green italic'>Every Step</span></h4>
            </FlexContainer>
            <FlexContainer className='flex-col gap-10'>
                <p className="text-sm text-majorblack">Our medical team isn't a logo ona page. A licensed doctor is available to review your treatment and answer your questions before you begin, for free. Throughout your journey, our nurses and team stay reachable for guidance and support.</p>
                <FlexContainer className='lg:flex-row flex-col gap-5 items-center'>
                    <ImageComponent source='Avatars_su3sre' altText='medical personnel' className='w-30 lg:w-50' />
                    <FlexContainer className='flex-col'>
                        <p className="text-lg text-majorblue font-semibold">24 medical personnel</p>
                        <p className="majorblack text-sm">ready to provide support</p>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </GridContainer>
    </GlobalContainer>
  )
}

export default MedicalSite