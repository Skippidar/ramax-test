export function parseName(name){
    if (typeof name !== 'object' || name === undefined || name === null){
        return null;
    }
    let parts = [];
    if (name.first !== null){
        parts.push(name.first);
    }
    if (name.patronymic !== null){
        parts.push(name.patronymic);
    }
    if (name.last !== null){
        parts.push(name.last);
    }
    return parts.join(' ');
}

export function parseDepartment(department){
    return (
        department
            .sort( (dep1, dep2) => dep1.id > dep2.id)
            .map(dep => dep.name)
            .join(' -> ')
    )
}

export function printDate(str){
    let months = ['января', 'февраля', 'марта', 'апреля','мая', 'июня', 'июля', 'августа','сентября', 'октября', 'ноября', 'декабря'],
        date = new Date(str),
        day = date.getDate(),
        month = months[date.getMonth()],
        year = date.getFullYear();

    return `${day} ${month} ${year}`;
}

export function getObjData(obj, name){
    let path = name.split('/'),
        current = obj,
        result = null;
    if (current === null || current === undefined){
        return result;
    }
    const BreakException = {};
    try{
        path.forEach((to, index) => {
            if (current[to] !== undefined && current[to] !== null){
                if (parseInt(index, 10) === path.length - 1){
                    result = current[to];
                    throw BreakException;
                } else {
                    current = current[to];
                }
            } else {
                throw BreakException
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }

    return result;
}

export function addObjData(obj, name, value){
    let path = name.split('/'),
        current = obj;

    path.forEach((to, index) => {
        if (current[to] === undefined){
            if (parseInt(index, 10) === path.length - 1){
                if (value.value === null || value.value === ""){
                    current[to] = null;
                } else {
                    current[to] = value.value || value;
                }
            } else {
                current[to] = {};
            }
        }
        current = current[to];
    });
}

export function addRefs(obj, refs){
    for (const field in refs) {
        if (refs[field].refs !== undefined){
            if (obj[field] === undefined){
                obj[field] = {};
            }
            addRefs(obj[field], refs[field].refs)
        } else {
            addObjData(obj, field, refs[field]);
        }
    }
}

export function prepareName(str){
    const parts = str.split(' ');
    let patronymic;
    if (parts.length > 2) {
        patronymic = parts.filter((current, index) => {
            if (parseInt(index, 10) > 0 && parseInt(index, 10) < parts.length - 1){
                return current;
            } else {
                return false;
            }
        }).join(' ');
    }
    const name = {
        first: parts[0] || '',
        patronymic: patronymic ? patronymic : null,
        last: (parts.length > 1) ? parts[parts.length - 1] : null
    }
    return name;
}

export function prepareDepartment(list){
    const department = [];
    for (const id in list){
        department.push({
            id,
            name: list[id]
        })
    }
    return department;
}

export function prepareManager(id, employers){
    return {
        id: id,
        name: {...employers[id].name}
    };
}