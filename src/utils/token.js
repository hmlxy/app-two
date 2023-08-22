// 设置token值
export function setToken(tokeKey, token) {
    return localStorage.setItem(tokeKey, token);
}

// 获取token值
export function getToken(tokeKey) {
    return localStorage.getItem(tokeKey);
}

// 移除token值
export function removeToken(tokekey) {
    return localStorage.removeItem(tokekey);
}
