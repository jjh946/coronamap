const { DataTypes } = require('sequelize'); //시퀄라이즈 불러오기

module.exports = (sequelize) => { //화살표 함수를 외부로 익스포트
    return sequelize.define(
    // 매개변수 1 : 모델 이름
    'GlobalStat',
    // 매개변수 2: 속성 목록
    {
        id: {  // ID
            autoIncrement: true,                //값 자동 증가
            type: DataTypes.INTEGER.UNSIGNED,   // 부호 없는 정수(양의 정수)
            allowNull: false,                   // 빈 값 허용
            primaryKey: true,                   // 기본키로 지정
        },
        cc: {       // 국가 코드(county code)
            type: DataTypes.CHAR(2),
            allowNull: false,
        },
        date: {     // 날짜
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        confirmed: {// 확진자 수
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        death: {    // 사망자 수
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        released: { // 완치자 수
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tested: {   // 총 검사자 수
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        testing: {  // 검사중 수
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        negative: { // 결과 음성 수
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    //매개변수 3 : 추가옵션
    {
        sequelize,
        tableName: 'GlobalStat',
        index: [
            {
                name: 'PRIMARY',
                unique: true,
                fields: [{name: 'id'}],
            },
            {
                name: 'ccWithDate',
                unique: true,
                fields: [{ name: 'cc' }, { name: 'date' }],
            },
        ],
        timestamps: false,
    },    
    );
};
    