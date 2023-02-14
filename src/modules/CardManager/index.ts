import {NativeModules} from 'react-native';

const {CardManager} = NativeModules;

interface CardInterface {
  getCardInfo(): Promise<{
    cardName: string;
    cardNumber: string;
    cardDueDate: string;
  }>;
}

const CardModule: CardInterface = CardManager;

export {CardModule};
