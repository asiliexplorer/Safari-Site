import React from 'react'
import ZanzibarPackages from '../_components/zanzibar/Zanzibarpackages'
import PembaZanzibarSimple from '../_components/zanzibar/PembaZanzibarSimple'
import ZanzibarLodges from '../_components/zanzibar/ZanzibarLodges'
import ZanzibarVacation from '../_components/zanzibar/ZanzibarVacation'
import ZanzibarBeaches from '../_components/zanzibar/ZanzibarBeaches'
import ZanzibarExcursions from '../_components/zanzibar/ZanzibarExcursions'
import ZanzibarInfo from '../_components/zanzibar/ZanzibarInfo'
import ZanzibarFAQ from '../_components/zanzibar/ZanzibarFAQ'

const Page = () => {
  return (
    <div>
    <ZanzibarPackages/>
    <PembaZanzibarSimple/>
    <ZanzibarLodges/>
    <ZanzibarVacation/>
    <ZanzibarBeaches/>
    <ZanzibarExcursions/>
    <ZanzibarInfo/>
    <ZanzibarFAQ/>
    </div>
  )
}

export default Page