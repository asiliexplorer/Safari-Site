import React from 'react'
import KilimanjaroPackages from '../_components/kilimanjaro/KilimanjaroPackages'
import KilimanjaroInfo from '../_components/kilimanjaro/KilimanjaroInfo'
import KilimanjaroRoutes from '../_components/kilimanjaro/KilimanjaroRoutes'
import KilimanjaroClimbingGuide from '../_components/kilimanjaro/KilimanjaroClimbingGuide'

const Kilimanjaro = () => {
  return (
    <div>

    <KilimanjaroPackages/>
    <KilimanjaroInfo/>
    <KilimanjaroRoutes/>
    <KilimanjaroClimbingGuide/>

    </div>
  )
}

export default Kilimanjaro