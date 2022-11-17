export default{
    state: {
        workers: [
            {
                id: 1,
                FirstName: "Александр",
                LastName: "Шилов",
                PhoneNumber: "89149634536",
                email: "Shilov@mail.ru"
            },

            {
                id: 2,
                FirstName: "Илья",
                LastName: "Зайцев",
                PhoneNumber: "89149634546",
                email: "Zaitsev@mail.ru"
            },

            {
                id: 3,
                FirstName: "Олег",
                LastName: "Алексеев",
                PhoneNumber: "89249634536",
                email: "Alex@mail.ru"
            },

            {
                id: 4,
                FirstName: "Александр",
                LastName: "Савицкий",
                PhoneNumber: "89148634536",
                email: "Sav@mail.ru"
            },

            {
                id: 5,
                FirstName: "Ксения",
                LastName: "Михайлова",
                PhoneNumber: "89149734536",
                email: "Ksenia@mail.ru"
            },

            {
                id: 6,
                FirstName: "Роберт",
                LastName: "Мохов",
                PhoneNumber: "89149634356",
                email: "Moxov@mail.ru"
            },

            {
                id: 7,
                FirstName: "Елизавета",
                LastName: "Ларионова",
                PhoneNumber: "89149134536",
                email: "Elisabeth@mail.ru"
            },

            {
                id: 8,
                FirstName: "Иван",
                LastName: "Киселев",
                PhoneNumber: "89149634531",
                email: "Kiselev@mail.ru"
            },

            {
                id: 9,
                FirstName: "Елена",
                LastName: "Смирнова",
                PhoneNumber: "89146634536",
                email: "Smirnova@mail.ru"
            },

            {
                id: 10,
                FirstName: "Дмитрий",
                LastName: "Петров",
                PhoneNumber: "89149614536",
                email: "Petrov@mail.ru"
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        workers (state){
            return state.workers
        },
        workerById(state){
            return workerId => {
                return state.workers.find(worker => worker.id === workerId)
            }
        }
    }
}
