export const fetchTranslations = ({ language = "es" }) =>
	import(`./locales/${language}`).then((module) => {
		return module.default
	})