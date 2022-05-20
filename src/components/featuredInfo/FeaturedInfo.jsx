
import React from 'react'
import "./FeaturedInfo.css"
import {ArrowDownward,ArrowUpward} from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyCOntainer">
                <span className="featuredMoney">$2,145</span>
                <span className="featuredMoneyRate">-11.5 <ArrowDownward className='featuredIcon negative'/></span>
            </div>

            <span className="featuredSub">Compared  to Last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyCOntainer">
                <span className="featuredMoney">$4,145</span>
                <span className="featuredMoneyRate">-1.5 <ArrowDownward className='featuredIcon negative'/></span>
            </div>

            <span className="featuredSub">Compared  to Last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyCOntainer">
                <span className="featuredMoney">$1,145</span>
                <span className="featuredMoneyRate">+2.5 <ArrowUpward className='featuredIcon positive'/></span>
            </div>

            <span className="featuredSub">Compared  to Last month</span>
        </div>
    </div>
  )
}
