import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import chuI from './assets/images/i-black.png';

const today = new Date();
const baovyBirthday = new Date('2021-05-15');
const baohyBirthday = new Date('2024-09-06');
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
  return getAgeString(baovyBirthday) || '0 tuổi';
};

function getAgeDetails(birthDate) {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    // Mượn 1 tháng trước đó
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate(); // Số ngày của tháng trước
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Tính số tuần và ngày lẻ còn lại
  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const weeks = Math.floor((totalDays % 30.4375) / 7); // trung bình 1 tháng = 30.4375 ngày
  const remainingDays = totalDays % 7;

  return { years, months, weeks, days: remainingDays };
}

const getAgeString = (birthDate) => {
  const { years, months, weeks, days } = getAgeDetails(birthDate);
  const age = [];
  if (years > 0) {
    age.push(`${years} tuổi`);
  }
  if (months > 0) {
    age.push(`${months} tháng`);
  }
  if (weeks > 0) {
    age.push(`${weeks} tuần`);
  }
  if (years < 1 && days > 0) {
    age.push(`${days} ngày`);
  }
  return `${age.join(' ').trim()}`;
};

const getBaoHyAgeString = () => {
  return getAgeString(baohyBirthday) || '0 tuổi';
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
              06/09/2024 (<span>{getBaoHyAgeString()}</span>)
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
