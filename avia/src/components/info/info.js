import React from 'react';
import './info.scss';
import { AppContext } from '../../App';

export function Info() {
  const { cityFrom, cityTo, dataTo } = React.useContext(AppContext);

  const times = ['09:20-11:05', '10:20-12:05', '11:20-13:00'];
  const [activeTime, setActiveTime] = React.useState(0);

  const onClickTime = (id) => {
    setActiveTime(id);
  };

  return (
    <div className="avia-list-item">
      <div className="avia-list-company">
        <div className="avia-type">Невозвратный</div>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" height={39} width={39} />
        <p>S7 Airlines</p>
      </div>
      <div className="avia-main-part">
        <div className="avia-list-duration">
          <div className="avia-options-from">
            <p className="time-from">
              {times[activeTime].slice(0, times[activeTime].indexOf('-'))}
            </p>
            <p className="city-from">{cityFrom}</p>
            <p className="date-from">{dataTo}</p>
          </div>
          <div className="duration-scheme">
            <img src={process.env.PUBLIC_URL + '/img/trip.svg'} alt="trip" />
            <p className="duration">В пути 1ч 55 мин</p>
          </div>
          <div className="avia-options-to">
            <p className="time-to">
              {times[activeTime].slice(
                times[activeTime].indexOf('-') + 1,
                times[activeTime].length,
              )}
            </p>
            <p className="city-to">{cityTo}</p>
            <p className="date-to">{dataTo}</p>
          </div>
          <img
            src={process.env.PUBLIC_URL + '/img/bagage.png'}
            height={110}
            width={50}
            alt="trip"
          />
        </div>
        <ul className="avia-time-options">
          {times.map((time, index) => {
            return (
              <li
                onClick={() => onClickTime(index)}
                key={index}
                className={activeTime === index ? `avia-time-button active` : `avia-time-button`}>
                {time}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="avia-price">4 150 ₽</div>
    </div>
  );
}
