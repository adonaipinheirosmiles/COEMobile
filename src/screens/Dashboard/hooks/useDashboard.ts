import {useEffect, useState} from 'react';

import {features} from '@utils';
import {CardModule} from '@modules';

export default function useDashboard() {
  const [cardInfo, setCardInfo] = useState({
    cardName: '',
    cardNumber: '****',
    cardDueDate: '',
  });

  async function getCardInfo() {
    try {
      const info = await CardModule.getCardInfo();
      setCardInfo(info);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCardInfo();
  }, []);

  return {
    cardInfo,
    features,
  };
}
