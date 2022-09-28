export const checkType = (value, type) => {
    try {
        if (value != null && typeof value !== type) {
            throw new Error(`${value}는 ${type} 타입이어야 합니다.`);
        }
    } catch (e) {
        console.error(e.message);
    }
};
