/**
 *
 * @TODO
 * Array와 Object 타입을 확인할 수 있는 코드가 필요합니다.
 */
export const checkType = (value, type) => {
    try {
        if (value != null && typeof value !== type) {
            throw new Error(`${value}는 ${type} 타입이어야 합니다.`);
        }
    } catch (e) {
        console.error(e.message);
    }
};
