import Mock from "mockjs";

export default {
    getLogin: (config) => {
        const { username, password } = JSON.parse(config.body);
        // 先判断用户是否存
        // 判断账号和密码是否对应
        // 匹配1-16位的字符串
        const regexName = /^[A-Za-z]{4,10}$/;
        const regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,12}$/;

        if (regexName.test(username) && regexPwd.test(password)) {
            return {
                code: 200,
                data: {
                    status: 200,
                    token: Mock.Random.guid(),
                    message: "登录成功",
                    username: username,
                },
            };
        } else {
            return {
                code: -999,
                data: {
                    message: "密码或用户名错误",
                },
            };
        }
    },
};
