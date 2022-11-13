import React from 'react';

import { OneWayTicket } from '../oneWayTicket/oneWayTicket';
import { TicketWithReturn } from '../ticketWithReturn/ticketWithReturn';
import { AppContext } from '../../App';

export const Tickets: React.FC = () => {
  const { dataTo } = React.useContext(AppContext);
  return <>{dataTo === '' ? <OneWayTicket /> : <TicketWithReturn />}</>;
};
