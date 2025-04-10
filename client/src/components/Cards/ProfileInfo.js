import React from 'react'
import { getInitials } from '../../utills/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 ">{getInitials("Jhon Wick")}</div>
            <div>
                <p className="text-sm font-medium">Jhon</p>
                <button className="" onClick={onLogout}>
                    Logout
                </button>
            </div>
      
    </div>
  )
}

export default ProfileInfo
