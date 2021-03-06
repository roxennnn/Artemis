import React from 'react';
import { useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import { FixMeLater } from '../../constants/Utilities';

import { RootState } from '../../store/reducers/root.reducer';

const HowToUseItPage = (props: FixMeLater) => {
  // const { language } = useContext(LanguageContext);
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div
      style={{ width: '100%', backgroundColor: Colors.learnMoreInfographics }}
    >
      <div
        style={{
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%',
          paddingTop: '3%',
        }}
      >
        <img
          id="woman"
          style={{
            width: '100%',
            marginBottom: '8%',
          }}
          alt=""
          src={require(`../../images/${language}/LearnMore/howtouseit_citizen.png`)}
        />
        <img
          id="organisation"
          style={{
            width: '100%',
          }}
          alt=""
          src={require(`../../images/${language}/LearnMore/howtouseit_organisation.png`)}
        />
        <div style={{ height: 100 }}></div>
      </div>
    </div>
  );
};

export default HowToUseItPage;
