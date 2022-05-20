import React from 'react'
import "./WidgetSm.css"
import {Visibility} from '@mui/icons-material';
export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?car" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Kevin</span>
              <span className="widgetSmUserTitle">Softwere Engineer</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>
          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?doctor" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Grifith</span>
              <span className="widgetSmUserTitle">Product Designer</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>
          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?polic" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Gregory</span>
              <span className="widgetSmUserTitle">Research Head</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>

          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?train" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Julian</span>
              <span className="widgetSmUserTitle">Graphics Designer</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>

          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?book" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Frankie</span>
              <span className="widgetSmUserTitle">Development Head</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>

          <li className="widgetSmListItem">
            <img src="https://source.unsplash.com/random/900×700/?baby" alt="street" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mr Steve</span>
              <span className="widgetSmUserTitle">Sales Manager</span>

            </div>
            <div className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </div>
          </li>
        </ul>
    </div>
  )
}
