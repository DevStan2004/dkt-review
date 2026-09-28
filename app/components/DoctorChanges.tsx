import React from 'react'
import GlobalContainer from './GlobalContainer'
import FlexContainer from './FlexContainer'
import LightBgComponent from './LightBgComponent'
import GridContainer from './GridContainer'
import Card from './Card'
import { cardData } from '../lib/data'

type Props = {}

const DoctorChanges = (props: Props) => {
  return (
    <GlobalContainer className='my-20'>
        <FlexContainer className='mb-20 flex-col gap-5 md:w-1/2'>
            <LightBgComponent text='Introducing Medical Weight Management' className='gap-3 text-sm' bgChange='bg-majorwhite text-majorblue me-auto' />
            <h5 className="text-majorblue text-3xl lg:text-5xl tracking-tighter">What changes when <span className='text-green italic font-font-family'>a doctor</span> gets involved?</h5>
        </FlexContainer>
        <GridContainer gridClass='md:grid-cols-3 md:grid-cols-2 gap-3'>
            {cardData.map((data, index) => (
                <Card key={index} src={data.image} isButton={data.isButton} title={data.title!} description={data.description!} buttonFirstText={data.text1} buttonSecondText={data.text2} num={data.number} />
            ))}
        </GridContainer>
    </GlobalContainer>
  )
}

export default DoctorChanges