import React from 'react';
import { AppContext } from '../../App';
import styles from './ticketWithReturn.module.scss';

export const TicketWithReturn: React.FC = () => {
  const { cityFrom, cityTo, dataFrom, dataTo } = React.useContext(AppContext);

  return (
    <>
      <div className={styles['avia-ticket-card']}>
        <div className={styles['avia-list-item-left']}>
          <div className={styles['avia-list-item']}>
            <div className={styles['avia-list-company']}>
              <div className={styles['avia-type']}>Невозвратный</div>
              <img
                src={process.env.PUBLIC_URL + '/img/logo.png'}
                alt="logo"
                height={39}
                width={39}
              />
              <p>S7 Airlines</p>
            </div>
            <div className={styles['avia-main-part']}>
              <div className={styles['avia-list-duration']}>
                <div className={styles['avia-options-from']}>
                  <p className={styles['time']}>22:57</p>
                  <p className={styles['city']}>{cityFrom}</p>
                  <p className={styles['date']}>{dataFrom}</p>
                </div>
                <div className={styles['duration-scheme']}>
                  <img src={process.env.PUBLIC_URL + '/img/trip.svg'} alt="trip" />
                  <p className={styles['duration']}>В пути 1ч 55 мин</p>
                </div>
                <div className={styles['avia-options-to']}>
                  <p className={styles['time']}>11:05</p>
                  <p className={styles['city']}>{cityTo}</p>
                  <p className={styles['date']}>{dataFrom}</p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + '/img/bagage.png'}
                  height={110}
                  width={50}
                  alt="trip"
                />
              </div>
            </div>
          </div>
          <div className={styles['avia-list-item']}>
            <div className={styles['avia-list-company']}>
              <div className={styles['avia-type']}>Невозвратный</div>
              <img
                src={process.env.PUBLIC_URL + '/img/logo.png'}
                alt="logo"
                height={39}
                width={39}
              />
              <p>S7 Airlines</p>
            </div>
            <div className={styles['avia-main-part']}>
              <div className={`${styles['avia-list-duration']} ${styles['border-dashed']}`}>
                <div className={styles['avia-options-from']}>
                  <p className={styles['time']}>22:57</p>
                  <p className={styles['city']}>{cityTo}</p>
                  <p className={styles['date']}>{dataTo}</p>
                </div>
                <div className={styles['duration-scheme']}>
                  <img src={process.env.PUBLIC_URL + '/img/trip.svg'} alt="trip" />
                  <p className={styles['duration']}>В пути 1ч 55 мин</p>
                </div>
                <div className={styles['avia-options-to']}>
                  <p className={styles['time']}>11:05</p>
                  <p className={styles['city']}>{cityFrom}</p>
                  <p className={styles['date']}>{dataTo}</p>
                </div>
                <img
                  src={process.env.PUBLIC_URL + '/img/bagage.png'}
                  height={110}
                  width={50}
                  alt="trip"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles['avia-price']}>9 300 ₽</div>
      </div>
    </>
  );
};
