import React from 'react';

const data = [
  {
    subTitle: `제1조 (목적)`,
    content: [
      `이 약관은 (재)온누리선교재단(이하“회사”라 함)가 운영하는 인터넷 사이트인 www.cgntv.net(이하 “사이트"라 함)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이트와 이용자의 권리의무 및 책임사항을 규정함을 목적으로 합니다.`,
    ],
  },
  {
    subTitle: `제2조 (약관의 효력 및 변경)`,
    content: [
      `이 약관은 (재)온누리선교재단(이하“회사”라 함)가 운영하는 인터넷 사이트인 www.cgntv.net(이하 “사이트"라 함)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 사이트와 이용자의 권리의무 및 책임사항을 규정함을 목적으로 합니다.`,
      `2) 회사는 약관의 규제 등에 관한 법률, 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 방문판매 등에 관한 법률, 소비자보호법 등 관련법을 위  
     배하지 않는 범위에서 약관을 만들었으며, 필요할 경우 위의 관련법 범위에서 약관을 개정할 수 있습니다.`,
      `3) 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 사이트의 초기화면에 그 적용 일자 7일 이전부터 적용 일자 전날까지 공지함으로써 효력이 
     발생됩니다. 이용자는 변경된 약관에 동의하지 않을 경우 회사가 정한 양식에 따라 이용자탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 사용할 
     경우 약관의 변경사항에 동의한 것으로 간주합니다.`,
      `4) 회사가 약관을 개정할 경우에는 그 개정약관은 그 적용 일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 적용됩니다. 단, 
     이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 개정약관의 공지기간 내에 회사에 송신하여 회사의 동의를 받은 경우에는 개정약관 조항이 적용됩니 
     다.`,
    ],
  },
  {
    subTitle: `제3조 (약관 외 준칙)`,
    content: [
      `이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 관계법령 및 관례에 따릅니다.`,
    ],
  },
  {
    subTitle: `제4조 (용어의 정의)`,
    content: [
      `이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.`,
      `1) 이용자 : “사이트”에 접속하여 이 약관에 따라 회사가 제공하는 무료서비스를 받는 이용자를 말합니다.`,
    ],
  },
];

const PolicyTerms = () => {
  return (
    <div
      className={`flex w-full max-w-1200 flex-col items-center justify-start`}
    >
      <p className={`text-bold24 max-lg:text-bold18 mb-24 text-primary-500`}>
        제1창 총 칙
      </p>
      <div className={`flex w-full flex-col items-start justify-start gap-24`}>
        {data.map((item, idx) => (
          <div key={idx}>
            <p className={`text-bold18 max-lg:text-bold16 mb-12 text-grey-500`}>
              {item.subTitle}
            </p>
            <ul
              className={`text-regular18 max-lg:text-regular16 text-grey-500`}
            >
              {item.content.map((content, contentIdx) => (
                <li key={contentIdx}>{content}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyTerms;
