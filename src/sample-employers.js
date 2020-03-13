const employers = {
    12345: {
        id: 12345,
        name: {
            first: "Петр",
            patronymic: "Сидорович",
            las: "Иванов"
        },
        department: [
            {
                id: 100500,
                name: "Отдел 7"
            },
            {
                id: 1234,
                name: "Департамент 5"
            },
            {
                id: 11,
                name: "Филиал 1"
            }
        ],
        jobTitle: "Начальник отдела",
        contacts: {
            phoneWork: "123",
            phoneMobile: "+7 111 555 55 55",
            email: "peter.ivanov@example.com",
            office: 502,
            fax: "+7 111 555 55 56"
        },
        birthDay: "1990-03-05",
        hireDate: "2010-05-15",
        manager: {
            id: 1256,
            name: {
                first: "Сидор",
                patronymic: "Иванович",
                last: "Петров"
            }
        },
        pictureUrl: "https://image.flaticon.com/icons/svg/145/145867.svg"
    },
    1256: {
        id: 1256,
        name: {
            first: "Сидор",
            patronymic: "Иванович",
            last: "Петров"
        },
        department: [
            {
                id: 1234,
                name: "Департамент 5"
            },
            {
                id: 11,
                name: "Филиал 1"
            }
        ],
        jobTitle: "Начальник начальников",
        contacts: {
            phoneWork: "123",
            phoneMobile: "+7 111 666 66 66",
            email: "sidor.petrov@example.com",
            office: 502,
            fax: "+7 111 666 66 66"
        },
        birthDay: "1986-07-23",
        hireDate: "2008-03-14",
        manager: null,
        pictureUrl: "https://image.flaticon.com/icons/svg/145/145859.svg"
    },
    100: {
        id: 100,
        name: {
            first: "Иван",
            patronymic: "Иванович",
            last: "Иванов"
        },
        department: [
            {
                id: 1234,
                name: "Департамент 5"
            }
        ],
        jobTitle: "Главный начальник начальников",
        contacts: {
            email: "ivanov.ivan@example.com",
            office: 502
        },
        birthDay: "1945-11-11",
        hireDate: "2000-01-01",
        manager: null,
        pictureUrl: "https://image.flaticon.com/icons/png/512/417/417777.png"
    }
}

export default employers;