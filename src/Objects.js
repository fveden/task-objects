/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        if (data.hasOwnProperty('age')) delete data.age;
    } else if (data.gender === 'male') {
        if (!data.hasOwnProperty('income')) data.income = 100000;
    }
    return data;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let res = { ...obj1, ...obj2, ...obj3 };
    return Object.keys(res).sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let arr = [];

    let fun = function deep(object) {
        let keys = Object.keys(object);
        for (let j = 0; j < keys.length; j++) {
            if (typeof object[keys[j]] == 'object') {
                object[keys[j]] = { ...object[keys[j]] };
                deep(object[keys[j]]);
            }
        }
        return;
    };

    for (let i = 0; i < count; i++) {
        let tempObj = { ...obj, id: i };
        fun(tempObj);
        arr.push(tempObj);
    }

    return arr;
}
