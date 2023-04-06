import React from 'react'
import './UserInfo.scss'

const UserInfo = () => {
  return (
    <div className='UserInfo'>
      <div className='pInformation'>
        <h4 className='information'>Personal Information</h4>
        <div className='name'>
          <label className='title'>FULL NAME</label>
          <span className='description'>Grace Effiom</span>
        </div>
        <div className='name'>
          <label className='title'>PHONE NUMBER</label>
          <span className='description'>07060780922</span>
        </div>
        <div className='name'>
          <label className='title'>BVN</label>
          <span className='description'>07060780922</span>
          </div>
          <div className='name'>
            <label className='title'>GENDER</label>
            <span className='description'>Female</span>
        </div>
        <div className='name'>
          <label className='title'>MARITAL STATUS</label>
          <span className='description'>Single</span>
        </div>
        <div className='name'>
          <label className='title'>CHILDREN</label>
          <span className='description'>None</span>
        </div>
        <div className='name'>
          <label className='title'>TYPE OF RESIDENCE</label>
          <span className='description'>Parent's Apartment</span>
        </div>
      </div>
      <div className='pInformation'>
        <h4 className='education'>Education and Employment</h4>
        <div className='name'>
          <label className='title'>LEVEL OF EDUCATION</label>
          <span className='description'>B.Sc</span>
        </div>
        <div className='name'>
          <label className='title'>EMPLOYMENT STATUS</label>
          <span className='description'>Employment</span>
        </div>
        <div className='name'>
          <label className='title'>SECTOR OF EMPLOYMENT</label>
          <span className='description'>FinTech</span>
          </div>
          <div className='name'>
            <label className='title'>DURATION OF EMPLOYMENT</label>
            <span className='description'>2 years</span>
        </div>
        <div className='name'>
          <label className='title'>OFFICE EMAIL</label>
          <span className='description'>grace@lendsqr.com</span>
        </div>
        <div className='name'>
          <label className='title'>MONTHLY INCOME</label>
          <span className='description'>$200,000 - $400,000</span>
        </div>
        <div className='name'>
          <label className='title'>LOAN REPAYMENT</label>
          <span className='description'>40,000</span>
        </div>
      </div>
      <div className='pInformation'>
        <h4 className='socials'>Socials</h4>
        <div className='name'>
          <label className='title'>TWITTER</label>
          <span className='description'>@grace_effiom</span>
        </div>
        <div className='name'>
          <label className='title'>FACEBOOK</label>
          <span className='description'>Grace Effiom</span>
        </div>
        <div className='name'>
          <label className='title'>INSTAGRAM</label>
          <span className='description'>@grace_effiom</span>
          </div>
      </div>
      <div className='pInformation'>
        <h4 className='guarantor'>Guarantor</h4>
        <div className='name'>
          <label className='title'>FULL NAME</label>
          <span className='description'>Debby Ogana</span>
        </div>
        <div className='name'>
          <label className='title'>PHONE NUMBER</label>
          <span className='description'>07060780922</span>
        </div>
        <div className='name'>
          <label className='title'>EMAIL ADDRESS</label>
          <span className='description'>debby@gmail.com</span>
          </div>
          <div className='name'>
          <label className='title'>RELATIONSHIP</label>
          <span className='description'>Sister</span>
          </div>
      </div>
      <div className='pInformation'>
        {/* <h4 className='socials'>Guarantor</h4> */}
        <div className='name'>
          <label className='title'>FULL NAME</label>
          <span className='description'>Debby Ogana</span>
        </div>
        <div className='name'>
          <label className='title'>PHONE NUMBER</label>
          <span className='description'>07060780922</span>
        </div>
        <div className='name'>
          <label className='title'>EMAIL ADDRESS</label>
          <span className='description'>debby@gmail.com</span>
          </div>
          <div className='name'>
          <label className='title'>RELATIONSHIP</label>
          <span className='description'>Sister</span>
          </div>
      </div>
      
    </div>
  )
}

export default UserInfo