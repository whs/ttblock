export let specContext = require.context(
	'../../apidata/specializations/',
	false,
	/(26|41|48)\.json$/
);

export let traitContext = require.context(
	'../../apidata/traits/',
	false,
	/(2025|1952|1962|1886|1938|1891|1902|2015|1948|1839|2033|1986|221|227|224|232|222|229|214|1502|223|226|1503|1672|278|282|1507|289|279|275|281|277|280|1508|287|1674)\.json$/
);