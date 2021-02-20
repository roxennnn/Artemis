import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CenterView from '../components/CenterView';
import PrimaryButton from '../components/PrimaryButton';
import Dropdrown from '../components/surveyComponents/Dropdown';
import Countries from '../constants/Countries';
import { FixMeLater } from '../constants/Utilities';
import { RootState } from '../store/reducers/root.reducer';

const containerStyle = {
  container: {
    // borderStyle: "solid",
    // borderWidth: 2,
    // borderColor: "black",
    width: '32%',
    textAlign: 'center',
    padding: '2%',
    // margin: "2%",
    // borderRadius: 20,
    // shadow: 100,
    background: 'white',
    boxShadow: 'none  ',
  },
};

const OrganisationPage = (props: FixMeLater) => {
  const { strings, language } = useSelector(
    (state: RootState) => state.language
  );
  const dispatch = useDispatch();

  // const [currentUser, setCurrentUser] = useState<FixMeLater>(); // data of logged user
  // const [loading, setLoading] = useState(false);

  const { loading } = useSelector((state: RootState) => state.user);

  // Selector values
  const [dataLanguage, setDataLanguage] = useState();
  const onDataLanguageSelect = (value: FixMeLater) => {
    setDataLanguage(value);
  };
  const dataLanguages = [
    {
      name: strings.Organisation && strings.Organisation.Languages.all,
      value: 0,
    },
    {
      name: strings.Organisation && strings.Organisation.Languages.spanish,
      value: 1,
    },
    {
      name: strings.Organisation && strings.Organisation.Languages.portuguese,
      value: 2,
    },
    {
      name: strings.Organisation && strings.Organisation.Languages.english,
      value: 3,
    },
  ];

  const [dataCountry, setDataCountry] = useState();
  const onDataCountrySelect = (value: FixMeLater) => {
    setDataCountry(value);
  };
  const dataCountries = [
    {
      name: strings.Organisation && strings.Organisation.allCountries,
      value: 0,
    },
    ...Countries.map((country) => {
      return {
        name: country.name,
        value: country.value + 1,
      };
    }),
  ];

  const [dataSurvey, setDataSurvey] = useState();
  const onDataSurveySelect = (value: FixMeLater) => {
    setDataSurvey(value);
  };
  const dataSurveys = [
    {
      name: strings.Organisation && strings.Organisation.allSurveys,
      value: 0,
    },
    {
      name:
        strings.Profile &&
        strings.Profile.ProfileSurveys.DemographicsSurvey.title,
      value: 1,
    },
    {
      name:
        strings.Profile && strings.Profile.ProfileSurveys.SkillsSurvey.title,
      value: 2,
    },
    {
      name:
        strings.Profile && strings.Profile.ProfileSurveys.DomesticSurvey.title,
      value: 3,
    },
  ];

  // useEffect(() => {
  //   setLoading(true);
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     setCurrentUser(user);
  //     setLoading(false);
  //   }
  // }, []);

  // const { location } = props;
  // useEffect(() => {
  //   if (location.state && location.state.lang) {
  //     // updateLanguage(location.state.lang);
  //     dispatch(setLanguage(location.state.lang));
  //   }
  // }, [location.state, dispatch]);

  return (
    <div style={{}}>
      <CenterView
        middle={10}
        sides={1}
        right={
          !loading && (
            <img
              alt=""
              src={require(`../images/women/woman6.png`)}
              style={{
                margin: '30%',
                width: '650%',
                // height: 400,
              }}
            />
          )
        }
      >
        {loading ? (
          <div style={{ textAlign: 'center', margin: '2%' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div style={{ marginTop: '8%' }}>
            <img
              alt=""
              style={{
                width: '100%',
                borderRadius: 10,
                // marginBottom: "5%",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
              }}
              src={require(`../images/${language}/dataset.png`)}
            />
            <div
              className="to-hover organisation-dropdowns"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '5%',
                // boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
                opacity: 1,
                borderRadius: 20,
              }}
            >
              <Dropdrown
                valueList={dataLanguages}
                value={dataLanguage}
                onSelect={onDataLanguageSelect}
                style={containerStyle}
                defaultMessage={
                  strings.Organisation && strings.Organisation.chooseLanguage
                }
              />
              <Dropdrown
                valueList={dataCountries}
                value={dataCountry}
                onSelect={onDataCountrySelect}
                style={containerStyle}
                defaultMessage={
                  strings.Organisation && strings.Organisation.chooseCountry
                }
              />
              <Dropdrown
                valueList={dataSurveys}
                value={dataSurvey}
                onSelect={onDataSurveySelect}
                style={containerStyle}
                defaultMessage={
                  strings.Organisation && strings.Organisation.chooseSurvey
                }
              />
            </div>
            {dataLanguage && dataSurvey && dataCountry && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: '5%',
                }}
              >
                <div style={{ margin: '1%' }}>
                  <PrimaryButton
                    label={
                      strings.Organisation && strings.Organisation.readOnline
                    }
                    buttonStyle={{ width: '10%' }}
                  />
                </div>
                <div style={{ margin: '1%' }}>
                  <PrimaryButton
                    label={
                      strings.Organisation &&
                      strings.Organisation.downloadDataset
                    }
                    buttonStyle={{ width: '10%' }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </CenterView>
    </div>
  );
};

export default OrganisationPage;
