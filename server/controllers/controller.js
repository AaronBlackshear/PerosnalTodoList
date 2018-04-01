module.exports = {
    getDaily: (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_daily()
        .then(dailyList => res.status(200).json(dailyList))
        .catch(err => res.status(500).json(err));
    },
    getWeekly: (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_weekly()
        .then(weeklyList => res.status(200).json(weeklyList))
        .catch(err => res.status(500).json(err));
    },
    getMonthly: (req,res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_monthly()
        .then(monthlyList => res.status(200).json(monthlyList))
        .catch(err => res.status(500).json(err));
    },
    createDaily: (req,res) => {
        const dbInstance = req.app.get('db');
        const { todo } = req.body;

        dbInstance.create_daily(todo)
        .then(dailyList => res.status(200).json(dailyList))
        .catch(err => res.status(500).json(err));
    },
    createWeekly: (req,res) => {
        const dbInstance = req.app.get('db');
        const { todo } = req.body;

        dbInstance.create_weekly(todo)
        .then(weeklyList => res.status(200).json(weeklyList))
        .catch(err => res.status(500).json(err));
    },
    createMonthly: (req,res) => {
        const dbInstance = req.app.get('db');
        const { todo } = req.body;

        dbInstance.create_monthly(todo)
        .then(monthlyList => res.status(200).json(monthlyList))
        .catch(err => res.status(500).json(err));
    },
    changeDaily: (req,res) => {
        const dbInstance = req.app.get('db');
        const { newTodo } = req.body;
        const { id } = req.params;

        dbInstance.change_daily(id,newTodo)
        .then(daily => res.status(200).json(daily))
        .catch(err => res.status(500).json(err));
    }
}