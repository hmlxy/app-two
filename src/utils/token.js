// 设置token值
export function setToke(tokeKey, token) {
    return localStorage.setItem(tokeKey, token);
}

// 获取token值
export function getToke(tokeKey) {
    return localStorage.getItem(tokeKey);
}

// 移除token值
export function removeToke(tokekey) {
    return localStorage.removeItem(tokekey);
}
