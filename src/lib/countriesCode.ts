export interface CountryType {
  countryName: string
  value: string
  phoneCode: string
  image?: string
}

export const countriesCode = () => {
  const countries: Array<CountryType> = [
    { countryName: 'United States', phoneCode: '1', value: 'US' },
    { countryName: 'Canada', phoneCode: '1', value: 'CA' },
    { countryName: 'Afghanistan', phoneCode: '93', value: 'AF' },
    { countryName: 'Albania', phoneCode: '355', value: 'AL' },
    { countryName: 'Algeria', phoneCode: '213', value: 'DZ' },
    { countryName: 'American Samoa', phoneCode: '1-684', value: 'AS' },
    { countryName: 'Andorra', phoneCode: '376', value: 'AD' },
    { countryName: 'Angola', phoneCode: '244', value: 'AO' },
    { countryName: 'Anguilla', phoneCode: '1-264', value: 'AI' },
    { countryName: 'Antarctica', phoneCode: '672', value: 'AQ' },
    { countryName: 'Antigua and Barbuda', phoneCode: '1-268', value: 'AG' },
    { countryName: 'Argentina', phoneCode: '54', value: 'AR' },
    { countryName: 'Armenia', phoneCode: '374', value: 'AM' },
    { countryName: 'Aruba', phoneCode: '297', value: 'AW' },
    { countryName: 'Australia', phoneCode: '61', value: 'AU' },
    { countryName: 'Austria', phoneCode: '43', value: 'AT' },
    { countryName: 'Azerbaijan', phoneCode: '994', value: 'AZ' },
    { countryName: 'Bahamas', phoneCode: '1-242', value: 'BS' },
    { countryName: 'Bahrain', phoneCode: '973', value: 'BH' },
    { countryName: 'Bangladesh', phoneCode: '880', value: 'BD' },
    { countryName: 'Barbados', phoneCode: '1-246', value: 'BB' },
    { countryName: 'Belarus', phoneCode: '375', value: 'BY' },
    { countryName: 'Belgium', phoneCode: '32', value: 'BE' },
    { countryName: 'Belize', phoneCode: '501', value: 'BZ' },
    { countryName: 'Benin', phoneCode: '229', value: 'BJ' },
    { countryName: 'Bermuda', phoneCode: '1-441', value: 'BM' },
    { countryName: 'Bhutan', phoneCode: '975', value: 'BT' },
    { countryName: 'Bolivia', phoneCode: '591', value: 'BO' },
    { countryName: 'Bosnia and Herzegovina', phoneCode: '387', value: 'BA' },
    { countryName: 'Botswana', phoneCode: '267', value: 'BW' },
    { countryName: 'Brazil', phoneCode: '55', value: 'BR' },
    { countryName: 'British Indian Ocean Territory', phoneCode: '246', value: 'IO' },
    { countryName: 'British Virgin Islands', phoneCode: '1-284', value: 'VG' },
    { countryName: 'Brunei', phoneCode: '673', value: 'BN' },
    { countryName: 'Bulgaria', phoneCode: '359', value: 'BG' },
    { countryName: 'Burkina Faso', phoneCode: '226', value: 'BF' },
    { countryName: 'Burundi', phoneCode: '257', value: 'BI' },
    { countryName: 'Cambodia', phoneCode: '855', value: 'KH' },
    { countryName: 'Cameroon', phoneCode: '237', value: 'CM' },
    { countryName: 'Cape Verde', phoneCode: '238', value: 'CV' },
    { countryName: 'Cayman Islands', phoneCode: '1-345', value: 'KY' },
    { countryName: 'Central African Republic', phoneCode: '236', value: 'CF' },
    { countryName: 'Chad', phoneCode: '235', value: 'TD' },
    { countryName: 'Chile', phoneCode: '56', value: 'CL' },
    { countryName: 'China', phoneCode: '86', value: 'CN' },
    { countryName: 'Christmas Island', phoneCode: '61', value: 'CX' },
    { countryName: 'Cocos Islands', phoneCode: '61', value: 'CC' },
    { countryName: 'Colombia', phoneCode: '57', value: 'CO' },
    { countryName: 'Comoros', phoneCode: '269', value: 'KM' },
    { countryName: 'Cook Islands', phoneCode: '682', value: 'CK' },
    { countryName: 'Costa Rica', phoneCode: '506', value: 'CR' },
    { countryName: 'Croatia', phoneCode: '385', value: 'HR' },
    { countryName: 'Cuba', phoneCode: '53', value: 'CU' },
    { countryName: 'Curacao', phoneCode: '599', value: 'CW' },
    { countryName: 'Cyprus', phoneCode: '357', value: 'CY' },
    { countryName: 'Czech Republic', phoneCode: '420', value: 'CZ' },
    { countryName: 'Democratic Republic of the Congo', phoneCode: '243', value: 'CD' },
    { countryName: 'Denmark', phoneCode: '45', value: 'DK' },
    { countryName: 'Djibouti', phoneCode: '253', value: 'DJ' },
    { countryName: 'Dominica', phoneCode: '1-767', value: 'DM' },
    { countryName: 'Dominican Republic', phoneCode: '1-809, 1-829, 1-849', value: 'DO' },
    { countryName: 'East Timor', phoneCode: '670', value: 'TL' },
    { countryName: 'Ecuador', phoneCode: '593', value: 'EC' },
    { countryName: 'Egypt', phoneCode: '20', value: 'EG' },
    { countryName: 'El Salvador', phoneCode: '503', value: 'SV' },
    { countryName: 'Equatorial Guinea', phoneCode: '240', value: 'GQ' },
    { countryName: 'Eritrea', phoneCode: '291', value: 'ER' },
    { countryName: 'Estonia', phoneCode: '372', value: 'EE' },
    { countryName: 'Ethiopia', phoneCode: '251', value: 'ET' },
    { countryName: 'Falkland Islands', phoneCode: '500', value: 'FK' },
    { countryName: 'Faroe Islands', phoneCode: '298', value: 'FO' },
    { countryName: 'Fiji', phoneCode: '679', value: 'FJ' },
    { countryName: 'Finland', phoneCode: '358', value: 'FI' },
    { countryName: 'France', phoneCode: '33', value: 'FR' },
    { countryName: 'French Polynesia', phoneCode: '689', value: 'PF' },
    { countryName: 'Gabon', phoneCode: '241', value: 'GA' },
    { countryName: 'Gambia', phoneCode: '220', value: 'GM' },
    { countryName: 'Georgia', phoneCode: '995', value: 'GE' },
    { countryName: 'Germany', phoneCode: '49', value: 'DE' },
    { countryName: 'Ghana', phoneCode: '233', value: 'GH' },
    { countryName: 'Gibraltar', phoneCode: '350', value: 'GI' },
    { countryName: 'Greece', phoneCode: '30', value: 'GR' },
    { countryName: 'Greenland', phoneCode: '299', value: 'GL' },
    { countryName: 'Grenada', phoneCode: '1-473', value: 'GD' },
    { countryName: 'Guam', phoneCode: '1-671', value: 'GU' },
    { countryName: 'Guatemala', phoneCode: '502', value: 'GT' },
    { countryName: 'Guernsey', phoneCode: '44-1481', value: 'GG' },
    { countryName: 'Guinea', phoneCode: '224', value: 'GN' },
    { countryName: 'Guinea-Bissau', phoneCode: '245', value: 'GW' },
    { countryName: 'Guyana', phoneCode: '592', value: 'GY' },
    { countryName: 'Haiti', phoneCode: '509', value: 'HT' },
    { countryName: 'Honduras', phoneCode: '504', value: 'HN' },
    { countryName: 'Hong Kong', phoneCode: '852', value: 'HK' },
    { countryName: 'Hungary', phoneCode: '36', value: 'HU' },
    { countryName: 'Iceland', phoneCode: '354', value: 'IS' },
    { countryName: 'India', phoneCode: '91', value: 'IN' },
    { countryName: 'Indonesia', phoneCode: '62', value: 'ID' },
    { countryName: 'Iran', phoneCode: '98', value: 'IR' },
    { countryName: 'Iraq', phoneCode: '964', value: 'IQ' },
    { countryName: 'Ireland', phoneCode: '353', value: 'IE' },
    { countryName: 'Isle of Man', phoneCode: '44-1624', value: 'IM' },
    { countryName: 'Israel', phoneCode: '972', value: 'IL' },
    { countryName: 'Italy', phoneCode: '39', value: 'IT' },
    { countryName: 'Ivory Coast', phoneCode: '225', value: 'CI' },
    { countryName: 'Jamaica', phoneCode: '1-876', value: 'JM' },
    { countryName: 'Japan', phoneCode: '81', value: 'JP' },
    { countryName: 'Jersey', phoneCode: '44-1534', value: 'JE' },
    { countryName: 'Jordan', phoneCode: '962', value: 'JO' },
    { countryName: 'Kazakhstan', phoneCode: '7', value: 'KZ' },
    { countryName: 'Kenya', phoneCode: '254', value: 'KE' },
    { countryName: 'Kiribati', phoneCode: '686', value: 'KI' },
    { countryName: 'Kosovo', phoneCode: '383', value: 'XK' },
    { countryName: 'Kuwait', phoneCode: '965', value: 'KW' },
    { countryName: 'Kyrgyzstan', phoneCode: '996', value: 'KG' },
    { countryName: 'Laos', phoneCode: '856', value: 'LA' },
    { countryName: 'Latvia', phoneCode: '371', value: 'LV' },
    { countryName: 'Lebanon', phoneCode: '961', value: 'LB' },
    { countryName: 'Lesotho', phoneCode: '266', value: 'LS' },
    { countryName: 'Liberia', phoneCode: '231', value: 'LR' },
    { countryName: 'Libya', phoneCode: '218', value: 'LY' },
    { countryName: 'Liechtenstein', phoneCode: '423', value: 'LI' },
    { countryName: 'Lithuania', phoneCode: '370', value: 'LT' },
    { countryName: 'Luxembourg', phoneCode: '352', value: 'LU' },
    { countryName: 'Macao', phoneCode: '853', value: 'MO' },
    { countryName: 'Macedonia', phoneCode: '389', value: 'MK' },
    { countryName: 'Madagascar', phoneCode: '261', value: 'MG' },
    { countryName: 'Malawi', phoneCode: '265', value: 'MW' },
    { countryName: 'Malaysia', phoneCode: '60', value: 'MY' },
    { countryName: 'Maldives', phoneCode: '960', value: 'MV' },
    { countryName: 'Mali', phoneCode: '223', value: 'ML' },
    { countryName: 'Malta', phoneCode: '356', value: 'MT' },
    { countryName: 'Marshall Islands', phoneCode: '692', value: 'MH' },
    { countryName: 'Mauritania', phoneCode: '222', value: 'MR' },
    { countryName: 'Mauritius', phoneCode: '230', value: 'MU' },
    { countryName: 'Mayotte', phoneCode: '262', value: 'YT' },
    { countryName: 'Mexico', phoneCode: '52', value: 'MX' },
    { countryName: 'Micronesia', phoneCode: '691', value: 'FM' },
    { countryName: 'Moldova', phoneCode: '373', value: 'MD' },
    { countryName: 'Monaco', phoneCode: '377', value: 'MC' },
    { countryName: 'Mongolia', phoneCode: '976', value: 'MN' },
    { countryName: 'Montenegro', phoneCode: '382', value: 'ME' },
    { countryName: 'Montserrat', phoneCode: '1-664', value: 'MS' },
    { countryName: 'Morocco', phoneCode: '212', value: 'MA' },
    { countryName: 'Mozambique', phoneCode: '258', value: 'MZ' },
    { countryName: 'Myanmar', phoneCode: '95', value: 'MM' },
    { countryName: 'Namibia', phoneCode: '264', value: 'NA' },
    { countryName: 'Nauru', phoneCode: '674', value: 'NR' },
    { countryName: 'Nepal', phoneCode: '977', value: 'NP' },
    { countryName: 'Netherlands', phoneCode: '31', value: 'NL' },
    { countryName: 'Netherlands Antilles', phoneCode: '599', value: 'AN' },
    { countryName: 'New Caledonia', phoneCode: '687', value: 'NC' },
    { countryName: 'New Zealand', phoneCode: '64', value: 'NZ' },
    { countryName: 'Nicaragua', phoneCode: '505', value: 'NI' },
    { countryName: 'Niger', phoneCode: '227', value: 'NE' },
    { countryName: 'Nigeria', phoneCode: '234', value: 'NG' },
    { countryName: 'Niue', phoneCode: '683', value: 'NU' },
    { countryName: 'North Korea', phoneCode: '850', value: 'KP' },
    { countryName: 'Northern Mariana Islands', phoneCode: '1-670', value: 'MP' },
    { countryName: 'Norway', phoneCode: '47', value: 'NO' },
    { countryName: 'Oman', phoneCode: '968', value: 'OM' },
    { countryName: 'Pakistan', phoneCode: '92', value: 'PK' },
    { countryName: 'Palau', phoneCode: '680', value: 'PW' },
    { countryName: 'Palestine', phoneCode: '970', value: 'PS' },
    { countryName: 'Panama', phoneCode: '507', value: 'PA' },
    { countryName: 'Papua New Guinea', phoneCode: '675', value: 'PG' },
    { countryName: 'Paraguay', phoneCode: '595', value: 'PY' },
    { countryName: 'Peru', phoneCode: '51', value: 'PE' },
    { countryName: 'Philippines', phoneCode: '63', value: 'PH' },
    { countryName: 'Pitcairn', phoneCode: '64', value: 'PN' },
    { countryName: 'Poland', phoneCode: '48', value: 'PL' },
    { countryName: 'Portugal', phoneCode: '351', value: 'PT' },
    { countryName: 'Puerto Rico', phoneCode: '1-787, 1-939', value: 'PR' },
    { countryName: 'Qatar', phoneCode: '974', value: 'QA' },
    { countryName: 'Republic of the Congo', phoneCode: '242', value: 'CG' },
    { countryName: 'Reunion', phoneCode: '262', value: 'RE' },
    { countryName: 'Romania', phoneCode: '40', value: 'RO' },
    { countryName: 'Russia', phoneCode: '7', value: 'RU' },
    { countryName: 'Rwanda', phoneCode: '250', value: 'RW' },
    { countryName: 'Saint Barthelemy', phoneCode: '590', value: 'BL' },
    { countryName: 'Saint Helena', phoneCode: '290', value: 'SH' },
    { countryName: 'Saint Kitts and Nevis', phoneCode: '1-869', value: 'KN' },
    { countryName: 'Saint Lucia', phoneCode: '1-758', value: 'LC' },
    { countryName: 'Saint Martin', phoneCode: '590', value: 'MF' },
    { countryName: 'Saint Pierre and Miquelon', phoneCode: '508', value: 'PM' },
    { countryName: 'Saint Vincent and the Grenadines', phoneCode: '1-784', value: 'VC' },
    { countryName: 'Samoa', phoneCode: '685', value: 'WS' },
    { countryName: 'San Marino', phoneCode: '378', value: 'SM' },
    { countryName: 'Sao Tome and Principe', phoneCode: '239', value: 'ST' },
    { countryName: 'Saudi Arabia', phoneCode: '966', value: 'SA' },
    { countryName: 'Senegal', phoneCode: '221', value: 'SN' },
    { countryName: 'Serbia', phoneCode: '381', value: 'RS' },
    { countryName: 'Seychelles', phoneCode: '248', value: 'SC' },
    { countryName: 'Sierra Leone', phoneCode: '232', value: 'SL' },
    { countryName: 'Singapore', phoneCode: '65', value: 'SG' },
    { countryName: 'Sint Maarten', phoneCode: '1-721', value: 'SX' },
    { countryName: 'Slovakia', phoneCode: '421', value: 'SK' },
    { countryName: 'Slovenia', phoneCode: '386', value: 'SI' },
    { countryName: 'Solomon Islands', phoneCode: '677', value: 'SB' },
    { countryName: 'Somalia', phoneCode: '252', value: 'SO' },
    { countryName: 'South Africa', phoneCode: '27', value: 'ZA' },
    { countryName: 'South Korea', phoneCode: '82', value: 'KR' },
    { countryName: 'South Sudan', phoneCode: '211', value: 'SS' },
    { countryName: 'Spain', phoneCode: '34', value: 'ES' },
    { countryName: 'Sri Lanka', phoneCode: '94', value: 'LK' },
    { countryName: 'Sudan', phoneCode: '249', value: 'SD' },
    { countryName: 'Suriname', phoneCode: '597', value: 'SR' },
    { countryName: 'Svalbard and Jan Mayen', phoneCode: '47', value: 'SJ' },
    { countryName: 'Swaziland', phoneCode: '268', value: 'SZ' },
    { countryName: 'Sweden', phoneCode: '46', value: 'SE' },
    { countryName: 'Switzerland', phoneCode: '41', value: 'CH' },
    { countryName: 'Syria', phoneCode: '963', value: 'SY' },
    { countryName: 'Taiwan', phoneCode: '886', value: 'TW' },
    { countryName: 'Tajikistan', phoneCode: '992', value: 'TJ' },
    { countryName: 'Tanzania', phoneCode: '255', value: 'TZ' },
    { countryName: 'Thailand', phoneCode: '66', value: 'TH' },
    { countryName: 'Togo', phoneCode: '228', value: 'TG' },
    { countryName: 'Tokelau', phoneCode: '690', value: 'TK' },
    { countryName: 'Tonga', phoneCode: '676', value: 'TO' },
    { countryName: 'Trinidad and Tobago', phoneCode: '1-868', value: 'TT' },
    { countryName: 'Tunisia', phoneCode: '216', value: 'TN' },
    { countryName: 'Turkey', phoneCode: '90', value: 'TR' },
    { countryName: 'Turkmenistan', phoneCode: '993', value: 'TM' },
    { countryName: 'Turks and Caicos Islands', phoneCode: '1-649', value: 'TC' },
    { countryName: 'Tuvalu', phoneCode: '688', value: 'TV' },
    { countryName: 'U.S. Virgin Islands', phoneCode: '1-340', value: 'VI' },
    { countryName: 'Uganda', phoneCode: '256', value: 'UG' },
    { countryName: 'Ukraine', phoneCode: '380', value: 'UA' },
    { countryName: 'United Arab Emirates', phoneCode: '971', value: 'AE' },
    { countryName: 'United Kingdom', phoneCode: '44', value: 'GB' },
    { countryName: 'Uruguay', phoneCode: '598', value: 'UY' },
    { countryName: 'Uzbekistan', phoneCode: '998', value: 'UZ' },
    { countryName: 'Vanuatu', phoneCode: '678', value: 'VU' },
    { countryName: 'Vatican', phoneCode: '379', value: 'VA' },
    { countryName: 'Venezuela', phoneCode: '58', value: 'VE' },
    { countryName: 'Vietnam', phoneCode: '84', value: 'VN' },
    { countryName: 'Wallis and Futuna', phoneCode: '681', value: 'WF' },
    { countryName: 'Western Sahara', phoneCode: '212', value: 'EH' },
    { countryName: 'Yemen', phoneCode: '967', value: 'YE' },
    { countryName: 'Zambia', phoneCode: '260', value: 'ZM' },
    { countryName: 'Zimbabwe', phoneCode: '263', value: 'ZW' }
  ]
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].value != 'AQ' && countries[i].value != 'AN' && countries[i].value != 'EH') {
      countries[i].image = '/flags-countries/' + countries[i].value + '.svg'
    }
  }
  return countries
}
