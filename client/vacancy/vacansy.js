Template.vacancy.helpers({
    VacancyHelp: function () {
        return Vacancy.find();
    },
    VacansyCount: function () {
        if(1 >= Vacancy.find().count()){
            console.log(Vacancy.find().count());
            return false;
        }
    }
})