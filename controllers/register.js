const handleRegister = (req, res, db, bcrypt) => {
    const { username, userLogin, email, password, birthDate, countryId } = req.body;
    if (!email || !username || !password) {
        // VALIDATION NEEDS TO BE HERE, THIS BLOCK IS A TEMPORARY SOLUTION
        return res.status(400).json('Incorrect form submission');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    db.transaction(trx => {
        trx.insert({
            user_login: userLogin,
            password_hash: hash,
            username: username,
            email: email,
            birth_date: birthDate,
            country_id: countryId
        })
            .into('users')
            .then(user => {
                res.json(user);
            })
            .then(trx.commit)
            .catch(trx.rollback)
    })
        .catch((err) => res.status(400).json(`Unable to register ${err}`))
};

module.exports = {
    handleRegister: handleRegister
};