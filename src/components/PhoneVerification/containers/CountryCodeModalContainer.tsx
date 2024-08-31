import React from 'react';
import CountryCodeModal from '../components/CountryCodeModal';

type Props = {
  isShowCountryCodeModal: boolean;
  onShowCountryModal: () => void;
  onSelectedCountryCode: (code: string) => void;
};

const CountryCodeModalContainer = ({
  isShowCountryCodeModal,
  onShowCountryModal,
  onSelectedCountryCode,
}: Props) => {
  return (
    <CountryCodeModal
      isShowCountryCodeModal={isShowCountryCodeModal}
      onShowCountryModal={onShowCountryModal}
      onSelectedCountryCode={onSelectedCountryCode}
    />
  );
};

export default CountryCodeModalContainer;
