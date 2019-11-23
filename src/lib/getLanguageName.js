const languageNameMap = {
  en: 'English'
};

const getLanguageName = language => languageNameMap[language] || language;

export default getLanguageName;
