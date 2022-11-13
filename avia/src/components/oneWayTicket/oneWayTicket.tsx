import React from 'react';
import { AppContext } from '../../App';
import styles from './oneWayTicket.module.scss';

export const OneWayTicket: React.FC = () => {
  const { cityFrom, cityTo, dataFrom } = React.useContext(AppContext);

  const times = ['09:20-11:05', '10:20-12:05', '11:20-13:00'];
  const [activeTime, setActiveTime] = React.useState<number>(0);

  const onClickTime = (id: number) => {
    setActiveTime(id);
  };
  return (
    <>
      <div className={styles['avia-list-item']}>
        <div className={styles['avia-list-company']}>
          <div className={styles['avia-type']}>Невозвратный</div>
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" height={39} width={39} />
          <p>S7 Airlines</p>
        </div>
        <div className={styles['avia-main-part']}>
          <div className={styles['avia-list-duration']}>
            <div className={styles['avia-options-from']}>
              <p className={styles['time-from']}>
                {times[activeTime].slice(0, times[activeTime].indexOf('-'))}
              </p>
              <p className={styles['city-from']}>{cityFrom}</p>
              <p className={styles['data-from']}>{dataFrom}</p>
            </div>
            <div className={styles['duration-scheme']}>
              <img src={process.env.PUBLIC_URL + '/img/trip.svg'} alt="trip" />
              <p className={styles['duration']}>В пути 1ч 55 мин</p>
            </div>
            <div className={styles['avia-options-to']}>
              <p className={styles['time-to']}>
                {times[activeTime].slice(
                  times[activeTime].indexOf('-') + 1,
                  times[activeTime].length,
                )}
              </p>
              <p className={styles['city-to']}>{cityTo}</p>
              <p className={styles['date-to']}>{dataFrom}</p>
            </div>
            <img
              src={process.env.PUBLIC_URL + '/img/bagage.png'}
              height={110}
              width={50}
              alt="trip"
            />
          </div>
          <ul className={styles['avia-time-options']}>
            {times.map((time, index) => {
              return (
                <li
                  onClick={() => onClickTime(index)}
                  key={index}
                  className={
                    activeTime === index
                      ? `${styles['avia-time-button']} ${styles['active']}`
                      : `${styles['avia-time-button']}`
                  }>
                  {time}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles['avia-price']}>4 150 ₽</div>
      </div>
    </>
  );
};
