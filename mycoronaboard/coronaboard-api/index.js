const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');

async function launchServer(){
    const app = express();  //익스프레스 인스턴스 생성
    // contest-type이 application/json인 http 요청의 바디를 파싱할 수 있도록 설정
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
    res.json({ message: 'Hello CoronaBoard!\n 이상으로 단 십여줄의 코드만으로 api서버를 실행시켰습니다' });
    });

    try {
        await sequelize.sync();
        console.log('Database is ready!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error);
        process.exit(1);
    }

    const port = process.env.PORT || 8080; // 포트 기본값을 8080으로 지정
    app.listen(port, () => {
        console.log(`Server is running on port ${port}.`);
    });
}

launchServer();