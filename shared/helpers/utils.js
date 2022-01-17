// eslint-disable-next-line import/prefer-default-export
export const countCategories = (arr, searchKey) => {
    const reducer = (accumulator, currentValue) => {
        if (currentValue.category === searchKey) {
            if (currentValue.status === 'active') {
                accumulator.active += 1;
            }
            else {
                accumulator.archived += 1;
            }
        }
        return accumulator;
    };
    return arr.reduce(reducer, { active: 0, archived: 0 });
};
//# sourceMappingURL=utils.js.map