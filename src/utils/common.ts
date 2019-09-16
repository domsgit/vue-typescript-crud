/**
 * 去掉值为null，只取有值的的对象
 * @param obj 需要去掉null值得对象
 */
const removeNull = function(obj: {}) {
  let newObj: any = {};
  Object.entries(obj).map(item => {
    if (item[1] !== null) {
      newObj[item[0]] = item[1];
    }
  });
  return newObj;
};

export { removeNull };
