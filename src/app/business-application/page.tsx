'use client';

import { useState, useRef, useEffect } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  mobile: string;
  companyName: string;
  registrationNumber: string;
  annualTurnover: string;
  website: string;
  optIn: boolean;
}

interface Country {
  name: string;
  code: string;
  flag: string;
}

const allCountries: Country[] = [
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Åland Islands', code: '+358', flag: '🇦🇽' },
  { name: 'Albania', code: '+355', flag: '🇦🇱' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'American Samoa', code: '+1', flag: '🇦🇸' },
  { name: 'Andorra', code: '+376', flag: '🇦🇩' },
  { name: 'Angola', code: '+244', flag: '🇦🇴' },
  { name: 'Anguilla', code: '+1', flag: '🇦🇮' },
  { name: 'Antigua and Barbuda', code: '+1', flag: '🇦🇬' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Armenia', code: '+374', flag: '🇦🇲' },
  { name: 'Aruba', code: '+297', flag: '🇦🇼' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
  { name: 'Bahamas', code: '+1', flag: '🇧🇸' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Barbados', code: '+1', flag: '🇧🇧' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Belize', code: '+501', flag: '🇧🇿' },
  { name: 'Benin', code: '+229', flag: '🇧🇯' },
  { name: 'Bermuda', code: '+1', flag: '🇧🇲' },
  { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦' },
  { name: 'Botswana', code: '+267', flag: '🇧🇼' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'British Virgin Islands', code: '+1', flag: '🇻🇬' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' },
  { name: 'Burundi', code: '+257', flag: '🇧🇮' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Cape Verde', code: '+238', flag: '🇨🇻' },
  { name: 'Cayman Islands', code: '+1', flag: '🇰🇾' },
  { name: 'Central African Republic', code: '+236', flag: '🇨🇫' },
  { name: 'Chad', code: '+235', flag: '🇹🇩' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Comoros', code: '+269', flag: '🇰🇲' },
  { name: 'Congo', code: '+242', flag: '🇨🇬' },
  { name: 'Cook Islands', code: '+682', flag: '🇨🇰' },
  { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Cuba', code: '+53', flag: '🇨🇺' },
  { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Djibouti', code: '+253', flag: '🇩🇯' },
  { name: 'Dominica', code: '+1', flag: '🇩🇲' },
  { name: 'Dominican Republic', code: '+1', flag: '🇩🇴' },
  { name: 'DR Congo', code: '+243', flag: '🇨🇩' },
  { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { name: 'Equatorial Guinea', code: '+240', flag: '🇬🇶' },
  { name: 'Eritrea', code: '+291', flag: '🇪🇷' },
  { name: 'Estonia', code: '+372', flag: '🇪🇪' },
  { name: 'Eswatini', code: '+268', flag: '🇸🇿' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Gabon', code: '+241', flag: '🇬🇦' },
  { name: 'Gambia', code: '+220', flag: '🇬🇲' },
  { name: 'Georgia', code: '+995', flag: '🇬🇪' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Gibraltar', code: '+350', flag: '🇬🇮' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Greenland', code: '+299', flag: '🇬🇱' },
  { name: 'Grenada', code: '+1', flag: '🇬🇩' },
  { name: 'Guam', code: '+1', flag: '🇬🇺' },
  { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
  { name: 'Guinea', code: '+224', flag: '🇬🇳' },
  { name: 'Guinea-Bissau', code: '+245', flag: '🇬🇼' },
  { name: 'Guyana', code: '+592', flag: '🇬🇾' },
  { name: 'Haiti', code: '+509', flag: '🇭🇹' },
  { name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Ivory Coast', code: '+225', flag: '🇨🇮' },
  { name: 'Jamaica', code: '+1', flag: '🇯🇲' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Jordan', code: '+962', flag: '🇯🇴' },
  { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kiribati', code: '+686', flag: '🇰🇮' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Latvia', code: '+371', flag: '🇱🇻' },
  { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
  { name: 'Lesotho', code: '+266', flag: '🇱🇸' },
  { name: 'Liberia', code: '+231', flag: '🇱🇷' },
  { name: 'Libya', code: '+218', flag: '🇱🇾' },
  { name: 'Liechtenstein', code: '+423', flag: '🇱🇮' },
  { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
  { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
  { name: 'Macau', code: '+853', flag: '🇲🇴' },
  { name: 'Madagascar', code: '+261', flag: '🇲🇬' },
  { name: 'Malawi', code: '+265', flag: '🇲🇼' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Maldives', code: '+960', flag: '🇲🇻' },
  { name: 'Mali', code: '+223', flag: '🇲🇱' },
  { name: 'Malta', code: '+356', flag: '🇲🇹' },
  { name: 'Mauritania', code: '+222', flag: '🇲🇷' },
  { name: 'Mauritius', code: '+230', flag: '🇲🇺' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Micronesia', code: '+691', flag: '🇫🇲' },
  { name: 'Moldova', code: '+373', flag: '🇲🇩' },
  { name: 'Monaco', code: '+377', flag: '🇲🇨' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
  { name: 'Montenegro', code: '+382', flag: '🇲🇪' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Mozambique', code: '+258', flag: '🇲🇿' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
  { name: 'Namibia', code: '+264', flag: '🇳🇦' },
  { name: 'Nauru', code: '+674', flag: '🇳🇷' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
  { name: 'Niger', code: '+227', flag: '🇳🇪' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'North Macedonia', code: '+389', flag: '🇲🇰' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Palau', code: '+680', flag: '🇵🇼' },
  { name: 'Palestine', code: '+970', flag: '🇵🇸' },
  { name: 'Panama', code: '+507', flag: '🇵🇦' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Puerto Rico', code: '+1', flag: '🇵🇷' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Rwanda', code: '+250', flag: '🇷🇼' },
  { name: 'Samoa', code: '+685', flag: '🇼🇸' },
  { name: 'San Marino', code: '+378', flag: '🇸🇲' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Senegal', code: '+221', flag: '🇸🇳' },
  { name: 'Serbia', code: '+381', flag: '🇷🇸' },
  { name: 'Seychelles', code: '+248', flag: '🇸🇨' },
  { name: 'Sierra Leone', code: '+232', flag: '🇸🇱' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
  { name: 'Solomon Islands', code: '+677', flag: '🇸🇧' },
  { name: 'Somalia', code: '+252', flag: '🇸🇴' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'South Sudan', code: '+211', flag: '🇸🇸' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sudan', code: '+249', flag: '🇸🇩' },
  { name: 'Suriname', code: '+597', flag: '🇸🇷' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Syria', code: '+963', flag: '🇸🇾' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Tajikistan', code: '+992', flag: '🇹🇯' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Togo', code: '+228', flag: '🇹🇬' },
  { name: 'Tonga', code: '+676', flag: '🇹🇴' },
  { name: 'Trinidad and Tobago', code: '+1', flag: '🇹🇹' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Turkmenistan', code: '+993', flag: '🇹🇲' },
  { name: 'Tuvalu', code: '+688', flag: '🇹🇻' },
  { name: 'Uganda', code: '+256', flag: '🇺🇬' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
  { name: 'Vanuatu', code: '+678', flag: '🇻🇺' },
  { name: 'Vatican City', code: '+379', flag: '🇻🇦' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
  { name: 'Zambia', code: '+260', flag: '🇿🇲' },
  { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
];

export default function BusinessApplicationPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+27',
    mobile: '',
    companyName: '',
    registrationNumber: '',
    annualTurnover: '',
    website: '',
    optIn: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Custom Country Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = allCountries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery)
  );

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Can't be empty";
    if (!formData.lastName.trim()) newErrors.lastName = "Can't be empty";
    if (!formData.email.trim()) {
      newErrors.email = "Can't be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.mobile.trim()) newErrors.mobile = "Can't be empty";
    if (!formData.companyName.trim()) newErrors.companyName = "Can't be empty";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Can't be empty";
    if (!formData.annualTurnover.trim()) newErrors.annualTurnover = "Can't be empty";
    if (!formData.website.trim()) newErrors.website = "Can't be empty";
    if (!formData.optIn) newErrors.optIn = 'Please check the consent box to proceed';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex justify-center items-stretch font-sans selection:bg-black selection:text-white">
      
      {/* Centered Vertical Strip Container matching screenshot exactly */}
      <div className="w-full max-w-[480px] bg-[#BDF500] text-black px-[2rem] sm:px-[2.4rem] py-[2.4rem] sm:py-[3.2rem] flex flex-col justify-between min-h-screen box-border shadow-2xl">
        
        <div>
          {/* Centered PayJustNow Brand Logo matching screenshot */}
          <div className="flex justify-center items-center mb-[1.6rem]">
            <img
              src="/images/pjn-form-logo.png"
              alt="PayJustNow"
              className="h-[3.6rem] sm:h-[4.2rem] w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[2rem] sm:text-[2.2rem] font-bold text-black text-center mb-[1rem] tracking-tight leading-[1.2]">
            For Business Applications Only
          </h1>

          {/* Subtitle */}
          <p className="text-[1.25rem] sm:text-[1.35rem] font-semibold text-black text-left mb-[2rem] leading-[1.3]">
            Interested in listing your business with PayJustNow?
          </p>

          {submitted ? (
            /* Confirmation Screen */
            <div className="py-[3rem] text-center bg-white/40 p-[2.4rem] rounded-none my-[2rem]">
              <div className="w-[5rem] h-[5rem] rounded-full bg-black text-[#BDF500] flex items-center justify-center mx-auto mb-[1.6rem]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-[2.2rem] font-bold text-black mb-[0.8rem]">
                Thank You!
              </h2>
              <p className="text-[1.35rem] text-black/90 leading-[1.5]">
                Your information has been received. We will be in touch with you shortly to assist with your application.
              </p>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[1.2rem]">
              
              {/* First name */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Start typing..."
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.firstName && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.firstName}</span>
                )}
              </div>

              {/* Last name */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Last name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Start typing..."
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.lastName && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.lastName}</span>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Start typing..."
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.email && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.email}</span>
                )}
              </div>

              {/* Mobile (with search dropdown popup matching screenshot) */}
              <div className="w-full relative" ref={dropdownRef}>
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Mobile <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-[0.6rem] w-full">
                  
                  {/* Country Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="relative bg-white flex items-center justify-center gap-[0.4rem] px-[0.8rem] h-[3.4rem] sm:h-[3.6rem] rounded-none border border-transparent hover:border-black/30 focus:border-black outline-none cursor-pointer select-none"
                    aria-label="Select Country Code"
                  >
                    {selectedCountry ? (
                      <span className="text-[1.6rem]">{selectedCountry.flag}</span>
                    ) : (
                      /* Globe icon matching screenshot */
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    )}
                    <span className="text-[0.9rem] text-black/70">▾</span>
                  </button>

                  {/* Phone input */}
                  <input
                    type="tel"
                    placeholder="Enter number"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    className="flex-1 h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                  />
                </div>

                {/* Country Search Popup Modal matching screenshot */}
                {dropdownOpen && (
                  <div className="absolute top-[100%] left-0 z-50 mt-[0.4rem] w-[270px] bg-white rounded-[6px] shadow-2xl border border-neutral-200 p-[0.8rem] flex flex-col animate-in fade-in zoom-in-95 duration-150">
                    
                    {/* Search bar */}
                    <div className="relative mb-[0.6rem]">
                      <input
                        type="text"
                        placeholder="Search"
                        autoFocus
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-[3.2rem] px-[0.8rem] text-[1.3rem] border border-neutral-300 rounded-[4px] outline-none focus:border-black text-black placeholder:text-neutral-400"
                      />
                    </div>

                    {/* Scrollable List */}
                    <div className="max-h-[220px] overflow-y-auto pr-[0.4rem] divide-y divide-neutral-100">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((c, idx) => (
                          <div
                            key={`${c.name}-${c.code}-${idx}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              handleChange('countryCode', c.code);
                              setDropdownOpen(false);
                              setSearchQuery('');
                            }}
                            className={`flex items-center justify-between px-[0.8rem] py-[0.7rem] hover:bg-neutral-100 cursor-pointer rounded-[4px] transition-colors ${
                              selectedCountry?.name === c.name ? 'bg-neutral-100' : ''
                            }`}
                          >
                            <div className="flex items-center gap-[0.8rem] text-left">
                              <span className="text-[1.6rem] leading-none">{c.flag}</span>
                              <span className="text-[1.3rem] text-neutral-800 font-medium truncate max-w-[140px]">
                                {c.name}
                              </span>
                            </div>
                            <span className="text-[1.2rem] text-neutral-400 font-normal">
                              {c.code}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="py-[1rem] text-center text-[1.2rem] text-neutral-400">
                          No country found
                        </div>
                      )}
                    </div>

                  </div>
                )}

                {errors.mobile && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.mobile}</span>
                )}
              </div>

              {/* Company Name */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Start typing..."
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.companyName && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.companyName}</span>
                )}
              </div>

              {/* Company Registration number */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Company Registration number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company CIPC number or ID number for sole proprietor"
                  value={formData.registrationNumber}
                  onChange={(e) => handleChange('registrationNumber', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.25rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.registrationNumber && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.registrationNumber}</span>
                )}
              </div>

              {/* Annual Turnover */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Annual Turnover <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter value"
                  value={formData.annualTurnover}
                  onChange={(e) => handleChange('annualTurnover', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.annualTurnover && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.annualTurnover}</span>
                )}
              </div>

              {/* Website */}
              <div className="w-full">
                <label className="block text-[1.2rem] sm:text-[1.25rem] font-bold text-black mb-[0.3rem]">
                  Website <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Start typing..."
                  value={formData.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  className="w-full h-[3.4rem] sm:h-[3.6rem] px-[1rem] bg-white text-black text-[1.3rem] font-normal border border-transparent focus:border-black outline-none placeholder:text-neutral-400 rounded-none shadow-none"
                />
                {errors.website && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.2rem] block">{errors.website}</span>
                )}
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-[1px] bg-black/25 my-[0.6rem]" />

              {/* Opt-In Consent Checkbox */}
              <div className="w-full">
                <label className="flex items-start gap-[0.8rem] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.optIn}
                    onChange={(e) => handleChange('optIn', e.target.checked)}
                    className="mt-[0.25rem] w-[1.6rem] h-[1.6rem] accent-black cursor-pointer bg-white rounded-none border border-black/30 flex-shrink-0"
                  />
                  <span className="text-[1.15rem] sm:text-[1.2rem] font-medium text-black leading-[1.35]">
                    I consent to receiving communication from PayJustNow and consent to risk assessments using credit bureau information about me and my partners/directors before and during our agreement for compliance and risk management.
                  </span>
                </label>
                {errors.optIn && (
                  <span className="text-[1.1rem] text-red-600 font-semibold mt-[0.3rem] block">{errors.optIn}</span>
                )}
              </div>

              {/* Bottom-Right Submit Button */}
              <div className="flex justify-end pt-[0.8rem]">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-[3.4rem] px-[2.2rem] bg-black hover:bg-neutral-900 text-white font-sans text-[1.3rem] font-bold rounded-none transition-colors cursor-pointer shadow-md active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
