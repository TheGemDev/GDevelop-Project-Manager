import React from 'react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import Img from "../res/index"
import requirePath from "../util/requirePath"

export default function Home() {
  return(
    <Header 
    />,
    <PageHeader 
    title="GDevelop Projects"
    subTitle={requirePath.docDir + requirePath.projectDir}
    icon={<img src={Img.Gdlogo} alt="gdlogo" width="40" height="40" />}

    />
  )
}