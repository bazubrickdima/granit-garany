Template.vacancy.helpers({
    VacancyHelp: function () {
        return Vacancy.find();
    },
    VacansyCount: function () {
        if(0 >= Vacancy.find().count()){
            console.log(Vacancy.find().count());
            return false;
        }else{
            return true;
        }
    }
})