import React from 'react';

const AccountTypeSelector = ({ selectedType, onSelect }) => {
  const types = [
    {
      id: 'tenant',
      label: 'Tenant',
      sub: 'Looking for a rental',
      icon: 'person',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBikN96QSvTTWkgMAXTWYp103JjVg4Z_xqqRW9VLQaB77bGpAa40WaVlMWwr6zct7a-tSMuN_DM_CDbF7lLywraObHXPzySYADPalf-QrQtpB-loKZHtlrGAAkLTjgJCCiD9QaaS_OcnSEJKwISmXxrYy_NsT3OgakmrjOMILmdrqP97H8_9TKQfONZ7r0Jws6BjZcZ6aMbWwxAuxkHFzNvSVfCgnpoNr4qItXLRpCqQNKzYLUykMwRrImobdLFtFomDhKxwZor8WtQ' // Dùng ảnh placeholder nếu link lỗi
    },
    {
      id: 'landlord',
      label: 'Landlord',
      sub: 'Managing properties',
      icon: 'domain',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSzIPz3iCNtrf6b0BTM4WhFLDlKB5qitt7oqIVhcDZHhorpDfbGiM1Sw3-o7kFaSSAhNAinYckNxp-2pA2g-Pucur4c_aHpaXT2gO9ExUP2CkxZiucR2A8KHRBV0vh9MRzuqy075__M0r2rsF_zzDaBCyVTEuaPKMTvzCyowLZYKHs_iNeGsU2atkqcBxW53Nvek5sHPzH0IOg7dtDrT-vI_MeHZ7ykIYL3BVRtK3Cq1DXNIsC6lrnxtRNYvBc0GRjHJx-5OKdAKH'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {types.map((type) => {
        const isSelected = selectedType === type.id;
        return (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelect(type.id)}
            className={`flex flex-col gap-3 p-4 rounded-xl border-2 text-left transition-all ${isSelected
                ? 'border-primary bg-primary/10 ring-2 ring-primary/20 ring-offset-2 ring-offset-card-dark'
                : 'border-gray-800 bg-transparent hover:border-gray-600 group'
              }`}
          >
            <div
              className={`w-full aspect-video rounded-lg bg-cover bg-center mb-1 bg-slate-700 ${isSelected ? 'ring-1 ring-white/10' : 'opacity-40 group-hover:opacity-100 transition-opacity'}`}
              style={{ backgroundImage: `url('${type.img}')` }}
            />
            <div>
              <p className={`font-bold flex items-center gap-2 ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                <span className={`material-symbols-outlined text-sm ${isSelected ? 'text-teal-accent' : ''}`}>
                  {type.icon}
                </span>
                {type.label}
              </p>
              <p className="text-slate-500 text-xs mt-1">{type.sub}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default AccountTypeSelector;