import { renderHook, act } from '@testing-library/react-hooks';
import useDashboard from './useDashboard';
import { CardModule } from '@modules';
import { features } from '@utils';

jest.mock('@modules', () => ({
  CardModule: {
    getCardInfo: jest.fn(),
  },
}));

const log = jest.spyOn(console, "log").mockImplementation(() => {});

describe('useDashboard', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should get card info and return it', async () => {
    const mockCardInfo = {
      cardName: 'Mock Card',
      cardNumber: '****',
      cardDueDate: '01/22',
    };
    CardModule.getCardInfo.mockResolvedValueOnce(mockCardInfo);

    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    expect(result.current.cardInfo).toEqual({
      cardName: '',
      cardNumber: '****',
      cardDueDate: '',
    });
    expect(result.current.features).toEqual(features);

    await waitForNextUpdate();

    expect(result.current.cardInfo).toEqual(mockCardInfo);
  });

  it('should handle error when getCardInfo fails', async () => {
    const mockError = new Error('Mock Error');
    CardModule.getCardInfo.mockRejectedValueOnce(mockError);

    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    expect(result.current.cardInfo).toEqual({
      cardName: '',
      cardNumber: '****',
      cardDueDate: '',
    });
    expect(result.current.features).toEqual(features);

    expect(result.current.cardInfo).toEqual({
      cardName: '',
      cardNumber: '****',
      cardDueDate: '',
    });
  });
});