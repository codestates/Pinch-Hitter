'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notice_Boards', [
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 1,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 2,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 3,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 4,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 5,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 6,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 7,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 9,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 11,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 12,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 13,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 14,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 15,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 16,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 17,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 19,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 21,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 22,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 23,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 24,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 25,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 26,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 27,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 29,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 31,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 32,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 33,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 34,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 35,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 36,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 37,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 39,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 41,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 42,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 43,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 44,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 45,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 46,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 47,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 49,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 51,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 52,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 53,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 54,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 55,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 56,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 57,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 59,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 61,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 62,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 63,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 64,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 65,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 66,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 67,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 69,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    },
    {
      user_id: "100",
      occupation: '편의점',
      title:'GS편의점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-15',
      work_place:'강북',
      content:'1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 70,
      occupation: '패스트푸드점',
      title:'햄버거 패스트 푸드점 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강북',
      content:'1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.'
    },
    {
      user_id: 72,
      occupation: '카페',
      title:'동네 카페에서 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-08',
      work_place:'강북',
      content:'1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.'
    },
    {
      user_id: 73,
      occupation: '주유소',
      title:'주유소 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-11',
      work_place:'강남',
      content:'1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.'
    },
    {
      user_id: 74,
      occupation: '전단지',
      title:'빠르게 전단지 살포해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-27',
      work_place:'강서',
      content:'1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.'
    },
    {
      user_id: 75,
      occupation: '일반식당',
      title:'일반식당에서 서빙해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-24',
      work_place:'강북',
      content:'1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.'
    },
    {
      user_id: 76,
      occupation: '운전',
      title:'짧은거리 운전해주실 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-19',
      work_place:'강남',
      content:'1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.'
    },
    {
      user_id: 77,
      occupation: '마트',
      title:'마트 캐셔 경험 있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-17',
      work_place:'강북',
      content:'1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.'
    },
    {
      user_id: 79,
      occupation: '편의점',
      title:'미니스톱에서 경험있으신 대타 구합니다!',
      wage:'10,000원 이상',
      work_date:'2022-02-03',
      work_place:'강동',
      content:'1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notice_Boards', null, {});
  }
};
