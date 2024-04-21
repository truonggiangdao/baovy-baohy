import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import chuI from './assets/images/i-black.png';

const today = new Date();
const baovyBirthday = new Date('2021-05-15');
const baohyBirthday = new Date('2024-09-07');
const getAge = (date) => {
  const age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1;
  }
  return age;
};

const getMonthDiff = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime();
  const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
  return months;
};

const getBaoVyAgeMonths = () => {
  return getMonthDiff(baovyBirthday, today);
};

const getBaoVyAgeString = () => {
  const age = getAge(baovyBirthday);

  const months = getBaoVyAgeMonths();
  if (months > 0) {
    return `${age} tuổi ${months} tháng`;
  }
  return `${age} tuổi`;
};

const getWeeksDiff = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime();
  const weeks = diff / (1000 * 60 * 60 * 24 * 7);
  return weeks;
};

const getBaoHyAgeString = () => {
  const weeks = getWeeksDiff(baohyBirthday, today);

  const roundWeeks = Math.floor(Math.abs(weeks));
  const roundDays = Math.floor((Math.abs(weeks) - roundWeeks) * 7);

  let dateString = `${roundWeeks} tuần`;
  if (roundDays > 0) {
    dateString = `${dateString} ${roundDays} ngày`;
  }
  if (weeks < 0) {
    dateString = `Dự sinh: ${dateString}`;
  }
  return dateString;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: '13px',
          }}
        >
          20/04/2024
        </div>
        <div id='info' className='info'>
          <div className='img-container text-center mb-2'>
            <img src={chuI} alt='chu-i' />
          </div>
          <div className='info-nhim'>
            <h4 className='mb-1 text-center'>Đào Kỳ Bảo Vy (Nhím)</h4>
            <p className='info-detail text-center'>
              15/05/2021 (<span>{getBaoVyAgeString()}</span>)
            </p>
          </div>
          <div className='info-baohy'>
            <h4 className='mb-1 text-center'>Đào Kỳ Bảo Hy</h4>
            <p className='info-detail text-center'>
              07/09/2024 (<span>{getBaoHyAgeString()}</span>)
            </p>
          </div>
        </div>
        <a
          style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}
          href='#'
        >
          scroll up/down ...
        </a>
      </div>{' '}
    </>
  </React.StrictMode>
);
