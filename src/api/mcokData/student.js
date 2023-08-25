import Mock from "mockjs";

// 数据模拟的核心是模仿数据库
// 也就是数据是齐全的，只是我们每个方法使用一部分

// 这里的List是公共数据
// 学生列表和信息列表相同，增删改查也通过这个List同步
let List = [];
const count = 200;

for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: Mock.Random.integer(Math.pow(10, 7), Math.pow(10, 8) - 1),
            name: Mock.Random.cname(),
            age: Mock.Random.integer(18, 60),
            sex: Mock.Random.integer(0, 1),
            father: Mock.Random.cname(),
            mather: Mock.Random.cname(),
            cla: Mock.mock("@integer(1,2)"),
            state: Mock.mock("@integer(1,3)"),
            time: Mock.Random.date("yyyy-MM-dd"),
            addr: Mock.mock("@county(true)"),
            phone: Mock.mock(/^1[0-9]{10}$/),
            title: Mock.Random.ctitle(4, 10),
            completed: Mock.Random.boolean(),
        })
    );
}

export default {
    // 获取学生数据
    getStudentData: (config) => {
        return {
            status: 200,
            message: "获取数据成功",
            data: List,
            // 我们也要有响应的思想，写成count就太死了
            total: List.length,
        };
    },
    // 删除学生数据
    deleteStudentData: (config) => {
        // delete没有body呀
        // 所以只能通过模拟了

        const id = config.url.split("/").pop();

        if (!id) {
            return {
                code: -999,
                message: "参数不正确",
            };
        } else {
            // 获得删除id之外的数据
            // 不使用绝对等于
            List = List.filter((u) => u.id != id);
            return {
                status: 200,
                message: "删除成功",
            };
        }
    },
    // 搜索学生
    seachrStudent: (config) => {
        // delete没有body呀
        // 所以只能通过模拟了
        const name = config.url.split("/").pop();

        if (!name) {
            return {
                code: 201,
                message: "空查询",
                searchList: List,
            };
        } else {
            // 查询不能修改原数据
            const searchList = List.filter((item) => item.name.includes(`${name}`));
            return {
                status: 200,
                message: "查询成功",
                searchList: searchList,
            };
        }
    },

    // 添加学生

    createStudent: (config) => {
        const { name, addr, age, time, sex, phone, id, father, mather, state, cla } =
            JSON.parse(config.body);
        let student = {
            name: name,
            age: age,
            sex: sex,
            time: time,
            addr: addr,
            phone: phone,
            id: id,
            father: father,
            mather: mather,
            cla: cla,
            state: state,
        };

        List.unshift(student);
        return {
            code: 20000,
            message: "添加成功",
        };
    },

    // 编辑学生
    updateStudent: (config) => {
        const { name, addr, age, time, sex, phone, id, father, mather, state, cla } =
            JSON.parse(config.body);

        List.some((item) => {
            if (item.id === item.id) {
                item.name = name;
                item.age = age;
                item.sex = sex;
                item.time = time;
                item.addr = addr;
                item.phone = phone;
                item.id = id;
                item.father = father;
                item.mather = mather;
                item.cla = cla;
                item.state = state;
                return true;
            }
        });
        return {
            code: 20000,
            message: "编辑成功",
        };
    },

    // 获取作业数据
    getWorkData: (config) => {
        let url = config.url;
        // 获取处理pramas的特殊对象
        const params = new URLSearchParams(url.split("?")[1]);
        const page = params.get("page");
        const size = params.get("size");

        const works = [];
        List.forEach((item) => {
            works.push({
                id: item.id,
                name: item.name,
                cla: item.cla,
                title: item.title,
                completed: item.completed,
            });
        });

        // 匹配分页数据
        const pageMatchData = works.slice((page - 1) * size, page * size);

        return {
            status: 200,
            message: "获取数据成功",
            data: pageMatchData,
            // 我们也要有响应的思想，写成count就太死了
            total: List.length,
        };
    },
};
