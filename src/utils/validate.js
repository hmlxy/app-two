// 用户名匹配
export function nameRule(rule, value, callback) {
    // 请输入4-10位字符
    let reg = /^[A-Za-z]{4,10}$/;
    if (value === "") {
        // Error方法显示提示
        callback(new Error("请输入用户名"));
    } else if (!reg.test(value)) {
        callback(new Error("请输入4-10用户名"));
    } else {
        callback();
    }
}

// 密码匹配
export function passswordRule(rule, value, callback) {
    // 请输入6-12位字符
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,12}$/;
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!reg.test(value)) {
        callback(new Error("请输入6-12位包含大小写字母数字特殊字符的"));
    } else {
        callback();
    }
}
